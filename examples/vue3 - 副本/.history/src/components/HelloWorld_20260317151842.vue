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

const openDwgFile = async (event: Event) => {
  // 类型断言：获取文件输入框DOM元素
  const target = event.target as HTMLInputElement;
  // 获取选中的第一个文件（文件选择框支持单选）
  const file = target.files?.[0];
  // 未选择文件则直接返回
  if (!file) return;

  // 1. 获取文件后缀名（统一转为小写，避免大小写问题）
  const fileName = file.name;
  const fileExt = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();

    // 仅对DWG/DXF文件计算Hash值
  if (fileExt === '.dwg' || fileExt === '.dxf') {
    // 计算MD5 Hash（也可改为计算SHA256）
    const md5Hash = await calculateFileHash(file, 'MD5');
    fileHash.value = md5Hash;
    console.log(`DWG/DXF文件MD5：${md5Hash}`);
  }


  // 清空文件选择框（避免重复选择同一文件时不触发change事件）
  target.value = '';
};
/**
 * 计算文件的Hash值（支持MD5/SHA256）
 * @param file 目标文件对象
 * @param algorithm 哈希算法：MD5/SHA-256（默认MD5）
 * @returns 小写的十六进制Hash字符串
 */
const calculateFileHash = async (file: File, algorithm: 'MD5' | 'SHA-256' = 'MD5'): Promise<string> => {
  try {
    // 1. 将File转为ArrayBuffer（Web Crypto API需要二进制数据）
    const arrayBuffer = await file.arrayBuffer();

    // 2. 使用Web Crypto API计算哈希
    const crypto = window.crypto || (window as any).msCrypto; // 兼容IE11
    const hashBuffer = await crypto.subtle.digest(algorithm, arrayBuffer);

    // 3. 将ArrayBuffer转为十六进制字符串
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
  } catch (error) {
    console.error(`计算${algorithm}哈希失败：`, error);
    throw new Error('文件Hash计算失败，请重试');
  }
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
