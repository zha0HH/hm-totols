import Vue from 'vue'
import App from './App.vue'
// 导入bootstarp样式
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
