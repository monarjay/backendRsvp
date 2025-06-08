import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RsvpList from '../views/RsvpList.vue' // ✅ Import the correct file

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/rsvps',
    name: 'RsvpList',
    component: RsvpList
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue') // optional
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
