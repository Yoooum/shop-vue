import { ElMessage } from 'element-plus'
import "element-plus/es/components/message/style/css"

// 消息提示 type:success/warning/info/error
export function notice(type,message) {
    ElMessage({
        message: message,
        type: type,
        duration: 3 * 1000,
        grouping: true
    })
}


