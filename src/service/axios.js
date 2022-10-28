import axios from 'axios'
import { ElMessage } from 'element-plus'
import "element-plus/es/components/message/style/css"

axios.interceptors.request.use(res => {
    const { data } = res;
    if (typeof data !== 'object') {
        ElMessage.error('服务器异常')
        return Promise.reject(res);
    }
    if (data.code != 200) {
        if (res.data.message)
            ElMessage.error(res.data.message)
        return Promise.reject(res.data);
    }
 
    return data
}, (err) => {
    ElMessage.error({
        showClose: true,
        message: '服务器异常',
        type: 'error',
    })
    return Promise.reject(err)
})
export default axios