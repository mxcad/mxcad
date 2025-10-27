<script setup lang="ts">
import { onMounted } from "vue";
import {
  McDbPolyline,
  McGePoint3d,
  MxCADUiPrPoint,
  MxCpp,
  createMxCad,
  DxfCode,
  McDbText,
  McDbMText,
  McDbBlockTableRecord,
  MxCADUiPrEntity,
  McGeMatrix3d,
  McDbBlockReference,
  MxCADResbuf,
  MxCADSelectionSet,
  McObjectId,
  McDbEntity,
  McCmColor,
  ColorIndexType,
} from "mxcad";
import { MxCursorType } from "mxdraw";

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
    fileUrl: new URL("../../public/333.mxweb", import.meta.url).href,
    fontspath: new URL("../../node_modules/mxcad/dist/fonts", import.meta.url)
      .href,
  });
});

interface TextInfo {
  type: "TEXT" | "MTEXT"; // 文本类型
  string: string; // 文本内容
  position: { x: number; y: number }; //文本原始位置
  relativePos: { x: number; y: number }; //文本相对位置
}
// 提取文本信息
const getTextInfo = async () => {
  const div = document.getElementById("myCanvas");
  if (!div) return;
  // 鼠标悬停时显示手型
  div.addEventListener("mouseenter", () => {
    div.style.cursor = "pointer";
  });

  // 或者直接设置
  div.style.cursor = "crosshair"; // 立即生效
  const getPt1 = new MxCADUiPrPoint();
  getPt1.setMessage("请设置提取文本范围角点1");
  getPt1.setCursorType(MxCursorType.kCross);
  const pt1 = await getPt1.go();
  if (!pt1) return;
  const getPt2 = new MxCADUiPrPoint();
  getPt2.setMessage("请设置提取文本范围角点2");
  getPt2.setDisableOsnap(true);
  getPt2.setDisableDynInput(true);
  getPt2.disableAllTrace(true);
  let pl: null | McDbPolyline = null;
  getPt2.setUserDraw((pt, pw) => {
    pl = new McDbPolyline();
    pl.addVertexAt(pt1);
    pl.addVertexAt(new McGePoint3d(pt1.x, pt.y, 0));
    pl.addVertexAt(pt);
    pl.addVertexAt(new McGePoint3d(pt.x, pt1.y, 0));
    pl.isClosed = true;
    pw.drawMcDbEntity(pl);
  });
  const pt2 = await getPt2.go();
  if (!pt2) return;
  // 绘制提取框
  const mxcad = MxCpp.getCurrentMxCAD();
  if (pl) mxcad.drawEntity(pl);
  // 提取框内文本信息
  const ss = new MxCADSelectionSet();
  const filter = new MxCADResbuf([DxfCode.kEntityType, "TEXT,MTEXT,INSERT"]);
  await ss.crossingSelect(pt1.x, pt1.y, pt2.x, pt2.y, filter);
  if (!ss.count()) return;

  // 将左上角的角点当作新原点并记录下文本相对该原点的坐标
  const newOrigin = new McGePoint3d(
    Math.min(pt1.x, pt2.x),
    Math.max(pt1.y, pt2.y)
  );
  const textInfo: TextInfo[] = []; //文本信息数组
  ss.forEach((id) => {
    const ent = id.getMcDbEntity();
    if (ent instanceof McDbText) {
      if (ent.textString) {
        textInfo.push({
          type: "TEXT",
          string: ent.textString,
          position: { x: ent.position.x, y: ent.position.y },
          relativePos: {
            x: ent.position.x - newOrigin.x,
            y: ent.position.y - newOrigin.y,
          },
          // 可提取其他额外信息....
        });
      }
    } else if (ent instanceof McDbMText) {
      if (ent.contents) {
        textInfo.push({
          type: "MTEXT",
          string: ent.contents,
          position: { x: ent.location.x, y: ent.location.y },
          relativePos: {
            x: ent.location.x - newOrigin.x,
            y: ent.location.y - newOrigin.y,
          },
          // 可提取其他额外信息....
        });
      }
    } else if (ent instanceof McDbBlockReference) {
      textInfo.push(...Mx_ForEachBlkEntity(id, newOrigin));
    }
  });
  // 输出文本信息
  console.log(textInfo);

  // 截图
  Mx_ScreenToJpg(pt1, pt2);
};

