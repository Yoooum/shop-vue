import router from '.';
import { getToken } from '../service/auth'
import { notice } from '../service/utils'

// 白名单
const whiteList = ['/login']

// 路由守卫
router.beforeEach((to, from, next) => {
    // 是否需要登录
    if (to.matched.some(record => record.meta.requireAuth)) {
        // 已登录
        if (getToken()) {
            next()
        } else {
            // 未登录
            notice('warning', '未登录')
            next('/login')
        }
    } else {
        // 不需要登录
        next()
    }
}, whiteList)
