/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': path.resolve(__dirname, 'types')
    }
  },
  test: {
    globals: true,
    // 模拟 DOM 环境
    environment: 'happy-dom',
    // 支持 jsx
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
