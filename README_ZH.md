
# 前言

在使用mxcad的过程中如果有任何问题可以直接联系我们，联系方式: 710714273@qq.com

mxcad官网地址: <https://www.webcadsdk.com/>

![mxcad示例](./docs/assets/img/mxcad示例.gif)

# mxcad快速入门

mxcad 支持在线渲染`.mxweb格式`的文件（该文件格式是我们特有的前端CAD格式），CAD图纸文件（DWG、DXF）可通过我们提供的[mxdraw云图开发包](https://www.webcadsdk.com/)中的图纸转换程序转换为`.mxweb文件`。经转换后的`.mxweb文件`会交由 mxcad 在网页中浏览编辑，编辑后的mxweb文件同样可以经图纸转换程序转换回CAD图纸文件。

CAD图纸文件转换为`.mxweb格式`具体转换步骤可参考下面的[图纸转换步骤](#图纸转换步骤)。

mxcad的开发需要依赖mxdraw，两者需要配合使用，因此如果你不了解mxdraw库 请参考：<https://github.com/mxcad/mxdraw/>

## 通过Vite使用mxcad

在本节中，我们将介绍如何在本地创建一个简单的mxcad项目。创建的项目将使用基于 Vite 的构建设置。

首先确保你已经安装了[Node.js](https://nodejs.org/en)，然后进入到你需要创建项目的目录中：

1. 在命令行运行以下命令来初始化项目并安装 Vite 和 mxcad

```sh
npm init -y
npm install vite -D
npm install mxcad
```
* 如果使用`pnpm`安装 还需要主动安装 mxdraw

  ```sh
  pnpm install mxdraw
  ```

2. 在项目根目录下新建index.html文件，并绘制canvas画布。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vite use mxcad</title>
</head>
<body>
    <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
</body>
</html>
```

3. 在根目录下新建`src`目录，并在该目录下创建`assets`文件夹用于存放目标mxweb文件。(点击[下载一个mxweb文件](https://gitee.com/mxcadx/mxcad_docs/blob/master/examples/public/test2.mxweb))

4. 在`src`目录下新建`index.ts`文件（vite默认支持ts）。

通过调用 mxcad 中的`create()`方法加载目标图纸，该方法中加载文件的路径均为相对于js调用位置的http URL绝对路径即文件的**网络地址**，在vite中可用通过下面示例代码中的加载方式得到该文件正确的的**网络地址**。

```ts
import { McObject } from "mxcad"

// 将2d和2d-st 都放入静态资源中可以保证无论是否开启SharedArrayBuffer 都可以正常运行
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
// 创建mxcad示例对象
const mxcad = new McObject()
mxcad.create({
    // canvas元素的id
    canvas: "#myCanvas",
    // 获取加载wasm相关文件(wasm/js/worker.js)路径位置
    locateFile: (fileName)=>  new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href,
    // 需要初始化打开的文件url路径
    fileUrl: new URL("../src/assets/test.mxweb", import.meta.url).href,
    // 提供加载字体的目录路径
    fontspath:  new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
})

```

将该ts文件引入上述的html文件中。

mxcad 中的`create()`方法需要等canvas元素在页面加载完成后才能调用，因此需要将 script 标签放在 body 标签内部，让浏览器先完成HTML页面的解析，再下载并执行script标签中的代码。

```html
<script type="module" src="./src/index.ts"></script>
```

5. 在根目录下创建`vite.config.ts`文件。

mxcad默认使用了 SharedArrayBuffer ，它是 JavaScript 中的一种特殊类型，允许多个 Web Worker 线程共享同一块内存空间，因此使用mxcad需要在服务端设置相应对应的响应头。

```ts
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        headers: {
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
        }
    }
})
```

6. 完成以上步骤后，运行下面的命令启动项目

```sh
npx vite
```

参考示例源码: <https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/vite>

## 通过CDN使用mxcad

你可以借助 script 标签直接通过CDN来使用mxcad:

这里我们使用了 [unpkg](https://unpkg.com/)，但你也可以使用任何提供 npm 包服务的 CDN，你也可以下载此文件并自行提供服务

```html
<script scr="https://unpkg.com/mxdraw/dist/mxdraw.umd.js" crossorigin="anonymous"></script>
<script scr="https://unpkg.com/mxcad/dist/mxcad.umd.js" crossorigin="anonymous"></script>
```
### 使用全局构建版本

全局构建版本示例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/mxdraw" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/mxcad" crossorigin="anonymous"></script>
</head>

<body>
    <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas" style="height: 300px"></canvas></div>
    <script>
        const { McObject } = MxCAD
        const mxobj = new McObject()
        mxobj.create({
            canvas: "#myCanvas",//canvas的id
            locateFile: (fileName) => "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName,
            fontspath: "https://unpkg.com/mxcad/dist/fonts/",
            fileUrl: "./test2.mxweb"//目标图纸路径
        })
    </script>
</body>

</html>
```

参考示例源码：<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/h5>

### 使用 ES 模块构建版本

