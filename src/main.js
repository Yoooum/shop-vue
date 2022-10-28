import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
//import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            // 保存用户信息
            user:{}
        }
    },
    mutations: {
        // 修改用户信息
        setUser(state, user) {
            state.user = user
        }
    }
})
const app = createApp(App)

app.use(VueAxios,axios).use(router).use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
