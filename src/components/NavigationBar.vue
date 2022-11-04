<script setup>
import { getToken,setToken,removeToken } from '@/service/auth'
const logout = () => {
  removeToken()
  location.reload()
}
</script>
<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    >
    <el-menu-item class="font-bold" index="0">LOGO</el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="1"><RouterLink to="/">首页</RouterLink></el-menu-item>
    <el-menu-item index="2"><RouterLink to="/new">新品</RouterLink></el-menu-item>
    <el-menu-item index="3"><RouterLink to="/cart">购物车(0)</RouterLink></el-menu-item>
    <el-sub-menu index="4">
      <template #title>个人中心</template>
      <el-menu-item index="4-1"><RouterLink to="setting">账号设置</RouterLink></el-menu-item>
      <el-menu-item index="4-2"><RouterLink to="order">我的订单</RouterLink></el-menu-item>
      <el-menu-item index="4-3" @click="logout">退出账号</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>