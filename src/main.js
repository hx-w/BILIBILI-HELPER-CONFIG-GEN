import Vue from 'vue'
import JSONView from 'vue-json-viewer'

import App from './App.vue'
import router from './router' //引入路由配置
import store from './store' //引入 Vuex 状态管理
import axios from 'axios'

import './assets/css/global.css'
import './plugins/element'

Vue.use(JSONView)

Vue.prototype.$http=axios
Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router, //使用路由配置
    store //使用 Vuex 进行状态管理
}).$mount('#app')