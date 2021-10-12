require('./bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'
import api from './api/index'

Vue.use(VueRouter)
Vue.prototype.$api = api

const app = new Vue({
    router,
    components: {
        App
    }
}).$mount('#app')
