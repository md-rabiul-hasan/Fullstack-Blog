import Vue from 'vue'
window.Vue = Vue;
require('./bootstrap'); 
import router from './router'

Vue.component('mainapp', require('./components/mainapp.vue').default)

const app = new Vue({
    el : '#app',
    router
})
