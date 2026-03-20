<script setup lang="ts">
import { onMounted } from "vue";
import { createMxCad, MxCpp } from "mxcad";
import {
  MxFun,
  MrxDbgUiPrPoint,
  McEdGetPointWorldDrawObject,
  MrxDbgUiPrBaseReturn,
  MxThreeJS,
  MxDbRectBoxLeadComment,
} from "mxdraw";

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
    fileUrl: new URL("../../public/test2.mxweb", import.meta.url).href,
    fontspath: new URL("../../node_modules/mxcad/dist/fonts", import.meta.url)
      .href,
  });
});

// 打开dwg图纸
const openDwgFile = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  const fileName = file.name;
  const fileExt = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
  const mxcad = MxCpp.getCurrentMxCAD();
  if (fileExt === ".dwg" || fileExt === ".dxf") {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/upfile/mxcad", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(`请求失败: ${res.status}`);
      const mxwebFullUrl = `/demo/${fileName}.mxweb`;
      mxcad.openWebFile(mxwebFullUrl);
    } catch (err) {
      console.error(err);
      alert("上传或转换失败");
    }
  } else if (fileExt === ".mxweb") {
    const tempUrl = URL.createObjectURL(file);
    mxcad.openWebFile(tempUrl);
  } else {
    alert("不支持该文件格式");
  }
  target.value = "";
};

// 审图批注
function BR_CheckDraw() {
  const point = new MrxDbgUiPrPoint();
  const mxDraw = MxFun.getCurrentDraw();
  const worldDrawComment = new McEdGetPointWorldDrawObject();
  const mxCheckDraw = new MxDbRectBoxLeadComment();

  mxCheckDraw.radius = MxFun.screenCoordLong2Doc(5);
  mxCheckDraw.setLineWidth(3);
  mxCheckDraw.setLineWidthByPixels(true);
  point.setMessage("\n云线框起始点:");
  point.go((status) => {
    if (status != MrxDbgUiPrBaseReturn.kOk) {
      return;
    }
    mxCheckDraw.point1 = point.value();
    worldDrawComment.setDraw((currentPoint) => {
      mxCheckDraw.point2 = currentPoint;
      worldDrawComment.drawCustomEntity(mxCheckDraw);
    });

    point.setUserDraw(worldDrawComment);
    point.setMessage("\n云线框结束点:");
    point.go((status) => {
      if (status != MrxDbgUiPrBaseReturn.kOk) {
        return;
      }
      mxCheckDraw.point2 = point.value();
      worldDrawComment.setDraw((currentPoint) => {
        mxCheckDraw.point3 = currentPoint;
        worldDrawComment.drawCustomEntity(mxCheckDraw);
      });
      mxCheckDraw.text = "审图批注";
      mxCheckDraw.textWidth = MxFun.screenCoordLong2Doc(200);
      mxCheckDraw.textHeight = MxFun.screenCoordLong2Doc(50);

      mxCheckDraw.fixedSize = true;
      if (mxCheckDraw.fixedSize) {
        mxCheckDraw.textHeight = 20;
        mxCheckDraw.textWidth = 230;
      }
      point.setMessage("\n审图标注点:");
      point.go((status) => {
        if (status != MrxDbgUiPrBaseReturn.kOk) {
          return;
        }
        mxCheckDraw.point3 = point.value();
        mxDraw.addMxEntity(mxCheckDraw);
      });
    });
  });
}

// 保存图纸批注
const saveData = () => {
  localStorage.setItem("mx-data", MxFun.getCurrentDraw().saveMxEntityToJson());
};
// 恢复图纸批注
const loadData = () => {
  // 恢复批注
  MxFun.getCurrentDraw().loadMxEntityFromJson(localStorage.getItem("mx-data"));
};
</script>

<template>
  <!-- CAD 渲染区域 -->
  <div style="width: 100vw; height: 95vh; overflow: hidden;">
    <canvas id="myCanvas"></canvas>
  </div>

  <!-- 控制栏 -->
  <div style="margin-top: 10px; padding: 10px; background: #f5f5f5;">
    <!-- 隐藏的文件输入框 -->
    <input
      type="file"
      ref="fileInput"
      accept=".dwg,.dxf,.mxweb"
      @change="openDwgFile"
      style="display:none"
    />
    
    <!-- 功能按钮 -->
    <button @click="$refs.fileInput.click()" :disabled="!mxCadReady">打开图纸</button>
    <button @click="startCloudMark" :disabled="!mxCadReady">绘制云线批注</button>
    <button @click="saveMarkup" :disabled="!mxCadReady">保存批注</button>
    <button @click="loadMarkup" :disabled="!mxCadReady">加载批注</button>
  </div>
</template>

<style scoped>
</style>
