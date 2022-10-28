import request from '../index'
// USER 为模块名 调用时使用 USER.login()
export const USER = {
    login: (params) =>
      request({
        url: "/login",
        method: "get",
        data: params,
      }),
  };