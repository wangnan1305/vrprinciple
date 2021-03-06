import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/2',
      name: 'draggable',
      component: () => import('./components/draggable.vue')
    },
    {
      path: '/3',
      name: 'cropper2',
      component: () => import('./components/cropper2.vue')
    },
    {
      path: '/4',
      name: 'cropper',
      component: () => import('./components/cropper.vue')
    }
  ]
})
