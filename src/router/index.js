import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterAdoption from '../views/RegisterAdoption.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/registerAdoption',
    name: 'registerAdoption',
    component: RegisterAdoption
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
