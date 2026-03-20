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

const openDwgFile = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  // 如果是dwg\dxf文件需要调用上传接口转成mxweb图纸
  // 如果是mxweb图纸，需要将file转成临时网络路径用 openwebfile API 打开
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
