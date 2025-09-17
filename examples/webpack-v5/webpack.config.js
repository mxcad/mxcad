const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.development === "development" ? "development" : "production",
  entry: './src/index.js',
  devServer: {
    port: 4321,
    static: './dist',
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
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
      // 这里拷贝的是转换后的图纸文件 对应在src/index.js中 `mxcadObj.openWebFile("test2.mxweb")`
      // 这只是转换后的测试图纸文件 你应该转换自己的图纸文件
      {
        from: "../public/test2.mxweb",
        to: path.resolve(__dirname, "dist"),
        flatten: true
      }
    ]),
    new HtmlWebpackPlugin({
      title: "use mxcad webpack v5"
    })
  ],
  performance: {
    hints: false,
  },
};