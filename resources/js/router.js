import Vue from 'vue';
import Router from 'vue-router';
import FirstVuePage from './components/pages/firstVuePage.vue';
import SecondPage from './components/pages/secondPage.vue';
import Hooks from './components/pages/basic/hooks.vue';
import Home from './components/pages/home.vue';
import Tags from './components/pages/tags.vue';

Vue.use(Router);

const routes = [
    // Project Route
    {
        path : '/',
        component : Home
    },
    {
        path: '/tags',
        component : Tags
    },


    // basic tutorial
    {
        path     : '/my-new-route',
        component: FirstVuePage
    },
    {
        path     : '/new-route',
        component: SecondPage
    },

    // Vue Basic
    {
        path : '/hooks',
        component : Hooks
    }
]

export default new Router({
    mode : 'history',
    routes
})