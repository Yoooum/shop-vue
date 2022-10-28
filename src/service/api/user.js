import axios from '../axios'

export default function login(data) {
  return axios.post('/login',{
    email: data.email,
    password: data.password
  })
}