现代浏览器大多都已原生支持 ES 模块，因此我们可以像这样通过 CDN 以及原生 ES 模块使用 mxcad。由于 mxcad 依赖mxdraw库, 所以要[导入映射表 (Import Maps)](https://caniuse.com/import-maps)来告诉浏览器如何定位到导入的 mxdraw模块和 mxcad模块

你也可以在映射表中添加其他的依赖——但请务必确保你使用的是该库的 ES 模块版本。

```html
<div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas" style="height: 300px"></canvas></div>
<script type="importmap">
    {
        "imports": {
        "mxdraw": "https://unpkg.com/mxdraw/dist/mxdraw.esm.js",
        "mxcad": "https://unpkg.com/mxcad/dist/mxcad.es.js"
        }
    }
</script>
<script type="module">
    import { McObject } from "mxcad"

    const mxobj = new McObject()
    mxobj.create({
        canvas: "#myCanvas",
        locateFile: (fileName) => "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName,
        fontspath: "https://unpkg.com/mxcad/dist/fonts/",
        fileUrl: "/test2.mxweb"
    })
</script>
```


## 通过webpack使用mxcad

mxcad 也支持在其他打包工具中使用，下面将介绍基于 webpack 构建 mxcad 项目。

1. 项目初始化、安装 webpack 和 mxcad。
```sh
npm init -y
npm install webpack webpack-cli copy-webpack-plugin@5 html-webpack-plugin -D
npm install mxcad
```

2. 在根目录新建`index.html`文件，绘制画布。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>起步</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
     <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
  </body>
</html>
```

3. 在根目录新建`src`目录 并在`src`目录下新建`index.js`文件加载目标文件

```js
import {  McObject } from "mxcad"

const mxcad = new McObject()
mxcad.create({
    canvas: "#myCanvas",
    // 通过需要访问：http:xxx.com/test.mxweb 获取对应的文件
    // 请你自行提供该文件
    fileUrl: "test.mxweb"
})
```
在`index.html`文件下引入该js文件。将 script 标签放在 body 标签内部，让浏览器先完成HTML页面的解析，再下载并执行 script 标签中的代码。
```html
<script src="./src/index.js"></script>
```

4. 在根目录下创建`webpack.config.js`文件。

拷贝 mxcad 所需文件到静态资源中。

```js
const path = require('path');
// copy-webpack-plugin@5 兼容webpack4和5的版本请放心使用
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.development === "development" ? "development" : "production",
  entry: './src/index.js',
  devServer: {
    static: './dist',
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      // 拷贝mxcad wasm 相关的核心代码 mxcad默认请求的路径是 /* 所有 需要把文件放dist2d下
      {
        from: "node_modules/mxcad/dist/wasm/2d/*",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      },
      // 必须要字体文件来显示图纸中的文字，mxcad库默认请求URL路径为 /fonts/* 所有需要放在dist/fonts下
      {
        from: "node_modules/mxcad/dist/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        flatten: true,
        toType: "dir"
      },
    ])
  ],
  // mxcad 和 mxdraw库的js代码打包超过webpack默认限制的大小，需要设置hints: false关闭警告
  performance: {
    hints: false,
  }
};
```

5. 根据需求配置好`packge.json`文件后，执行`npx webpack serve`命令运行查看效果

## 其它知识点说明

### createMxCad 的参数配置说明

 1. canvas：canvas画布实例的id名

 2. locateFile：mxcad 的核心依赖mxcad库中`/mxcad/dist/wasm`目录下对应分类(`2d`|`2d-st`)中的 wasm 文件(该文件是c++编译生成的)，其中 2d 目录下为多线程程序、2d-st 目录下为单线程程序，该参数用来指定 wasm 程序的**网络路径**。
  
 3. fontspath：指定cad图纸中的字体文件加载路径。默认路径为`dist/fonts`，你可以在该目录中添加打开图纸需要的各种字体文件。
  
 4. fileUrl：指定打开mxweb图纸的**网络路径**。
 * mxcad 中创建mxcad对象的 `create()` 函数中的参数 fontspath 、 fileUrl 包括 locateFile 的值均为**网络路径**。

 5. onOpenFileComplete：监听打开文件成功的回调事件，在图纸打开完成后进行的操作可在该方法内执行。

 6. viewBackgroundColor：设置视区背景颜色，值为rgb。

 7. browse：是否设置为浏览模式，值为true或1时启用浏览模式，且CAD对象不能选中；值为2时启用浏览模式，CAD对象能选中,但不能夹点编辑；值为false时启用编辑模式。

 8. middlePan：设置移动视区的操作方式。设置为0,点击鼠标左键移动视区；设置为1,点击鼠标中键移动视区；设置为2,点击鼠标中键和鼠标左键均可移动视区。

 9. enableUndo：是否启用回退功能。设置为true则可以调用Mx_Undo命令回退操作；设置为false则禁用回退命令。默认设置为false。

 10. enableIntelliSelect：是否启用对象选择功能。设置为true则启用；设置为false则不启用。

 11. multipleSelect：是否启用多选。设置为true则启用；设置为false则不启用。

 更多 createMxCad 初始化参数设置可参考[MxCadConfig 配置说明](https://mxcad.github.io/mxcad/en/api/interfaces/2d.MxCadConfig.html)。

### 多线程、单线程模式说明

为了性能考虑, mxcad 默认支持多线程。其中，支持多线程模式需要开启 SharedArrayBuffer 权限，开启后可以使用 `/wasm/2d`下的多线程程序，否则使用`/wasm/2d-st/`下的单线程程序。

开启 SharedArrayBuffer 权限需要在服务器响应器中进行配置，比如node.js服务器程序开启 SharedArrayBuffer 权限设置如下：

```js
const http = require('http');
http.createServer((req, res)=> {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
})
```

如何在前端js中判断是否开启了 SharedArrayBuffer 的权限，然后自动使用正确的程序加载，代码如下：

```js
import { McObject } from "mxcad"
// 将2d和2d-st 都放入静态资源中可以保证无论是否开启SharedArrayBuffer 都可以正常运行
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
const mxobj = new McObject()
mxobj.create({
  // ...
   locateFile: (fileName)=> {
    new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
   },
})
```
* 若要使用 SharedArrayBuffer 权限，谷歌的浏览器要求使用HTTPS的协议访问或本地路径（http://localhost)。

# 图纸转换步骤

由于AutoCAD文件（DWG、DXF）格式的文件体积大，版本多，格式复杂导致直接加载在网页中效率慢，占用空间内存大且很容易加载失败，因此，我们设计并提供了一个特有的网页CAD文件格式：`.mxweb`，该文件格式很好的解决了上述的众多问题。mxweb文件与CAD图纸文件可以通过使用我们提供的云图开发包实现相互转换。

更多详细的转换步骤请参考[图纸转换](https://mxcad.github.io/mxcad/en/guide/convert.html)

## 下载云图开发包

我们需要通过下载[MxDraw云图开发包](https://www.webcadsdk.com/)

![下载云图开发包图片](https://mxcad.github.io/mxcad/assets/%E4%B8%8B%E8%BD%BD%E4%BA%91%E5%9B%BE%E5%BC%80%E5%8F%91%E5%8C%85%E5%9B%BE%E7%89%87.CHXUL2g0.jpg)

下载好 `MxDrawCloudServer1.0TryVersion.7z`的压缩包后, 解压，

进入解压后的目录下的`MxDrawCloudServer\Bin\MxCAD\Release`这个位置， 就是负责转换`.mxweb`格式相关的程序目录



## CAD图纸转mxweb格式

### 方式一

打开解压后`MxDraw云图开发包`目录所在的命令窗口，找到目标图纸所在路径后启动命令行运行命令：mxcadassembly 目标图纸路径。

示例代码如下：

```bash

