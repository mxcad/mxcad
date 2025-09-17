<template>
  <div>
    <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { McObject } from 'mxcad';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
      const mxcad = new McObject()
      mxcad.create({
        "canvas": "#myCanvas",
        "fileUrl": "test2.mxweb"
      })
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
