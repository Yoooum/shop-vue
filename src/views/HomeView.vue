<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'
import TheWelcome from '../components/TheWelcome.vue'
import router from '../router'
import { notice } from '../service/utils'
const cookies = useCookies()

const login = () => {
  router.push('/login')
}

const logout = () => {
  cookies.remove('token')
  
  notice('success', '退出成功')
}

</script>

<template>
  <main>
    <h1 class="text-4xl font-bold">Welcome to the Shop</h1>
    <br />
    <!-- 显示状态 -->
    {{ cookies.get('token') }}
    <br />
    <!-- <RouterLink to="/login">登录</RouterLink> -->
    <el-button @click="login">登录</el-button>
    <el-button @click="logout">退出</el-button>
  </main>
</template>
