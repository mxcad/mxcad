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
  // 类型断言：获取文件输入框DOM元素
  const target = event.target as HTMLInputElement;
  // 获取选中的第一个文件（文件选择框支持单选）
  const file = target.files?.[0];
  // 未选择文件则直接返回
  if (!file) return;

  // 1. 获取文件后缀名（统一转为小写，避免大小写问题）
  const fileName = file.name;
  const fileExt = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();

  // 2. 根据文件格式分支处理
  switch (fileExt) {
    // 2.1 DWG/DXF格式：调用上传接口转为MXWeb格式
    case '.dwg':
    case '.dxf':
      // handleDwgDxfFile(file);
      break;

    // 2.2 MXWeb格式：转为临时网络路径，调用openwebfile API打开
    case '.mxweb':
      // handleMxwebFile(file);
      break;

    // 2.3 其他格式（理论上被accept限制，兜底处理）
    default:
      alert(`不支持的文件格式：${fileExt}，请选择.dwg/.dxf/.mxweb文件`);
      break;
  }

  // 清空文件选择框（避免重复选择同一文件时不触发change事件）
  target.value = '';
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
