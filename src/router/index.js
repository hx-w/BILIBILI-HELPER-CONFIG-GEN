import Vue from 'vue' //引入 Vue
import VueRouter from 'vue-router' //引入 Vue 路由

Vue.use(VueRouter) //安装插件

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/log', component: () => import('@/views/log') },
    { path: '/', redirect: '/config' },
    { path: '/config', component: () => import('@/views/config') },
  ]
})


export default router
