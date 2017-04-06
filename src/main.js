// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Axios from 'axios'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
import './common/stylus/index.styl'
Vue.use(VueRouter) // 注册插件
Vue.use(VueResource)
Vue.prototype.$ajax = Axios
// 定义路由
const routes = [
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
]
// 创建 router 实例，然后传 routes 配置
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'// 标签激活的时候应用的类
})
// 创建和挂载根实例。通过 router 配置参数注入路由，从而让整个应用都有路由功能
const app = new Vue({
  router,
  render: h => h(App)
})
app.$mount('#app')
router.push('/goods')// 载入时默认展示的页面
