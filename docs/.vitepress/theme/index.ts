import HelloWorld from '../../../src/components/HelloWorld.vue'
import Theme from 'vitepress/dist/client/theme-default'
import { App } from 'vue'

import 'vitepress-theme-demoblock/theme/styles/index.css'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({ app }: { app: App }) {
    // 注册组件
    app.component('HelloWorld', HelloWorld)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
