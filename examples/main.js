import Vue from 'vue'
import App from './App.vue'


import highlight from '../packages/index.js'

Vue.use(highlight)
Vue.config.productionTip = false

//导入代码高亮文件
import hljs from 'highlight.js'
//导入代码高亮样式
import 'highlight.js/styles/vs2015.css'


Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
// 初始化
Vue.prototype.$hljs = hljs;

new Vue({
  render: h => h(App),
}).$mount('#app')
