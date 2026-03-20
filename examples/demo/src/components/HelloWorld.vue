<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  createMxCad,
  MxCpp,
  McGeMatrix3d,
  McDbAttribute,
  McDbBlockReference,
  McDbMText,
  McDbText,
  McObjectId,
  McDbCircle,
  MxCADUiPrPoint,
  MxCADSelectionSet,
  MxCADResbuf,
  DxfCode,
  McDbPolyline,
  McGePoint3d,
} from "mxcad";
import { MxFun } from "mxdraw";

/** 文本对象数据结构 */
interface TextItem {
  text: string;
  pos: McGePoint3d;
}

/** 圆形/包围盒对象数据结构 */
interface CircleItem {
  center: McGePoint3d;
  box: {
    minPt: McGePoint3d;
    maxPt: McGePoint3d;
  };
}

/** 块引用包围盒数据结构 (用于区域识别) */
interface BlockBoxItem {
  box: {
    minPt: McGePoint3d;
    maxPt: McGePoint3d;
  };
  pl: McDbPolyline;
}

const textArr = ref<TextItem[]>([]);
const circleArr = ref<CircleItem[]>([]);
const RegionIdentData = ref<TextItem[]>([]);

const flag = ref(false); // 标记是否已进行区域识别跳转
const isDoOverlay = ref(false); // 标记是否需要执行图纸叠加

/**
 * 计算两点之间的距离平方 (用于性能优化比较)
 */
const getDistanceSquared = (p1: McGePoint3d, p2: McGePoint3d): number => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return dx * dx + dy * dy;
};

/**
 * 从对象数组中找出离目标点最近的对象
 * @param target 目标坐标
 * @param items 候选对象数组
 */
function findNearestObjectFast(
  target: McGePoint3d,
  items: CircleItem[]
): CircleItem | undefined {
  if (!items || items.length === 0) return undefined;

  let nearestItem = items[0];
  let minDistSq = getDistanceSquared(target, items[0].center);

  for (let i = 1; i < items.length; i++) {
    const currentItem = items[i];
    if (!currentItem.center) continue;

    const distSq = getDistanceSquared(target, currentItem.center);
    if (distSq < minDistSq) {
      minDistSq = distSq;
      nearestItem = currentItem;
    }
  }
  return nearestItem;
}

/**
 * 筛选出位于包围盒范围内的对象
 * @param box 包围盒
 * @param items 候选对象数组
 */
function filterObjectsInBox(
  box: { minPt: McGePoint3d; maxPt: McGePoint3d },
  items: TextItem[]
): TextItem[] {
  if (!items || items.length === 0) return [];

  // 标准化包围盒范围 (防止 min > max)
  const minX = Math.min(box.minPt.x, box.maxPt.x);
  const maxX = Math.max(box.minPt.x, box.maxPt.x);
  const minY = Math.min(box.minPt.y, box.maxPt.y);
  const maxY = Math.max(box.minPt.y, box.maxPt.y);

  return items.filter((item) => {
    if (!item.pos) return false;
    const { x, y } = item.pos;
    if (typeof x !== "number" || typeof y !== "number") return false;

    // 包含边界判断
    return x >= minX && x <= maxX && y >= minY && y <= maxY;
  });
}

/**
 * 获取数字数组中最小值的索引
 * @param arr 数字数组
 * @returns 最小值索引，空数组返回 -1
 */
function findMinIndex(arr: number[]): number {
  if (!arr || arr.length === 0) return -1;

  let minIndex = 0;
  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}

/**
 * 按 Y 轴由上至下排序 (假设 Y 越小越靠上，即屏幕坐标系)
 * 如果是 CAD 坐标系 (Y 越大越靠上)，请修改为 b.pos.y - a.pos.y
 */
function sortItemsByYAsc(items: TextItem[]): TextItem[] {
  return [...items].sort((a, b) => {
    const yA = a.pos?.y ?? Infinity;
    const yB = b.pos?.y ?? Infinity;
    return yA - yB;
  });
}

/**
 * 初始化命令行交互
 */
