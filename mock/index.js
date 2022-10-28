import Mock from 'mockjs'
const loginData = Mock.mock('http://localhost:8080/login','post', {
    state: 200,
    message: '登录成功',
    data: {
        token: '1234567890'
    }
})
