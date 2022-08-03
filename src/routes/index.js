import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory (),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router