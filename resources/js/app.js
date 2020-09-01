require('./bootstrap');
window.Vue = require('vue');
import App from './components/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './index'

import StoreData from './store/index'

import Vuex from 'vuex'
import swal from 'vue-swal'

Vue.use(swal)
Vue.use(Vuex)
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'hash',
})
const store = new Vuex.Store(StoreData);
const app = new Vue({

    el: '#app',
    store: store,
    router,
    render: h => h(App)

});