cd C:\Users\MxDev\Downloads\MxDrawCloudServer1.0TryVersion\MxDrawCloudServer\Bin\MxCAD\Release

mxcadassembly D:\test2.dwg

```
等待命令行输出 `{"code":0 }` 表示图纸转换成功。成功转换为`.mxweb`格式的文件会自动保存在目标图纸的同一目录下。


### 方式二

打开解压后`MxDraw云图开发包`目录所在的命令窗口，找到目标图纸所在路径后启动命令行运行命令：mxcadassembly JSON字符串

示例代码如下：

```bash
mxcadassembly.exe {"srcpath":"D:\test2.dwg","outpath":"D:\","outname":"test", "compression":0}
```

| 参数 | 说明 |
| --- | --- |
| srcpath | 要转换的文件路径 |
| outpath | 输出文件路径 |
| outname | 输出文件名(mxweb转CAD图纸需要加上后缀) |
| compression | 0 表示不压缩, 不写这个属性就是压缩 |

## mxweb格式转CAD图纸

我们还可通过该程序将`.mxweb`格式的文件纸转换为`.dwg`格式的文件，执行如下命令：

```bash
mxcadassembly.exe {"srcpath":"D:\test.mxweb","outpath":"D:\","outname":"test.dwg"}
```
* 参数outname 必须加上CAD图纸的后缀名，一般为.dwg

## linux 版本

Linux版本的云图开发包操作需要先对图纸转换程序授权操作：

进入`Bin/Linux/MxCAD`目录下，我们首先应该给这些文件赋予权限和拷贝一些目录到指定位置:

```bash
sudo chmod -R 777 mxcadassembly

sudo chmod -R 777 ./mx/so/*

sudo  cp -r -f ./mx/locale /usr/local/share/locale
```
然后我们就可以参考windows 版本转换文件格式的方式进行图纸转换。如调用下面的命令将CAD图纸转换为mxweb格式：

```bash
./mxcadassembly "{'srcpath':'/home/mx/test.dwg','outpath':'/home/mx/Test','outname':'xxx'}"
```

其中 srcpath：目标cad文件所在的路径，outpath：指定转换后的图纸文件所在的路径，outname：指定输出mxweb文件的文件名。



   