const textInfoArr: TextInfo[] = []; //文本信息数组
function Mx_ModyfBlockRecordEntity(
  blkRec: McDbBlockTableRecord | null,
  mart: McGeMatrix3d,
  newOrigin: McGePoint3d
) {
  if (!blkRec) return [];
  // 获取图块中所有实体Id
  blkRec.getAllEntityId().forEach((id) => {
    let ent = id.getMcDbEntity();
    if (ent) {
      // 若实体为图块，则递归遍历
      if (ent instanceof McDbBlockReference) {
        let blkref = ent as McDbBlockReference;
        let mat = blkref.blockTransform.clone();
        mat.preMultBy(mart);
        Mx_ModyfBlockRecordEntity(
          blkref.blockTableRecordId.getMcDbBlockTableRecord(),
          mat,
          newOrigin
        );
      } else if (ent instanceof McDbText) {
        if (ent.textString) {
          const pos = ent.position.clone().transformBy(mart);
          textInfoArr.push({
            type: "TEXT",
            string: ent.textString,
            position: { x: pos.x, y: pos.y },
            relativePos: {
              x: pos.x - newOrigin.x,
              y: pos.y - newOrigin.y,
            },
          });
        }
      } else if (ent instanceof McDbMText) {
        if (ent.contents) {
          const pos = ent.location.clone().transformBy(mart);
          textInfoArr.push({
            type: "MTEXT",
            string: ent.contents,
            position: { x: pos.x, y: pos.y },
            relativePos: {
              x: pos.x - newOrigin.x,
              y: pos.y - newOrigin.y,
            },
          });
        }
      }
    }
  });
}
// 遍历块内部实体并获取实体实际位置
function Mx_ForEachBlkEntity(
  block_id: McObjectId,
  newOrigin: McGePoint3d
): TextInfo[] {
  textInfoArr.length = 0;
  // 获取块实体
  const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
  // 获取块表记录对象
  let blkRec = blkRef.blockTableRecordId.getMcDbBlockTableRecord();
  // 遍历图块实体
  Mx_ModyfBlockRecordEntity(blkRec, blkRef.blockTransform, newOrigin);

  return textInfoArr;
}

// 截图jpg
async function Mx_ScreenToJpg(pt1: McGePoint3d, pt2: McGePoint3d) {
  const mxcad = MxCpp.getCurrentMxCAD();
  mxcad.setViewBackgroundColor(255, 255, 255);

  const tempDraw = mxcad.getTempDraw();
  tempDraw.readyMcDbEntitysWorldDraw();
  tempDraw.disableDepthTestMcDbEntitysDisplay(true);
  const ss = new MxCADSelectionSet();
  await ss.crossingSelect(pt1.x, pt1.y, pt2.x, pt2.y);
  ss.forEach((id) => {
    const ent = id.getMcDbEntity();
    const _clone = ent.clone() as McDbEntity;
    if (ent instanceof McDbBlockReference) {
      Mx_BlkColor(id);
    }
    _clone.trueColor = new McCmColor(255, 255, 255);
    tempDraw.worldDrawMcDbEntitys(_clone);
    tempDraw.setDrawOrder(10, 20);
  });
  mxcad.updateDisplay();

  let w = Math.abs(pt1.x - pt2.x);
  let h = Math.abs(pt1.y - pt2.y);

  if (w < 1 || h < 1) return;

  let jpg_width = 400;
  let jpg_height = (jpg_width * h) / w;

  mxcad.mxdraw.createCanvasImageData(
    (imageData: String) => {
      let newWindow: any = window.open();
      if (newWindow != null) {
        newWindow.document.write('<img src="' + imageData + '"/>');
        tempDraw.clearAll();
        mxcad.setViewBackgroundColor(0, 0, 0);
      }
    },
    {
      width: jpg_width, // 图片宽
      height: jpg_height, // 图片高
      range_pt1: pt1.toVector3(), // 截图范围角点1
      range_pt2: pt2.toVector3(), // 截图范围角点2
    }
  );
}

function Mx_ModyfBlockRecordEntityColor(blkRec: McDbBlockTableRecord | null) {
  if (!blkRec) return;
  blkRec.getAllEntityId().forEach((id) => {
    let ent = id.getMcDbEntity();
    if (ent) {
      ent.colorIndex = ColorIndexType.kByblock;
      if (ent instanceof McDbBlockReference) {
        let blkref = ent as McDbBlockReference;
        Mx_ModyfBlockRecordEntityColor(
          blkref.blockTableRecordId.getMcDbBlockTableRecord()
        );
      }
    }
  });
}

// 改块颜色
async function Mx_BlkColor(block_id: McObjectId) {
  // 块实体
  const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
  let blkRec = blkRef.blockTableRecordId.getMcDbBlockTableRecord();
  if (!blkRec) return;
  Mx_ModyfBlockRecordEntityColor(blkRec);
}
</script>

<template>
  <div style="margin: 5px">
    <button @click="getTextInfo">提取文本信息</button>
  </div>
  <div style="width: 100vw; height: 99vh; overflow: hidden">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<style scoped>
</style>
