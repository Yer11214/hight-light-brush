import Vue from 'vue'
import App from './App.vue'


import highlight from '../packages/index.js'

Vue.use(highlight)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
