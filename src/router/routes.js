import Vue from 'vue'
import Router from 'vue-router'
import MainBody from '@/views/MainBody'
import About from '@/views/About'
import Portfolio from '@/views/Portfolio'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: MainBody
        },
        {
            path: '/about',
            name: 'Sobre',
            component: About
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/*',
            name: 'Not found',
            component: NotFound
        }
    ]
})