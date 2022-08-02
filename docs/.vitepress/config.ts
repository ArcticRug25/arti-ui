import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/', children: [] },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    { text: '导航', children: [] },
    { text: '反馈', children: [] },
    {
      text: '数据录入',
      children: []
    },
    {
      text: '数据展示',
      children: []
    },
    {
      text: '布局',
      children: []
    }
  ]
}

export default defineConfig({
  themeConfig: {
    sidebar
  },
  markdown: {
    config(md: markdownit) {
      // 使用 markdown-it 插件
      md.use(demoBlockPlugin)
    }
  }
})
