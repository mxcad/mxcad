<script setup lang="ts">
import { onMounted } from "vue";
import { createMxCad, MxCpp } from "mxcad";
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

// mxcad只能打开和保存为mxweb图纸，如果需要打开dwg、dxf图纸需要调用转换程序
const openFile = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  const mxwebTempUrl = URL.createObjectURL(file);
  const mxcad = MxCpp.getCurrentMxCAD();
  mxcad.openWebFile(mxwebTempUrl);
};

const 
</script>

<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      accept=".mxweb"
      @change="openFile"
    />
  </div>
  <div style="width: 100vw; height: 95vh; overflow: hidden">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<style scoped>
</style>