const initCommand = () => {
  const inputBox = document.getElementById("myInput");
  const cmdWindow = document.getElementById("myArea");

  if (!inputBox || !cmdWindow) return;

  let inputText = "";

  inputBox.oninput = () => {
    inputText = (inputBox as HTMLInputElement).value;
  };

  inputBox.onkeydown = (e: KeyboardEvent) => {
    MxFun.setCommandLineInputData(inputText, e.keyCode);
    if (e.keyCode === 13) {
      (inputBox as HTMLInputElement).value = "";
      inputText = "";
    }
  };

  // 监听命令行消息变化
  MxFun.listenForCommandLineInput(({ msCmdTip, msCmdDisplay, msCmdText }) => {
    inputText = msCmdText;
    cmdWindow.textContent = `${msCmdDisplay}\n${msCmdTip}`;
    cmdWindow.scrollTop = cmdWindow.scrollHeight;
  });
};

/**
 * 递归遍历块表记录，提取文本和圆实体
 * @param idBlkRec 块表记录 ID
 * @param mat 变换矩阵
 */
function traverseBlockEntities(idBlkRec: McObjectId, mat: McGeMatrix3d) {
  const record = idBlkRec.getMcDbBlockTableRecord();
  if (!record) return;

  const allEntIds = record.getAllEntityId();
  if (!allEntIds) return;

  allEntIds.forEach((id) => {
    const ent = id.getMcDbEntity();
    if (!ent) return;

    // 处理单行文本
    if (ent instanceof McDbText) {
      const txt = ent as McDbText;
      textArr.value.push({
        text: txt.textString,
        pos: txt.position.clone().transformBy(mat),
      });
    }
    // 处理多行文本
    else if (ent instanceof McDbMText) {
      const mtxt = ent as McDbMText;
      textArr.value.push({
        text: mtxt.contents,
        pos: mtxt.location.clone().transformBy(mat),
      });
    }
    // 处理圆 (作为跳转锚点)
    else if (ent instanceof McDbCircle) {
      const center = ent.center.clone().transformBy(mat);
      const bbox = ent.getBoundingBox();
      if (bbox) {
        circleArr.value.push({
          center,
          box: {
            minPt: bbox.minPt.clone().transformBy(mat),
            maxPt: bbox.maxPt.clone().transformBy(mat),
          },
        });
      }
    }
    // 递归处理块引用
    else if (ent instanceof McDbBlockReference) {
      const blkRef = ent as McDbBlockReference;
      traverseBlockEntities(blkRef.blockTableRecordId, blkRef.blockTransform);

      // 处理块属性
      const attrIds = blkRef.getAllAttribute();
      attrIds.forEach((attrId) => {
        const attribt = attrId.getMcDbEntity() as McDbAttribute;
        if (attribt) {
          textArr.value.push({
            text: attribt.textString,
            pos: attribt.position.clone().transformBy(mat),
          });
        }
      });
    }
  });
}

/**
 * 获取当前空间所有相关的圆和文本实体
 */
const getAllCircleEnts = () => {
  textArr.value = [];
  circleArr.value = [];

  const mxcad = MxCpp.getCurrentMxCAD();
  const currentSpaceId = mxcad.database.currentSpace.getObjectID();
  traverseBlockEntities(currentSpaceId, new McGeMatrix3d());
};

/**
 * 功能：智能跳转
 * 逻辑：用户选点 -> 找最近的圆 -> 获取圆包围盒内的文本 -> 排序 -> 跳转新图纸
 */
const IntelligentRedirection = async () => {
  const getPoint = new MxCADUiPrPoint();
  getPoint.setMessage("请选择需要识别的数据位置");

  const point = await getPoint.go();
  if (!point) return;

  // 1. 查找离选点最近的圆 (作为锚点)
  const nearestCircle = findNearestObjectFast(point, circleArr.value);
  if (!nearestCircle) {
    alert("未识别到目标跳转条件 (未找到附近的圆)");
    return;
  }

  // 2. 获取该圆包围盒内的所有文本
  const result = filterObjectsInBox(nearestCircle.box, textArr.value);
  if (result.length === 0) {
    alert("未识别到目标跳转条件 (包围盒内无文本)");
    return;
  }

  // 3. 按 Y 轴由上至下排序
  const sortedResult = sortItemsByYAsc(result);

  // 4. 更新全局识别数据并跳转
  RegionIdentData.value = sortedResult;

  const mxcad = MxCpp.getCurrentMxCAD();
  mxcad.openWebFile(new URL("../../public/demo1.mxweb", import.meta.url).href);
};

