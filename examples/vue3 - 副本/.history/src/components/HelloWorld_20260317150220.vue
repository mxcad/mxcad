<script setup lang="ts">
import { onMounted } from "vue";
import { createMxCad } from "mxcad";
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

const openDwgFile = (event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file || !mxcadInstance.value) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const buffer = e.target?.result as ArrayBuffer;
    // 调用 openFileFromBuffer 加载二进制数据，内核会自动处理 DWG 到 MXWeb 的解析
    mxcadInstance.value?.openFileFromBuffer(buffer, file.name);
  };
  reader.readAsArrayBuffer(file);

  // 重置 input 以便重复选择同一文件
  target.value = "";
};
</script>

<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      accept=".dwg,.dxf,.mxweb"
      style="display: none"
      @change="openDwgFile"
    />
  </div>
  <div style="width: 100vw; height: 95vh; overflow: hidden">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<style scoped>
</style>
