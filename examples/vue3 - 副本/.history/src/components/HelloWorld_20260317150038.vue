<script setup lang="ts">
import { onMounted } from "vue";
import { createMxCad } from "mxcad"
onMounted(() => {
  const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
  createMxCad({
    canvas: "#myCanvas",
    locateFile: (fileName) => {
      return new URL(`../../node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
    },
    fileUrl: new URL("../../public/test2.mxweb", import.meta.url).href,
    fontspath: new URL("../../node_modules/mxcad/dist/fonts", import.meta.url).href,
  })
})

const openDwgFile = ()=>{
  
}
</script>

<template>
   <div>
    <button @click="openDwgFile">打开dwg文件</button>
   </div>
  <div style="width: 100vw; height: 95vh; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
</template>

<style scoped>

</style>