/**
 * 功能：区域识别跳转 (在目标图纸中定位具体块)
 * 逻辑：根据文本内容匹配 -> 计算距离最近的块 -> 缩放视图
 */
const RegionIdent = () => {
  if (RegionIdentData.value.length === 0) return;

  const firstItem = RegionIdentData.value[0];
  const lastItem = RegionIdentData.value[RegionIdentData.value.length - 1];

  // 1. 获取起始文本的位置
  const topPos = textArr.value.find(
    (item) => item.text === firstItem.text
  )?.pos;
  if (!topPos) {
    alert(`未识别到目标数据: ${lastItem.text} / ${firstItem.text}`);
    return;
  }

  // 2. 筛选出所有与结束文本内容相同的对象
  const identTexts = textArr.value.filter(
    (item) => item.text === lastItem.text
  );
  if (identTexts.length === 0) {
    alert(`未识别到目标数据: ${lastItem.text}`);
    return;
  }

  // 3. 选择图中所有的块引用 (INSERT)
  const ss = new MxCADSelectionSet();
  ss.allSelect(new MxCADResbuf([DxfCode.kEntityType, "INSERT"]));
  if (!ss.count()) {
    alert("图中未找到块引用");
    return;
  }

  // 4. 构建块引用的包围盒和多段线列表
  const blkRefArr: BlockBoxItem[] = [];
  ss.forEach((item) => {
    const entity = item.getMcDbEntity();
    if (!entity) return;

    const bbox = entity.getBoundingBox();
    if (!bbox) return;

    const { minPt, maxPt } = bbox;

    // 创建闭合多段线用于计算最近点
    const pl = new McDbPolyline();
    pl.isClosed = true;
    pl.addVertexAt(minPt);
    pl.addVertexAt(new McGePoint3d(minPt.x, maxPt.y));
    pl.addVertexAt(maxPt);
    pl.addVertexAt(new McGePoint3d(maxPt.x, minPt.y));

    blkRefArr.push({
      box: { minPt, maxPt },
      pl,
    });
  });

  if (blkRefArr.length === 0) return;

  // 5. 第一次匹配：找离“起始文本”最近的块
  const distancesStart = blkRefArr.map((item) =>
    item.pl.getClosestPointTo(topPos, false).val.distanceTo(topPos)
  );
  const minIndexStart = findMinIndex(distancesStart);
  const boxBlkBef = blkRefArr[minIndexStart];

  // 6. 在最近的块范围内，找具体的“结束文本”
  const matchedTexts = filterObjectsInBox(boxBlkBef.box, identTexts);
  if (matchedTexts.length === 0) {
    alert("在目标块区域内未找到匹配的结束文本");
    return;
  }
  const resultText = matchedTexts[0];

  // 7. 第二次匹配：找离“结束文本”最近的块 (二次确认或修正)
  const distancesEnd = blkRefArr.map((item) =>
    item.pl
      .getClosestPointTo(resultText.pos, false)
      .val.distanceTo(resultText.pos)
  );
  const indexEnd = findMinIndex(distancesEnd);
  const targetBox = blkRefArr[indexEnd].box;

  // 8. 执行缩放
  const mxcad = MxCpp.getCurrentMxCAD();
  const { minPt, maxPt } = targetBox;
  
  const center = minPt.clone().addvec(maxPt.sub(minPt).mult(1/2))
  let mxdraw = MxFun.getCurrentDraw();
  mxdraw
    .getTempMarkDraw()
    .drawCircleMark(center.toVector3(), mxdraw.viewCoordLong2Cad(50), 0xff0000);
  mxdraw.updateDisplay();
  mxcad.zoomW(minPt, maxPt);
  mxcad.regen();
};

