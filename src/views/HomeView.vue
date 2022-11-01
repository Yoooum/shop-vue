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
  <h1 class="text-4xl font-bold">Welcome to the Shop</h1>
  <aside class="w-50">
    
  <el-row class="tac">
    <el-col>
      <h5 class="mb-2">Default colors</h5>
      <el-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
      </el-col>
      </el-row>
  </aside>
  <main>
    
    <br />
    <!-- 显示状态 -->
    {{ cookies.get('token') }}
    <br />
    <!-- <RouterLink to="/login">登录</RouterLink> -->
    <el-button @click="login">登录</el-button>
    <el-button @click="logout">退出</el-button>
  </main>
</template>
