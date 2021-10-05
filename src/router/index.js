import Vue from 'vue' //引入 Vue
import VueRouter from 'vue-router' //引入 Vue 路由

Vue.use(VueRouter) //安装插件

const router = new VueRouter({
  mode: 'history',
  routes: [
    //配置默认的路径，默认显示登录页
    { path: '/', redirect: '/config' },
    { path: '/config', component: () => import('@/views/config') },
    { path: '/log', component: () => import('@/views/log') },
  ]
})


export default router
