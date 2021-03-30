import Vue from 'vue'
import Router from 'vue-router'
import MainBody from '@/views/MainBody'
import About from '@/views/About'

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
        }
    ]
})