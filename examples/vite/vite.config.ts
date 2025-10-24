import { defineConfig } from "vite"

export default defineConfig({
    build: {
      rollupOptions: {
        external: ['mxcad'], // 将 url 模块设置为外部化，并声明该模块需要被打包
      }
    },
    server: {
        headers: {
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
        }
    }
})