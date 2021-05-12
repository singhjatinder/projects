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
    path: '/EarlyLife',
    name: 'EarlyLife',
    component: () => import('../views/EarlyLife.vue')
  },
  {
    path: '/Education',
    name: 'Education',
    component: () => import('../views/Education.vue')
  },
  {
    path: '/Careers',
    name: 'Careers',
    component: () => import('../views/Careers.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/Photography',
    name: 'Photography',
    component: () => import('../views/Photography.vue')
  },
  {
    path: '/ContactMe',
    name: 'ContactMe',
    component: () => import('../views/ContactMe.vue')
  },
  {
    path: '/TimeAndWeather',
    name: 'TimeAndWeather',
    component: () => import('../views/TimeAndWeather.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
