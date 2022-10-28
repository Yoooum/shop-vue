<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'
import TheWelcome from '../components/TheWelcome.vue'

const cookies = useCookies()

</script>

<template>
  <main>
    <h1 class="text-4xl font-bold">Welcome to the Shop</h1>
    <RouterLink to="/login">登录</RouterLink>
  </main>
</template>
