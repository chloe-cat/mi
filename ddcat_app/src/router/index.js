import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',//重定向
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/brand',
    name: 'brand',  
    component: () => import( '../views/Brand.vue')
  },
  {
    path: '/shjd',
    name: 'shjd',
    component: () => import('../views/Shjd.vue')
  },
  {
    path: '/xwdt',
    name: 'xwdt',
    component: () => import('../views/news.vue')
  },
  {
    path: '/af',
    name: ' ',
    component: () => import('../views/tongXie.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
