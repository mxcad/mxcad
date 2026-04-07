
// @ts-ignore
import { createMxCad } from "mxcad"
const canvas = document.createElement("canvas")
canvas.id = "myCanvas"
const canvasBox = document.createElement("div")
canvasBox.style.overflow = "hidden"
canvasBox.style.height = "80vh"
canvasBox.appendChild(canvas)
document.body.appendChild(canvasBox)
window.onload = async () => {
    createMxCad({
        canvas: "#myCanvas",
        fileUrl: "test2.mxweb",
      }).then((mxcad) => {
        console.log(mxcad)
      })
}
