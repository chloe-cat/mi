import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 导入css公共样式
import '../css/reset.css'

// 解决vue移动端点击事件双击报错问题;
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
