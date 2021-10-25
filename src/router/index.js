import Vue from 'vue' //引入 Vue
import VueRouter from 'vue-router' //引入 Vue 路由

Vue.use(VueRouter) //安装插件

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', redirect: '/config' },
    { path: '/log', name: 'log', component: () => import('@/views/log') },
    { path: '/config', name: 'config', component: () => import('@/views/config') },
    { path: '/auto-checkin', name: 'scu', component: () => import('@/views/scu-check') },
  ]
})


export default router
