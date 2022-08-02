/// <reference types="vite/client" />

declare module 'vitepress-theme-demoblock'
declare module 'vitepress/dist/client/theme-default'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, never>,
    Record<string, never>,
    unknown
  >
  export default component
}
