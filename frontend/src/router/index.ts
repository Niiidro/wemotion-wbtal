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
  ],
});

export default router;
