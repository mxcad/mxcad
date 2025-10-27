const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// @ts-ignore
const CopyWebpackPlugin = require("copy-webpack-plugin")
// @ts-ignore
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// @ts-ignore
module.exports = {
    mode: process.env.development === "development" ? "development" : "production",
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
   
    },
   
    performance: {
        hints: false,
    },
    devServer: {
        port: 1234,
        static: './dist',
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        // mxdraw按需加载
                        // plugins: [
                        //     [
                        //         "import", {
                        //             "libraryName": "mxdraw",
                        //             "libraryDirectory": "dist/lib/MxModule",
                        //             "camel2UnderlineComponentName": false,
                        //             "camel2DashComponentName": false
                        //         }
                        //     ]
                        // ]
                    },
                },
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
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
            title: "use mxcad webpack v4"
        }),
    ],

};