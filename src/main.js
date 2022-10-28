import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
//import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:8080/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const app = createApp(App)

app.use(VueAxios,axios).use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
