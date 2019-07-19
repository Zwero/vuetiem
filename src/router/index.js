import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入登录页面
import Login from '@/views/login.vue'
// 首页
import Home from '@/views/home.vue'

Vue.use(VueRouter)
// 创建路由对象
var router = new VueRouter({
  // 路由配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
})
// 暴露
export default router
