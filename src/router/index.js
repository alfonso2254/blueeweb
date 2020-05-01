import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/frutas',
    name: 'Frutas',
    component: () => import('@/views/Frutas.vue')
  },
  {
    path: '/fotos/:id',
    name: 'Fotos',
    component: () => import('@/views/Fotos.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('@/views/Grid.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('@/views/Cards.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('@/views/Forms.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('@/views/Forms.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
