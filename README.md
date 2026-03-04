# Preface

If you have any questions during the use of mxcad, feel free to contact us. Contact: 710714273@qq.com

Official mxcad website: <https://www.webcadsdk.com/>

![mxcad示例](./docs/assets/en/img/mxcad示例.gif)

# Quick Start with mxcad

mxcad supports online rendering of `.mxweb` format files (this file format is our unique front-end CAD format). CAD drawing files (DWG, DXF) can be converted into .mxweb files via the drawing conversion program provided in our [mxdraw CloudDraw development package](https://www.webcadsdk.com/). The converted `.mxweb` files will be handed over to mxcad for browsing and editing in web pages. The edited `.mxweb` files can similarly be converted back into CAD drawing files through the drawing conversion program.

For specific steps on converting CAD drawing files to `.mxweb` format, please refer to the [drawing conversion steps](#drawing-conversion-steps) below.

The development of mxcad requires dependency on mxdraw, and the two need to work together. Therefore, if you are unfamiliar with the mxdraw library, please refer to：<https://github.com/mxcad/mxdraw/>

## Using mxcad with Vite

In this section, we will introduce how to create a simple mxcad project locally. The created project will use a build setup based on Vite.

First, ensure that you have installed [Node.js](https://nodejs.org/en), then navigate to the directory where you need to create the project:

1. Run the following commands in the command line to initialize the project and install Vite and mxcad

```sh
npm init -y
npm install vite -D
npm install mxcad
```
* If using `pnpm` for installation, you also need to manually install mxdraw

  ```sh
  pnpm install mxdraw
  ```

2. Create a new index.html file in the project root directory and draw a canvas.

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

3. Create a new `src` directory in the root directory, and create an `assets` folder within this directory to store the target `mxweb` file. ([Click to download an mxweb file](https://gitee.com/mxcadx/mxcad_docs/blob/master/examples/public/test2.mxweb)) 

4. Create a new `index.ts` file in the `src` directory (Vite supports ts by default).。

By calling the `create()` method in mxcad, load the target drawing. The file paths loaded in this method are all absolute HTTP URL paths relative to the position of the JavaScript call, i.e., the **web address** of the file. In Vite, you can obtain the correct **web address** of the file using the loading method shown in the example code below.

```ts
import { McObject } from "mxcad"

// Place both 2d and 2d-st into static resources to ensure normal operation regardless of whether SharedArrayBuffer is enabled
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
// Create an mxcad instance object
const mxcad = new McObject()
mxcad.create({
    // ID of the canvas element
    canvas: "#myCanvas",
    // Get the path location of the wasm-related files (wasm/js/worker.js)
    locateFile: (fileName)=>  new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href,
    // URL path of the file to be initialized and opened
    fileUrl: new URL("../src/assets/test.mxweb", import.meta.url).href,
    // Provide the directory path for loading fonts
    fontspath:  new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
})

```

Import this ts file into the above html file.

The `create()` method in mxcad needs to be called after the canvas element has finished loading on the page, so the script tag needs to be placed inside the body tag, allowing the browser to parse the HTML page first before downloading and executing the code in the script tag.

```html
<script type="module" src="./src/index.ts"></script>
```

5. Create a `vite.config.ts` file in the root directory.

mxcad uses SharedArrayBuffer by default, which is a special type in JavaScript that allows multiple Web Worker threads to share the same memory space. Therefore, using mxcad requires setting the corresponding response headers on the server side.

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

6. After completing the above steps, run the following command to start the project

```sh
npx vite
```

Reference example source code: <https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/vite>

## Using mxcad via CDN

You can use mxcad directly through a script tag with a CDN:

Here we use [unpkg](https://unpkg.com/), but you can use any CDN that provides npm package services, or you can download this file and serve it yourself

```html
<script scr="https://unpkg.com/mxdraw/dist/mxdraw.umd.js" crossorigin="anonymous"></script>
<script scr="https://unpkg.com/mxcad/dist/mxcad.umd.js" crossorigin="anonymous"></script>
```
### Using the Global Build Version

Example of the global build version:

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
            canvas: "#myCanvas",//canvas's id
            locateFile: (fileName) => "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName,
            fontspath: "https://unpkg.com/mxcad/dist/fonts/",
            fileUrl: "./test2.mxweb"//path to the target drawing
        })
    </script>
</body>

</html>
```

Reference sample source code：<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/h5>

### Build the version using the ES module

Most modern browsers already natively support the ES module, so we can use mxcad like this through the CDN and the native ES module. Because they depend on mxdraw mxcad library, so [Import mapping table (Import Maps)](https://caniuse.com/import-maps) to tell the browser how to locate the mxdraw module and mxcad module to Import.

You can also add other dependencies to the mapping table - but make sure you are using the ES module version of the library.

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

## Use mxcad with webpack

mxcad is also supported in other packaging tools, and building mxcad projects based on webpack is described below.

1. Project initialization and installation of webpack and mxcad.
```sh
npm init -y
npm install webpack webpack-cli copy-webpack-plugin@5 html-webpack-plugin -D
npm install mxcad
```

2. Create a new `index.html` file in the root directory and draw the canvas.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>start</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
     <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
  </body>
</html>
```

3. Create a `src` directory in the root directory and a `index.js` file in the ` src` directory to load the target file

```js
import {  McObject } from "mxcad"

const mxcad = new McObject()
mxcad.create({
    canvas: "#myCanvas",
    // Access http:xxx.com/test.mxweb to obtain the corresponding file
    // Please provide the document yourself
    fileUrl: "test.mxweb"
})
```
Introduce the js file under the `index.html` file. Put the script tag inside the body tag and let the browser finish parsing the HTML page before downloading and executing the code in the script tag.
```html
<script src="./src/index.js"></script>
```

4. Create the `webpack.config.js` file in the root directory.

Copy the mxcad required files to a static resource.

```js
const path = require('path');
//  Please feel free to use copy-webpack-plugin@5 compatible webpack4 and 5 compatible versions
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
      // Copy mxcad WASM-related core code The default mxcad request path is /* All files need to be placed under dist2d
      {
        from: "node_modules/mxcad/dist/wasm/2d/*",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      },
      // The font file must be required to display the text in the drawing. The mxcad library default request URL path is /fonts/* All need to be placed under dist/fonts
      {
        from: "node_modules/mxcad/dist/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        flatten: true,
        toType: "dir"
      },
    ])
  ],
  // mxcad and mxdraw libraries have js code packages that exceed the size of webpack's default limit and need to set hints: false to close the warning
  performance: {
    hints: false,
  }
};
```

5. After configuring the `packge.json` file as required, run the 'npx webpack serve' command to see the effect

Reference sample source code:

<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/webpack-v4>

<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/webpack-v5>

## Other knowledge points

### Parameter description of the mxcad.create() function

 1. canvas：canvas id of the canvas instance

 2. locateFile：The core of mxcad relies on the wasm file in the corresponding category (` 2d `|` 2d-st `) under the directory `/mxcad/dist/wasm` in mxcad library (the file is compiled and generated by c++), wherein the 2d directory is multi-threaded programs, and the 2D-ST directory is single-threaded programs. This parameter specifies the network path of the wasm program.
  
 3. fontspath：Specifies the font file load path in a cad drawing. The default path is `dist/fonts`, where you can add all the font files you need to open your drawings.

 4. fileUrl：Specifies the network path to open the mxweb drawing.
     * The parameters fontspath, fileUrl and locateFile in the `create()` function that creates mxcad objects in mxcad are network paths.

 5. onOpenFileComplete: Listen for the callback event when opening a file is successful. Operations to be performed after the drawing is opened can be executed within this method.

 6. viewBackgroundColor: Set the background color of the view area, with the value in RGB format. 

 7. browse: Whether to set as browse mode. When the value is true or 1, browse mode is enabled and CAD objects cannot be selected; when the value is 2, browse mode is enabled and CAD objects can be selected but cannot be edited by grips; when the value is false, edit mode is enabled. 

 8. middlePan: Set the operation mode for moving the view. Set to 0 to move the view by clicking the left mouse button; set to 1 to move the view by clicking the middle mouse button; set to 2 to move the view by clicking either the middle or left mouse button. 

 9. enableUndo: Whether to enable the undo function. If set to true, the Mx_Undo command can be called to undo operations; if set to false, the undo command is disabled. The default setting is false. 

 10. enableIntelliSelect: Whether to enable the object selection function. Set to true to enable; set to false to disable. 

 11. multipleSelect: Whether to enable multiple selection. Set to true to enable; set to false to disable. 

 For more initialization parameter settings of createMxCad, please refer to the [MxCadConfig Configuration Description](../../api/interfaces/2d.MxCadConfig.md)

### Description of multi-thread and single-thread mode

mxcad supports multithreading by default for performance reasons. Among them, support for multithreading mode needs to open SharedArrayBuffer permissions, open can use `/wasm/2d` under the multithreaded program, otherwise use `/wasm/ 2d-ST/` under the single-threaded program.

The SharedArrayBuffer permission needs to be configured in the server responder, for example, node.js server program to enable SharedArrayBuffer permission set as follows:

```js
const http = require('http');
http.createServer((req, res)=> {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
})
```

How to determine whether SharedArrayBuffer permissions are enabled in front-end js, and then automatically use the correct program loading, the code is as follows:

```js
import { McObject } from "mxcad"
// Putting both 2d and 2D-ST into a static resource ensures that it works regardless of whether SharedArrayBuffer is turned on or not
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
const mxobj = new McObject()
mxobj.create({
  // ...
   locateFile: (fileName)=> {
    new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
   },
})
```
* To use SharedArrayBuffer permissions, Google's browser requires access using HTTPS or the local path (http://localhost).

# Drawing Conversion Steps

Due to the large size, multiple versions, and complex format of AutoCAD files (DWG, DXF), directly loading them into web pages is inefficient, occupies large memory space, and is prone to loading failures. Therefore, we have designed and provided a unique web CAD file format: `.mxweb`, which effectively solves the aforementioned numerous issues. mxweb files and CAD drawing files can be converted back and forth using the CloudDraw development package we provide.

For more detailed conversion steps, please refer to [Drawing conversion](https://mxcad.github.io/mxcad/en/guide/convert.html)

## Download the CloudDraw Development Package

We need to download the [MxDraw CloudDraw development package](https://www.webcadsdk.com/)

![下载云图开发包图片](https://mxcad.github.io/mxcad/assets/%E4%B8%8B%E8%BD%BD%E4%BA%91%E5%9B%BE%E5%BC%80%E5%8F%91%E5%8C%85%E5%9B%BE%E7%89%87.CHXUL2g0.jpg)

After downloading the `MxDrawCloudServer1.0TryVersion.7z` compressed package, decompress it,
Go to the directory `MxDrawCloudServer\Bin\MxCAD\Release` under the decompressed MxDrawCloudServer directory, which is the program directory responsible for converting `.mxweb` format.

## Convert CAD Drawings to mxweb Format

### Method One

Open the command window in the directory where the decompressed `MxDraw CloudDraw development package` is located, find the path of the target drawing, then run the command line: mxcadassembly target drawing path.

Example code as follows:
```bash
cd C:\Users\MxDev\Downloads\MxDrawCloudServer1.0TryVersion\MxDrawCloudServer\Bin\MxCAD\Release

mxcadassembly D:\test2.dwg
```

Wait for the command line to output `{"code":0 }` indicating the drawing conversion is successful. The successfully converted `.mxweb` format file will be automatically saved in the same directory as the target drawing.


### Method Two

Open the command window in the directory where the decompressed `MxDraw CloudDraw development package` is located, find the path of the target drawing, then run the command line: mxcadassembly JSON string.

Example code as follows:
```bash
mxcadassembly.exe {"srcpath":"D:\test2.dwg","outpath":"D:\","outname":"test", "compression":0}
```

| Parameter | Description |
| --- | --- |
| srcpath | Path of the file to be converted |
| outpath | outpath|Output file path |
| outname | outname|Output file name (suffix needs to be added when converting mxweb to CAD drawings) |
| compression | 0 means no compression, if this attribute is not written, it means compression |

## Convert mxweb Format to CAD Drawings

We can also use this program to convert `.mxweb` format files back to `.dwg` format files by executing the following command:
```bash
mxcadassembly.exe {"srcpath":"D:\test.mxweb","outpath":"D:\","outname":"test.dwg"}
```
* The parameter outname must include the suffix of the CAD drawing, generally .dwg.

## Linux Version

For the Linux version of the CloudDraw development package, authorization operation is required before operation:
Enter the `Bin/Linux/MxCAD` directory, we should first give these files permission and copy some directories to the specified location:
```bash
sudo chmod -R 777 mxcadassembly

sudo chmod -R 777 ./mx/so/*

sudo  cp -r -f ./mx/locale /usr/local/share/locale
```

Then we can refer to the Windows version file format conversion method for drawing conversion. For example, call the following command to convert CAD drawings to mxweb format:
```bash
./mxcadassembly "{'srcpath':'/home/mx/test.dwg','outpath':'/home/mx/Test','outname':'xxx'}"
```
where srcpath: the path where the target CAD file is located, outpath: the specified path where the converted drawing file is located, outname: specifies the filename of the output mxweb file.
||||||| .r10481

# Preface

If you have any questions during the use of mxcad, feel free to contact us. Contact: 710714273@qq.com

Official mxcad website: <https://www.webcadsdk.com/>

# Quick Start with mxcad

mxcad supports online rendering of `.mxweb` format files (this file format is our unique front-end CAD format). CAD drawing files (DWG, DXF) can be converted into .mxweb files via the drawing conversion program provided in our [mxdraw CloudDraw development package](https://www.webcadsdk.com/). The converted `.mxweb` files will be handed over to mxcad for browsing and editing in web pages. The edited `.mxweb` files can similarly be converted back into CAD drawing files through the drawing conversion program.

For specific steps on converting CAD drawing files to `.mxweb` format, please refer to the [drawing conversion steps](#drawing-conversion-steps) below.

The development of mxcad requires dependency on mxdraw, and the two need to work together. Therefore, if you are unfamiliar with the mxdraw library, please refer to：<https://github.com/mxcad/mxdraw/>

## Using mxcad with Vite

In this section, we will introduce how to create a simple mxcad project locally. The created project will use a build setup based on Vite.

First, ensure that you have installed [Node.js](https://nodejs.org/en), then navigate to the directory where you need to create the project:

1. Run the following commands in the command line to initialize the project and install Vite and mxcad

```sh
npm init -y
npm install vite -D
npm install mxcad
```
* If using `pnpm` for installation, you also need to manually install mxdraw

  ```sh
  pnpm install mxdraw
  ```

2. Create a new index.html file in the project root directory and draw a canvas.

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

3. Create a new `src` directory in the root directory, and create an `assets` folder within this directory to store the target `mxweb` file. ([Click to download an mxweb file](https://gitee.com/mxcadx/mxcad_docs/blob/master/examples/public/test2.mxweb)) 

4. Create a new `index.ts` file in the `src` directory (Vite supports ts by default).。

By calling the `create()` method in mxcad, load the target drawing. The file paths loaded in this method are all absolute HTTP URL paths relative to the position of the JavaScript call, i.e., the **web address** of the file. In Vite, you can obtain the correct **web address** of the file using the loading method shown in the example code below.

```ts
import { McObject } from "mxcad"

// Place both 2d and 2d-st into static resources to ensure normal operation regardless of whether SharedArrayBuffer is enabled
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
// Create an mxcad instance object
const mxcad = new McObject()
mxcad.create({
    // ID of the canvas element
    canvas: "#myCanvas",
    // Get the path location of the wasm-related files (wasm/js/worker.js)
    locateFile: (fileName)=>  new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href,
    // URL path of the file to be initialized and opened
    fileUrl: new URL("../src/assets/test.mxweb", import.meta.url).href,
    // Provide the directory path for loading fonts
    fontspath:  new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
})

```

Import this ts file into the above html file.

The `create()` method in mxcad needs to be called after the canvas element has finished loading on the page, so the script tag needs to be placed inside the body tag, allowing the browser to parse the HTML page first before downloading and executing the code in the script tag.

```html
<script type="module" src="./src/index.ts"></script>
```

5. Create a `vite.config.ts` file in the root directory.

mxcad uses SharedArrayBuffer by default, which is a special type in JavaScript that allows multiple Web Worker threads to share the same memory space. Therefore, using mxcad requires setting the corresponding response headers on the server side.

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

6. After completing the above steps, run the following command to start the project

```sh
npx vite
```

Reference example source code: <https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/vite>

## Using mxcad via CDN

You can use mxcad directly through a script tag with a CDN:

Here we use [unpkg](https://unpkg.com/), but you can use any CDN that provides npm package services, or you can download this file and serve it yourself

```html
<script scr="https://unpkg.com/mxdraw/dist/mxdraw.umd.js" crossorigin="anonymous"></script>
<script scr="https://unpkg.com/mxcad/dist/mxcad.umd.js" crossorigin="anonymous"></script>
```
### Using the Global Build Version

Example of the global build version:

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
            canvas: "#myCanvas",//canvas's id
            locateFile: (fileName) => "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName,
            fontspath: "https://unpkg.com/mxcad/dist/fonts/",
            fileUrl: "./test2.mxweb"//path to the target drawing
        })
    </script>
</body>

</html>
```

Reference sample source code：<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/h5>

### Build the version using the ES module

Most modern browsers already natively support the ES module, so we can use mxcad like this through the CDN and the native ES module. Because they depend on mxdraw mxcad library, so [Import mapping table (Import Maps)](https://caniuse.com/import-maps) to tell the browser how to locate the mxdraw module and mxcad module to Import.

You can also add other dependencies to the mapping table - but make sure you are using the ES module version of the library.

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

## Use mxcad with webpack

mxcad is also supported in other packaging tools, and building mxcad projects based on webpack is described below.

1. Project initialization and installation of webpack and mxcad.
```sh
npm init -y
npm install webpack webpack-cli copy-webpack-plugin@5 html-webpack-plugin -D
npm install mxcad
```

2. Create a new `index.html` file in the root directory and draw the canvas.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>start</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
     <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
  </body>
</html>
```

3. Create a `src` directory in the root directory and a `index.js` file in the ` src` directory to load the target file

```js
import {  McObject } from "mxcad"

const mxcad = new McObject()
mxcad.create({
    canvas: "#myCanvas",
    // Access http:xxx.com/test.mxweb to obtain the corresponding file
    // Please provide the document yourself
    fileUrl: "test.mxweb"
})
```
Introduce the js file under the `index.html` file. Put the script tag inside the body tag and let the browser finish parsing the HTML page before downloading and executing the code in the script tag.
```html
<script src="./src/index.js"></script>
```

4. Create the `webpack.config.js` file in the root directory.

Copy the mxcad required files to a static resource.

```js
const path = require('path');
//  Please feel free to use copy-webpack-plugin@5 compatible webpack4 and 5 compatible versions
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
      // Copy mxcad WASM-related core code The default mxcad request path is /* All files need to be placed under dist2d
      {
        from: "node_modules/mxcad/dist/wasm/2d/*",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      },
      // The font file must be required to display the text in the drawing. The mxcad library default request URL path is /fonts/* All need to be placed under dist/fonts
      {
        from: "node_modules/mxcad/dist/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        flatten: true,
        toType: "dir"
      },
    ])
  ],
  // mxcad and mxdraw libraries have js code packages that exceed the size of webpack's default limit and need to set hints: false to close the warning
  performance: {
    hints: false,
  }
};
```

5. After configuring the `packge.json` file as required, run the 'npx webpack serve' command to see the effect

Reference sample source code:

<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/webpack-v4>

<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/webpack-v5>

## Other knowledge points

### Parameter description of the mxcad.create() function

 1. canvas：canvas id of the canvas instance

 2. locateFile：The core of mxcad relies on the wasm file in the corresponding category (` 2d `|` 2d-st `) under the directory `/mxcad/dist/wasm` in mxcad library (the file is compiled and generated by c++), wherein the 2d directory is multi-threaded programs, and the 2D-ST directory is single-threaded programs. This parameter specifies the network path of the wasm program.
  
 3. fontspath：Specifies the font file load path in a cad drawing. The default path is `dist/fonts`, where you can add all the font files you need to open your drawings.

 4. fileUrl：Specifies the network path to open the mxweb drawing.
     * The parameters fontspath, fileUrl and locateFile in the `create()` function that creates mxcad objects in mxcad are network paths.

 5. onOpenFileComplete: Listen for the callback event when opening a file is successful. Operations to be performed after the drawing is opened can be executed within this method.

 6. viewBackgroundColor: Set the background color of the view area, with the value in RGB format. 

 7. browse: Whether to set as browse mode. When the value is true or 1, browse mode is enabled and CAD objects cannot be selected; when the value is 2, browse mode is enabled and CAD objects can be selected but cannot be edited by grips; when the value is false, edit mode is enabled. 

 8. middlePan: Set the operation mode for moving the view. Set to 0 to move the view by clicking the left mouse button; set to 1 to move the view by clicking the middle mouse button; set to 2 to move the view by clicking either the middle or left mouse button. 

 9. enableUndo: Whether to enable the undo function. If set to true, the Mx_Undo command can be called to undo operations; if set to false, the undo command is disabled. The default setting is false. 

 10. enableIntelliSelect: Whether to enable the object selection function. Set to true to enable; set to false to disable. 

 11. multipleSelect: Whether to enable multiple selection. Set to true to enable; set to false to disable. 

 For more initialization parameter settings of createMxCad, please refer to the [MxCadConfig Configuration Description](../../api/interfaces/2d.MxCadConfig.md)

### Description of multi-thread and single-thread mode

mxcad supports multithreading by default for performance reasons. Among them, support for multithreading mode needs to open SharedArrayBuffer permissions, open can use `/wasm/2d` under the multithreaded program, otherwise use `/wasm/ 2d-ST/` under the single-threaded program.

The SharedArrayBuffer permission needs to be configured in the server responder, for example, node.js server program to enable SharedArrayBuffer permission set as follows:

```js
const http = require('http');
http.createServer((req, res)=> {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
})
```

How to determine whether SharedArrayBuffer permissions are enabled in front-end js, and then automatically use the correct program loading, the code is as follows:

```js
import { McObject } from "mxcad"
// Putting both 2d and 2D-ST into a static resource ensures that it works regardless of whether SharedArrayBuffer is turned on or not
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
const mxobj = new McObject()
mxobj.create({
  // ...
   locateFile: (fileName)=> {
    new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
   },
})
```
* To use SharedArrayBuffer permissions, Google's browser requires access using HTTPS or the local path (http://localhost).

# Drawing Conversion Steps

Due to the large size, multiple versions, and complex format of AutoCAD files (DWG, DXF), directly loading them into web pages is inefficient, occupies large memory space, and is prone to loading failures. Therefore, we have designed and provided a unique web CAD file format: `.mxweb`, which effectively solves the aforementioned numerous issues. mxweb files and CAD drawing files can be converted back and forth using the CloudDraw development package we provide.

For more detailed conversion steps, please refer to [Drawing conversion](https://mxcad.github.io/mxcad/en/guide/convert.html)

## Download the CloudDraw Development Package

We need to download the [MxDraw CloudDraw development package](https://www.webcadsdk.com/)

![下载云图开发包图片](https://mxcad.github.io/mxcad/assets/%E4%B8%8B%E8%BD%BD%E4%BA%91%E5%9B%BE%E5%BC%80%E5%8F%91%E5%8C%85%E5%9B%BE%E7%89%87.CHXUL2g0.jpg)

After downloading the `MxDrawCloudServer1.0TryVersion.7z` compressed package, decompress it,
Go to the directory `MxDrawCloudServer\Bin\MxCAD\Release` under the decompressed MxDrawCloudServer directory, which is the program directory responsible for converting `.mxweb` format.

![转换图纸程序的位置](data:image/png;base64,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)


## Convert CAD Drawings to mxweb Format

### Method One

Open the command window in the directory where the decompressed `MxDraw CloudDraw development package` is located, find the path of the target drawing, then run the command line: mxcadassembly target drawing path.

Example code as follows:
```bash
cd C:\Users\MxDev\Downloads\MxDrawCloudServer1.0TryVersion\MxDrawCloudServer\Bin\MxCAD\Release

mxcadassembly D:\test2.dwg
```

Wait for the command line to output `{"code":0 }` indicating the drawing conversion is successful. The successfully converted `.mxweb` format file will be automatically saved in the same directory as the target drawing.

![转换后的图纸文件](data:image/png;base64,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)

### Method Two

Open the command window in the directory where the decompressed `MxDraw CloudDraw development package` is located, find the path of the target drawing, then run the command line: mxcadassembly JSON string.

Example code as follows:
```bash
mxcadassembly.exe {"srcpath":"D:\test2.dwg","outpath":"D:\","outname":"test", "compression":0}
```

| Parameter | Description |
| --- | --- |
| srcpath | Path of the file to be converted |
| outpath | outpath|Output file path |
| outname | outname|Output file name (suffix needs to be added when converting mxweb to CAD drawings) |
| compression | 0 means no compression, if this attribute is not written, it means compression |

## Convert mxweb Format to CAD Drawings

We can also use this program to convert `.mxweb` format files back to `.dwg` format files by executing the following command:
```bash
mxcadassembly.exe {"srcpath":"D:\test.mxweb","outpath":"D:\","outname":"test.dwg"}
```
* The parameter outname must include the suffix of the CAD drawing, generally .dwg.

## Linux Version

For the Linux version of the CloudDraw development package, authorization operation is required before operation:
Enter the `Bin/Linux/MxCAD` directory, we should first give these files permission and copy some directories to the specified location:
```bash
sudo chmod -R 777 mxcadassembly

sudo chmod -R 777 ./mx/so/*

sudo  cp -r -f ./mx/locale /usr/local/share/locale
```

Then we can refer to the Windows version file format conversion method for drawing conversion. For example, call the following command to convert CAD drawings to mxweb format:
```bash
./mxcadassembly "{'srcpath':'/home/mx/test.dwg','outpath':'/home/mx/Test','outname':'xxx'}"
```
where srcpath: the path where the target CAD file is located, outpath: the specified path where the converted drawing file is located, outname: specifies the filename of the output mxweb file.=======

# Preface

If you have any questions during the use of mxcad, feel free to contact us. Contact: 710714273@qq.com

Official mxcad website: <https://www.webcadsdk.com/>

# Quick Start with mxcad

mxcad supports online rendering of `.mxweb` format files (this file format is our unique front-end CAD format). CAD drawing files (DWG, DXF) can be converted into .mxweb files via the drawing conversion program provided in our [mxdraw CloudDraw development package](https://www.webcadsdk.com/). The converted `.mxweb` files will be handed over to mxcad for browsing and editing in web pages. The edited `.mxweb` files can similarly be converted back into CAD drawing files through the drawing conversion program.

For specific steps on converting CAD drawing files to `.mxweb` format, please refer to the [drawing conversion steps](#drawing-conversion-steps) below.

The development of mxcad requires dependency on mxdraw, and the two need to work together. Therefore, if you are unfamiliar with the mxdraw library, please refer to：<https://github.com/mxcad/mxdraw/>

## Using mxcad with Vite

In this section, we will introduce how to create a simple mxcad project locally. The created project will use a build setup based on Vite.

First, ensure that you have installed [Node.js](https://nodejs.org/en), then navigate to the directory where you need to create the project:

1. Run the following commands in the command line to initialize the project and install Vite and mxcad

```sh
npm init -y
npm install vite -D
npm install mxcad
```
* If using `pnpm` for installation, you also need to manually install mxdraw

  ```sh
  pnpm install mxdraw
  ```

2. Create a new index.html file in the project root directory and draw a canvas.

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

3. Create a new `src` directory in the root directory, and create an `assets` folder within this directory to store the target `mxweb` file. ([Click to download an mxweb file](https://gitee.com/mxcadx/mxcad_docs/blob/master/examples/public/test2.mxweb)) 

4. Create a new `index.ts` file in the `src` directory (Vite supports ts by default).。

By calling the `create()` method in mxcad, load the target drawing. The file paths loaded in this method are all absolute HTTP URL paths relative to the position of the JavaScript call, i.e., the **web address** of the file. In Vite, you can obtain the correct **web address** of the file using the loading method shown in the example code below.

```ts
import { McObject } from "mxcad"

// Place both 2d and 2d-st into static resources to ensure normal operation regardless of whether SharedArrayBuffer is enabled
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
// Create an mxcad instance object
const mxcad = new McObject()
mxcad.create({
    // ID of the canvas element
    canvas: "#myCanvas",
    // Get the path location of the wasm-related files (wasm/js/worker.js)
    locateFile: (fileName)=>  new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href,
    // URL path of the file to be initialized and opened
    fileUrl: new URL("../src/assets/test.mxweb", import.meta.url).href,
    // Provide the directory path for loading fonts
    fontspath:  new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
})

```

Import this ts file into the above html file.

The `create()` method in mxcad needs to be called after the canvas element has finished loading on the page, so the script tag needs to be placed inside the body tag, allowing the browser to parse the HTML page first before downloading and executing the code in the script tag.

```html
<script type="module" src="./src/index.ts"></script>
```

5. Create a `vite.config.ts` file in the root directory.

mxcad uses SharedArrayBuffer by default, which is a special type in JavaScript that allows multiple Web Worker threads to share the same memory space. Therefore, using mxcad requires setting the corresponding response headers on the server side.

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

6. After completing the above steps, run the following command to start the project

```sh
npx vite
```

Reference example source code: <https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/vite>

## Using mxcad via CDN

You can use mxcad directly through a script tag with a CDN:

Here we use [unpkg](https://unpkg.com/), but you can use any CDN that provides npm package services, or you can download this file and serve it yourself

```html
<script scr="https://unpkg.com/mxdraw/dist/mxdraw.umd.js" crossorigin="anonymous"></script>
<script scr="https://unpkg.com/mxcad/dist/mxcad.umd.js" crossorigin="anonymous"></script>
```
### Using the Global Build Version

Example of the global build version:

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
            canvas: "#myCanvas",//canvas's id
            locateFile: (fileName) => "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName,
            fontspath: "https://unpkg.com/mxcad/dist/fonts/",
            fileUrl: "./test2.mxweb"//path to the target drawing
        })
    </script>
</body>

</html>
```

Reference sample source code：<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/h5>

### Build the version using the ES module

Most modern browsers already natively support the ES module, so we can use mxcad like this through the CDN and the native ES module. Because they depend on mxdraw mxcad library, so [Import mapping table (Import Maps)](https://caniuse.com/import-maps) to tell the browser how to locate the mxdraw module and mxcad module to Import.

You can also add other dependencies to the mapping table - but make sure you are using the ES module version of the library.

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

## Use mxcad with webpack

mxcad is also supported in other packaging tools, and building mxcad projects based on webpack is described below.

1. Project initialization and installation of webpack and mxcad.
```sh
npm init -y
npm install webpack webpack-cli copy-webpack-plugin@5 html-webpack-plugin -D
npm install mxcad
```

2. Create a new `index.html` file in the root directory and draw the canvas.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>start</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
     <div style="height: 600px; overflow: hidden;"> <canvas id="myCanvas"></canvas></div>
  </body>
</html>
```

3. Create a `src` directory in the root directory and a `index.js` file in the ` src` directory to load the target file

```js
import {  McObject } from "mxcad"

const mxcad = new McObject()
mxcad.create({
    canvas: "#myCanvas",
    // Access http:xxx.com/test.mxweb to obtain the corresponding file
    // Please provide the document yourself
    fileUrl: "test.mxweb"
})
```
Introduce the js file under the `index.html` file. Put the script tag inside the body tag and let the browser finish parsing the HTML page before downloading and executing the code in the script tag.
```html
<script src="./src/index.js"></script>
```

4. Create the `webpack.config.js` file in the root directory.

Copy the mxcad required files to a static resource.

```js
const path = require('path');
//  Please feel free to use copy-webpack-plugin@5 compatible webpack4 and 5 compatible versions
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
      // Copy mxcad WASM-related core code The default mxcad request path is /* All files need to be placed under dist2d
      {
        from: "node_modules/mxcad/dist/wasm/2d/*",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      },
      // The font file must be required to display the text in the drawing. The mxcad library default request URL path is /fonts/* All need to be placed under dist/fonts
      {
        from: "node_modules/mxcad/dist/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        flatten: true,
        toType: "dir"
      },
    ])
  ],
  // mxcad and mxdraw libraries have js code packages that exceed the size of webpack's default limit and need to set hints: false to close the warning
  performance: {
    hints: false,
  }
};
```

5. After configuring the `packge.json` file as required, run the 'npx webpack serve' command to see the effect

Reference sample source code:

<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/webpack-v4>

<https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/webpack-v5>

## Other knowledge points

### Parameter description of the mxcad.create() function

 1. canvas：canvas id of the canvas instance

 2. locateFile：The core of mxcad relies on the wasm file in the corresponding category (` 2d `|` 2d-st `) under the directory `/mxcad/dist/wasm` in mxcad library (the file is compiled and generated by c++), wherein the 2d directory is multi-threaded programs, and the 2D-ST directory is single-threaded programs. This parameter specifies the network path of the wasm program.
  
 3. fontspath：Specifies the font file load path in a cad drawing. The default path is `dist/fonts`, where you can add all the font files you need to open your drawings.

 4. fileUrl：Specifies the network path to open the mxweb drawing.
     * The parameters fontspath, fileUrl and locateFile in the `create()` function that creates mxcad objects in mxcad are network paths.

 5. onOpenFileComplete: Listen for the callback event when opening a file is successful. Operations to be performed after the drawing is opened can be executed within this method.

 6. viewBackgroundColor: Set the background color of the view area, with the value in RGB format. 

 7. browse: Whether to set as browse mode. When the value is true or 1, browse mode is enabled and CAD objects cannot be selected; when the value is 2, browse mode is enabled and CAD objects can be selected but cannot be edited by grips; when the value is false, edit mode is enabled. 

 8. middlePan: Set the operation mode for moving the view. Set to 0 to move the view by clicking the left mouse button; set to 1 to move the view by clicking the middle mouse button; set to 2 to move the view by clicking either the middle or left mouse button. 

 9. enableUndo: Whether to enable the undo function. If set to true, the Mx_Undo command can be called to undo operations; if set to false, the undo command is disabled. The default setting is false. 

 10. enableIntelliSelect: Whether to enable the object selection function. Set to true to enable; set to false to disable. 

 11. multipleSelect: Whether to enable multiple selection. Set to true to enable; set to false to disable. 

 For more initialization parameter settings of createMxCad, please refer to the [MxCadConfig Configuration Description](../../api/interfaces/2d.MxCadConfig.md)

### Description of multi-thread and single-thread mode

mxcad supports multithreading by default for performance reasons. Among them, support for multithreading mode needs to open SharedArrayBuffer permissions, open can use `/wasm/2d` under the multithreaded program, otherwise use `/wasm/ 2d-ST/` under the single-threaded program.

The SharedArrayBuffer permission needs to be configured in the server responder, for example, node.js server program to enable SharedArrayBuffer permission set as follows:

```js
const http = require('http');
http.createServer((req, res)=> {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
})
```

How to determine whether SharedArrayBuffer permissions are enabled in front-end js, and then automatically use the correct program loading, the code is as follows:

```js
import { McObject } from "mxcad"
// Putting both 2d and 2D-ST into a static resource ensures that it works regardless of whether SharedArrayBuffer is turned on or not
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
const mxobj = new McObject()
mxobj.create({
  // ...
   locateFile: (fileName)=> {
    new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
   },
})
```
* To use SharedArrayBuffer permissions, Google's browser requires access using HTTPS or the local path (http://localhost).

# Drawing Conversion Steps

Due to the large size, multiple versions, and complex format of AutoCAD files (DWG, DXF), directly loading them into web pages is inefficient, occupies large memory space, and is prone to loading failures. Therefore, we have designed and provided a unique web CAD file format: `.mxweb`, which effectively solves the aforementioned numerous issues. mxweb files and CAD drawing files can be converted back and forth using the CloudDraw development package we provide.

For more detailed conversion steps, please refer to [Drawing conversion](https://mxcad.github.io/mxcad/en/guide/convert.html)

## Download the CloudDraw Development Package

We need to download the [MxDraw CloudDraw development package](https://www.webcadsdk.com/)

![下载云图开发包图片](https://mxcad.github.io/mxcad/assets/%E4%B8%8B%E8%BD%BD%E4%BA%91%E5%9B%BE%E5%BC%80%E5%8F%91%E5%8C%85%E5%9B%BE%E7%89%87.CHXUL2g0.jpg)

After downloading the `MxDrawCloudServer1.0TryVersion.7z` compressed package, decompress it,
Go to the directory `MxDrawCloudServer\Bin\MxCAD\Release` under the decompressed MxDrawCloudServer directory, which is the program directory responsible for converting `.mxweb` format.




## Convert CAD Drawings to mxweb Format

### Method One

Open the command window in the directory where the decompressed `MxDraw CloudDraw development package` is located, find the path of the target drawing, then run the command line: mxcadassembly target drawing path.

Example code as follows:
```bash
cd C:\Users\MxDev\Downloads\MxDrawCloudServer1.0TryVersion\MxDrawCloudServer\Bin\MxCAD\Release

mxcadassembly D:\test2.dwg
```

Wait for the command line to output `{"code":0 }` indicating the drawing conversion is successful. The successfully converted `.mxweb` format file will be automatically saved in the same directory as the target drawing.



### Method Two

Open the command window in the directory where the decompressed `MxDraw CloudDraw development package` is located, find the path of the target drawing, then run the command line: mxcadassembly JSON string.

Example code as follows:
```bash
mxcadassembly.exe {"srcpath":"D:\test2.dwg","outpath":"D:\","outname":"test", "compression":0}
```

| Parameter | Description |
| --- | --- |
| srcpath | Path of the file to be converted |
| outpath | outpath|Output file path |
| outname | outname|Output file name (suffix needs to be added when converting mxweb to CAD drawings) |
| compression | 0 means no compression, if this attribute is not written, it means compression |

## Convert mxweb Format to CAD Drawings

We can also use this program to convert `.mxweb` format files back to `.dwg` format files by executing the following command:
```bash
mxcadassembly.exe {"srcpath":"D:\test.mxweb","outpath":"D:\","outname":"test.dwg"}
```
* The parameter outname must include the suffix of the CAD drawing, generally .dwg.

## Linux Version

For the Linux version of the CloudDraw development package, authorization operation is required before operation:
Enter the `Bin/Linux/MxCAD` directory, we should first give these files permission and copy some directories to the specified location:
```bash
sudo chmod -R 777 mxcadassembly

sudo chmod -R 777 ./mx/so/*

sudo  cp -r -f ./mx/locale /usr/local/share/locale
```

Then we can refer to the Windows version file format conversion method for drawing conversion. For example, call the following command to convert CAD drawings to mxweb format:
```bash
./mxcadassembly "{'srcpath':'/home/mx/test.dwg','outpath':'/home/mx/Test','outname':'xxx'}"
```
where srcpath: the path where the target CAD file is located, outpath: the specified path where the converted drawing file is located, outname: specifies the filename of the output mxweb file.>>>>>>> .r10487
