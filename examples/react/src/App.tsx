///////////////////////////////////////////////////////////////////////////////
//版权所有（C）2002-2022，成都梦想凯德科技有限公司。
//本软件代码及其文档和相关资料归成都梦想凯德科技有限公司,应用包含本软件的程序必须包括以下版权声明
//此应用程序应与成都梦想凯德科技有限公司达成协议，使用本软件、其文档或相关材料
//https://www.mxdraw.com/
///////////////////////////////////////////////////////////////////////////////

import {  McObject } from "mxcad"

function App() {

  const mxcad = new McObject()
  console.log(new URL(`../node_modules/mxcad/dist/wasm/2d`, import.meta.url).href)
  mxcad.create({
    canvas: "#myCanvas",
    locateFile: (fileName:any) => {
      return "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName
    },
    fileUrl: new URL("./assets/test2.mxweb", import.meta.url).href,
    fontspath: new URL("../node_modules/mxcad/dist/fonts", import.meta.url).href,
  })
  return (<div style={{height: 600, overflow: 'hidden'}}><canvas id="myCanvas" style={{height: 300}}></canvas></div>)
}

export default App
