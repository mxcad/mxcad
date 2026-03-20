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
</script>

<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      accept=".dwg,.dxf,.mxweb"
      @change="openDwgFile"
    />
  </div>
  <div style="width: 100vw; height: 95vh; overflow: hidden">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<style scoped>
</style>
