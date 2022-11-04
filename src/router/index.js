import { createRouter, createWebHistory } from 'vue-router'

import NavBar from '@/components/NavigationBar.vue'

import Home from '@/views/Home.vue'
import New from '@/views/New.vue'
import Cart from '@/views/Cart.vue'
import Order from '@/views/Order.vue'
import Profile from '@/views/Profile.vue'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import NotFound from '@/views/NotFound.vue'

import { getToken } from '@/service/auth'
import { notice } from '@/service/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', components: { default: NavBar, mainView: Home }, meta: { requireAuth: true } },
    { path: '/new', components: { default: NavBar, mainView: New }, meta: { requireAuth: true } },
    { path: '/cart', components: { default: NavBar, mainView: Cart }, meta: { requireAuth: true } },
    { path: '/order', components: { default: NavBar, mainView: Order }, meta: { requireAuth: true } },
    { path: '/profile', components: { default: NavBar, mainView: Profile }, meta: { requireAuth: true } },

    { path: '/login', component: Login, meta: { requireAuth: false } },
    { path: '/register', component: Register, meta: { requireAuth: false } },

    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if(getToken()) {
      next()
    } else {
      notice('warning','请先登录')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
