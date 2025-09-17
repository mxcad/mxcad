///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////

import { createMxCad } from "mxcad"
const canvas = document.createElement("canvas")
canvas.id = "myCanvas"
const canvasBox = document.createElement("div")
canvasBox.style.overflow = "hidden"
canvasBox.style.height = "80vh"
canvasBox.appendChild(canvas)
document.body.appendChild(canvasBox)
window.onload = async () => {
    const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
    createMxCad({
         canvas: "#myCanvas",
         locateFile: (fileName)=> {
          return new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
         },
         fileUrl: new URL("../../public/test2.mxweb", import.meta.url).href,
         fontspath:  new URL("../node_modules/mxcad/dist/fonts", import.meta.url).href,
      })
}
