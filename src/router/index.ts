import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/Error/401/index.vue'),
    meta: {
      title: '401',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/Error/404/index.vue'),
    meta: {
      title: '404',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
