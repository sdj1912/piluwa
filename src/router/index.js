import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../views/classify.vue')
  },
  {
    path: '/hot',
    name: 'Hot',
    component: () => import('../views/hot.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
