import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About'

Vue.use(VueRouter)

const routes = new VueRouter [
    {
        path: '/about',
        name: 'Sobre',
        component: About
    }
]