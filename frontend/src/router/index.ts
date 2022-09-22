import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Landing.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Landing.vue'),
        },
      ],
    },
    {
      path: '/home',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Home.vue'),
        },
      ],
    },
    {
      path: '/program',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Program.vue'),
        },
      ],
    },
    {
      path: '/sponsors',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Sponsors.vue'),
        },
      ],
    },
    {
      path: '/partner',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Partner.vue'),
        },
      ],
    },
    {
      path: '/media',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Media.vue'),
        },
      ],
    },
    {
      path: '/team',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Team.vue'),
        },
      ],
    },

    {
      path: '/tickets',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Tickets.vue'),
        },
      ],
    },
    {
      path: '/contact',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Contact.vue'),
        },
      ],
    },
    {
      path: '/gallery',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Gallery.vue'),
        },
      ],
    },
  ],
});

export default router;
