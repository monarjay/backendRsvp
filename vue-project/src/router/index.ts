// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

import RsvpList from '../views/RsvpList.vue'; // Import directly
import Home from '../views/Home.vue';         // Fix: correct import

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rsvps',
    name: 'RSVP List',
    component: RsvpList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // ✅ THIS IS IMPORTANT
