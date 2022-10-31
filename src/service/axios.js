import axios from 'axios'
import { ElMessage } from 'element-plus'
import "element-plus/es/components/message/style/css"
import { getToken,removeToken } from '../service/auth'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 自动添加token
        if (getToken()) {
            config.headers['token'] = getToken()
        }
        return config
    },
    error => {
        // 对请求错误做些什么
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        const res = response.data
        // 响应错误
        if (res.code !== 200) {
            ElMessage({
                message: res.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            // 响应成功
            return res
        }
    },
    error => {
        // 对响应错误做点什么
        console.log('err' + error)
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)



export default service