/**
 * 功能：回退上级图纸
 */
const goBack = () => {
  const mxcad = MxCpp.getCurrentMxCAD();
  if (!mxcad) return;

  flag.value = false;
  RegionIdentData.value = [];
  mxcad.openWebFile(new URL("../../public/demo2.mxweb", import.meta.url).href);
};

/**
 * 功能：图纸叠加实现
 * @param fileUrl 背景图纸路径
 */
function Mx_doOverlay(fileUrl: string) {
  const mxcad = MxCpp.getCurrentMxCAD();
  mxcad.mxdraw.makeCurrent();
  // 颜色示例：0xc90696969 (带透明度的灰色)
  mxcad.loadDwgBackground(
    fileUrl,
    (isok: boolean) => {
      if (isok) {
        const backgroundEntity = mxcad.getBackgroundEntity();
        backgroundEntity.setShow(fileUrl, true);
        isDoOverlay.value = false;
      } else {
        console.error("加载背景图纸失败");
      }
    },
    0xc90696969
  );
}

/**
 * 功能：触发图纸叠加
 */
const DrawingOverlay = () => {
  const mxcad = MxCpp.getCurrentMxCAD();
  flag.value = true;
  RegionIdentData.value.length = 0;
  mxcad.openWebFile(new URL("../../public/test1.mxweb", import.meta.url).href);
  isDoOverlay.value = true;
};

onMounted(() => {
  const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st";

  createMxCad({
    canvas: "#myCanvas",
    locateFile: (fileName) => {
      return new URL(
        `../../node_modules/mxcad/dist/wasm/${mode}/${fileName}`,
        import.meta.url
      ).href;
    },
    fileUrl: new URL("../../public/demo2.mxweb", import.meta.url).href,
    fontspath: new URL("../../node_modules/mxcad/dist/fonts", import.meta.url)
      .href,
    onOpenFileComplete: () => {
      getAllCircleEnts();

      const mxcad = MxCpp.getCurrentMxCAD();
      if (mxcad) {
        mxcad.zoomAll();
        mxcad.regen();
      }

      // 如果有预存的识别数据，执行区域识别
      if (RegionIdentData.value.length) {
        flag.value = true;
        RegionIdent();
      }

      // 如果需要叠加图纸
      if (isDoOverlay.value) {
        const overlayUrl = new URL("../../public/test2.mxweb", import.meta.url)
          .href;
        Mx_doOverlay(overlayUrl);
      }
    },
  });

  initCommand();
});
</script>

<template>
  <div class="controls">
    <button @click="IntelligentRedirection">智能跳转</button>
    <button v-if="flag" @click="goBack">回退原始图纸</button>
    <button @click="DrawingOverlay">图纸叠加示例</button>
  </div>

  <div class="canvas-container">
    <canvas id="myCanvas"></canvas>
  </div>

  <div class="command-line">
    <textarea id="myArea" readonly placeholder="命令行输出..."></textarea>
    <input id="myInput" type="text" placeholder="输入命令..." />
  </div>
</template>

<style scoped>
.controls {
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.controls button {
  margin-right: 10px;
  padding: 8px 16px;
  cursor: pointer;
}

.canvas-container {
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
}

#myCanvas {
  width: 100%;
  height: 100%;
  display: block;
}

.command-line {
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
  background-color: #333;
}

#myArea {
  width: 100%;
  height: 8vh;
  background-color: #000;
  color: #0f0;
  border: 1px solid #444;
  border-radius: 4px;
  resize: none;
  font-family: monospace;
  font-size: 12px;
  margin-bottom: 5px;
  box-sizing: border-box;
}

#myInput {
  width: 100%;
  height: 2vh;
  background-color: #000;
  color: #fff;
  border: 1px solid #444;
  border-radius: 4px;
  font-family: monospace;
  box-sizing: border-box;
}

#myInput:focus,
#myArea:focus {
  outline: none;
  border-color: #0f0;
}
</style>