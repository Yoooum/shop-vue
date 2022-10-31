import axios from '../axios'
export default {
}
export function login(data) {
  return axios.post('/login',{
    email: data.email,
    password: data.password
  })
}

export function register(data) {
  return axios.post('/register',{
    username: data.username,
    email: data.email,
    password: data.password
  })
}


