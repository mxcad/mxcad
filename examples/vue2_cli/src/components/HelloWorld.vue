<template>
  <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
</template>

<script>
import { createMxCad } from "mxcad"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    createMxCad({
      canvas: "#myCanvas",
      fileUrl: "test2.mxweb",
    }).then((mxcad) => {
      console.log(mxcad)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
