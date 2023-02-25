import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView')
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/views/CreateView')
    },
    {
        path: '/cart/:id',
        name: 'cart',
        component: () => import('@/views/CartEdit')
    }

]

const router = new VueRouter({
    routes
})

export default router
