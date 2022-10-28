import httpRequest from '../index'

// 用户登录
export function login (data) {
    return httpRequest({
        url: '/login',
        method: 'post',
        data
    })
    }
