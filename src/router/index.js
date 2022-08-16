import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/list',
      children:[{
        path: '/list',
        name: 'list',
        component: () => import('../views/ListView.vue')
      },
        {
          path: '/create',
          name: 'create',
          component: () => import('../views/CreateView.vue')
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: () => import('../views/UserView.vue')
        },
      ]
    },
  ]
})

export default router
