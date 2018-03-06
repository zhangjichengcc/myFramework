import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {} from './methods/Type.js'
import {} from './methods/Date.js'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.debug = true;

Vue.config.devtools = true;

// var App = Vue.extend({});




const router = new VueRouter({
    routes: routes,
    linkActiveClass:'active',
    // mode:'history' //使用h5api的history.pushstate()来改变路径
})

// var app = new App({
//     router
// }).$mount('#index-page')


var vm = new Vue({
    el:"#index-page",
    data: {
    	title: 'index-page'
    },
    methods: {

    },
    // 将 router赋值给router属性，这时候就引入到实例中，
    // 会在实例中提供两个属性this.$route(属性)，this.$router(方法);
    router:router

})

window.vm = vm;