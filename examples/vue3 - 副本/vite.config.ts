import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // 匹配以 /upfile 开头的请求，代理到目标服务器
      '/upfile': {
        target: 'http://localhost:3000', // 后端服务地址
        changeOrigin: true,              // 改变请求头中的 Origin，欺骗后端
        // rewrite: (path) => path.replace(/^\/upfile/, '/upfile'), // 路径无需改写
      },
      '/demo': {
        target: 'http://localhost:3000', // 后端服务地址
        changeOrigin: true,              // 改变请求头中的 Origin，欺骗后端
        // rewrite: (path) => path.replace(/^\/upfile/, '/upfile'), // 路径无需改写
      },
    },
  },
})
