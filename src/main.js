import Vue from 'vue'
import App from './App.vue'
// 引入全局组件，三级联动
import TypeNav from './components/TypeNav'
//激活组件 第一个参数组件名称，第二个参数哪一个组件
Vue.component(TypeNav.name,TypeNav) 

Vue.config.productionTip = false
// 引入路由器
import router from './router'
// 引入vuex仓库
import store from './store'
new Vue({
  render: h => h(App),
  // 注册路由信息
  router,
  // 注册仓库，
  store
}).$mount('#app')
