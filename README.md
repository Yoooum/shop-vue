# shop-frontend-vue


## 接口根地址

http://localhost:8080/api

## 接口地址



### /login
请求
```json
{
    "email":"test@p.p",
    "password":"password"
}
```
响应
```json
{
  "code": 0,
  "msg": "登录成功",
  "data": {
    "user": {
      "email": "email",
      "password": "password",
      "uid": 18,
      "username": "username"
    },
    "token": "your_token"
  }
}
```

### /register
请求
```json
{
    "email": "email",
    "username": "username",
    "password": "password"
}
```
响应
```json
{
   "code": 0,
   "msg": "注册成功",
   "data": {
        "username": "test",
        "email": "test@p.p",
        "uid": 123
   }
}
```
