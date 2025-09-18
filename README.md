# Quick Start

> **mxcad must be used together with mxdraw.** If you are not familiar with the mxdraw library, please refer to: <https://mxcadx.gitee.io/mxdraw/>

> **Contact:** 710714273@qq.com

[](https://www.webcadsdk.com/img/WX-Two-dimensional-code.png)  
**Official Website:** <https://www.webcadsdk.com/>

mxcad supports rendering `.mxweb` format files (a proprietary frontend CAD format). CAD drawing files (DWG, DXF) can be converted into `.mxweb` files using the file conversion tool provided in our [mxdraw CloudDraw Development Kit](https://help.mxdraw.com/?pid=32). The converted `.mxweb` files can then be loaded and edited in a web browser via mxcad. Edited `.mxweb` files can also be converted back to standard CAD file formats using the same conversion tool.

---

## Using mxcad with Vite

In this section, we'll walk through creating a simple mxcad project using Vite.

Ensure you have [Node.js](https://nodejs.org/en) installed, then navigate to your desired project directory:

1. Run the following commands in your terminal to initialize the project and install Vite and mxcad:

```sh
npm init -y
npm install vite -D
npm install mxcad
```
:::tip Note
If using `pnpm`, you must manually install `mxdraw`:
```sh
pnpm install mxdraw
```
:::

2. Create an `index.html` file in the project root and set up a canvas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite with mxcad</title>
</head>
<body>
    <div style="height: 600px; overflow: hidden;">
        <canvas id="myCanvas"></canvas>
    </div>
</body>
</html>
```

3. Create a `src` directory in the root, and inside it, create an `assets` folder to store your `.mxweb` file. (You can [download a sample mxweb file here](https://gitee.com/mxcadx/mxcad_docs/blob/master/examples/public/test2.mxweb).)

4. Inside the `src` directory, create an `index.ts` file (Vite supports TypeScript by default).

Use the `create()` method from mxcad to load the target drawing. The `fileUrl` and other file paths in `create()` must be absolute **network URLs** relative to the script's location. In Vite, you can obtain the correct URL using `import.meta.url`.

```ts
import { McObject } from "mxcad"

// Create an mxcad instance
const mxcad = new McObject()
mxcad.create({
    canvas: "#myCanvas", // canvas element ID
    locateFile: (fileName) => new URL(`/node_modules/mxcad/dist/wasm/2d/${fileName}`, import.meta.url).href,
    fileUrl: new URL("../src/assets/test.mxweb", import.meta.url).href,
    fontspath: new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
})
```

Include this script in your `index.html`:

```html
<script type="module" src="./src/index.ts"></script>
```

> ⚠️ The `create()` method must be called **after** the canvas element is loaded in the DOM. Therefore, place the `<script>` tag inside the `<body>` to ensure the HTML is parsed first.

5. Create a `vite.config.ts` file in the root directory.

mxcad uses `SharedArrayBuffer`, which requires specific HTTP headers for cross-origin isolation. Configure your server accordingly:

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

6. After completing the steps above, start the project:

```sh
npx vite
```

**Example Source Code:** <https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/vite>

---

## Using mxcad via CDN

You can use mxcad directly via a CDN using `<script>` tags.

We use [unpkg](https://unpkg.com/) here, but any npm CDN works. You can also self-host the files.

```html
<script src="https://unpkg.com/mxdraw/dist/mxdraw.umd.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/mxcad/dist/mxcad.umd.js" crossorigin="anonymous"></script>
```

### Using the Global Build

Example with global build:

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
    <div style="height: 600px; overflow: hidden;">
        <canvas id="myCanvas" style="height: 300px"></canvas>
    </div>
    <script>
        const { McObject } = MxCAD
        const mxobj = new McObject()
        mxobj.create({
            canvas: "#myCanvas",
            locateFile: (fileName) => "https://unpkg.com/mxcad/dist/wasm/2d-st/" + fileName,
            fontspath: "https://unpkg.com/mxcad/dist/fonts/",
            fileUrl: "./test2.mxweb"
        })
    </script>
</body>
</html>
```

**Example Source Code:** <https://gitee.com/mxcadx/mxcad_docs/tree/master/examples/h5>

### Using ES Module Build

Modern browsers support ES modules natively. Use import maps to resolve `mxdraw` and `mxcad` modules:

```html
<div style="height: 600px; overflow: hidden;">
    <canvas id="myCanvas" style="height: 300px"></canvas>
</div>
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

---

## Using mxcad with Webpack

mxcad can also be used with other bundlers like Webpack.

1. Initialize the project and install dependencies:

```sh
npm init -y
npm install webpack webpack-cli copy-webpack-plugin@5 html-webpack-plugin -D
npm install mxcad
```

2. Create `index.html` in the root:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
  </head>
  <body>
     <div style="height: 600px; overflow: hidden;">
         <canvas id="myCanvas"></canvas>
     </div>
  </body>
</html>
```

3. Create a `src` directory and `src/index.js` to load the file:

```js
import { McObject } from "mxcad"

const mxcad = new McObject()
mxcad.create({
    canvas: "#myCanvas",
    fileUrl: "test.mxweb" // Ensure this file is accessible at http://your-domain/test.mxweb
})
```

Include the script in `index.html`:

```html
<script src="./src/index.js"></script>
```

4. Create `webpack.config.js`:

Copy required mxcad assets to the output directory:

```js
const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
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
      {
        from: "node_modules/mxcad/dist/wasm/2d/*",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      },
      {
        from: "node_modules/mxcad/dist/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        flatten: true,
        toType: "dir"
      },
    ])
  ],
  performance: {
    hints: false,
  }
};
```

5. After configuring `package.json`, run:

```sh
npx webpack serve
```

---

## Additional Notes

### `create()` Configuration Parameters

1. **canvas**: ID of the canvas element.
2. **locateFile**: URL path to the WASM files in `mxcad/dist/wasm/2d` (multithreaded) or `2d-st` (single-threaded).
3. **fontspath**: Path to font files used in CAD drawings. Default: `/fonts`.
4. **fileUrl**: Network path to the `.mxweb` file.
   :::tip Tip
   All paths (`fontspath`, `fileUrl`, `locateFile`) must be **absolute network URLs**.
   :::
5. **onOpenFileComplete**: Callback when file opens successfully.
6. **viewBackgroundColor**: Background color of the view (RGB).
7. **browse**: Browsing mode. `true` or `1`: browsing, no selection; `2`: browsing with selection (no editing); `false`: editing mode.
8. **middlePan**: View panning behavior. `0`: left-click; `1`: middle-click; `2`: both.
9. **enableUndo**: Enable undo functionality (`true`/`false`).
10. **enableIntelliSelect**: Enable intelligent object selection.
11. **multipleSelect**: Enable multiple selection.

For more details, see [MxCadConfig Interface](../../api/interfaces/2d.MxCadConfig.md).

### Multithreaded vs. Single-threaded Mode

mxcad defaults to multithreaded mode for performance. Multithreading requires `SharedArrayBuffer`, which needs proper HTTP headers:

```js
const http = require('http');
http.createServer((req, res) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
})
```

To detect `SharedArrayBuffer` support and choose the correct mode:

```js
import { McObject } from "mxcad"
const mode = "SharedArrayBuffer" in window ? "2d" : "2d-st"
const mxobj = new McObject()
mxobj.create({
  locateFile: (fileName) => {
    new URL(`/node_modules/mxcad/dist/wasm/${mode}/${fileName}`, import.meta.url).href
  },
})
```

:::tip Note
`SharedArrayBuffer` requires HTTPS or `http://localhost` in modern browsers (e.g., Chrome).
:::