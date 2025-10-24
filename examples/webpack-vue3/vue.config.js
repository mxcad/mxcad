const { defineConfig } = require('@vue/cli-service')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: ['mxcad'],
  configureWebpack: {
    devServer: {
      headers: {
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Embedder-Policy": "require-corp"
      }
    }
    ,
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
        }
      ]),
    ]


  }
})
