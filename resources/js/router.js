import Vue from 'vue';
import Router from 'vue-router';
import FirstVuePage from './components/pages/firstVuePage.vue';
import SecondPage from './components/pages/secondPage.vue';

Vue.use(Router);

const routes = [
    {
        path     : '/my-new-route',
        component: FirstVuePage
    },
    {
        path     : '/new-route',
        component: SecondPage
    }
]

export default new Router({
    mode : 'history',
    routes
})