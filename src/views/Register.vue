<template>
    <el-row class="min-h-screen">
        <el-col :span="12" :offset="6" class="flex items-center justify-center flex-col">
            <el-card>
                <h2 class="text-2xl font-bold mb-4">注册</h2>
                <el-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules" label-width="0px" class="w-60">
                    
                    <el-form-item prop="email">
                        <el-input v-model="registerForm.email" placeholder="邮箱">
                            <template #prepend>
                                <el-icon>
                                    <User />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="registerForm.password" placeholder="密码" show-password>
                            <template #prepend>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="w-60" type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
                <!--没有账号  -->
                <div class="text-left text-xs">
                    <span>没有账号？</span>
                    <router-link to="/register" class=" text-purple-700 text-opacity-75 font-semibold">注册</router-link>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive, ref } from 'vue'
import register from '../service/api/user'
import { useRouter } from 'vue-router'
import { getToken,setToken,removeToken } from '../service/auth'
import { useStore } from 'vuex'
import { notice } from '../service/utils'
const store = useStore()
const router = useRouter()
// 登录表单
const registerForm = reactive({
    email: '',
    password: ''
})

// 登录表单验证规则
const registerFormRules = reactive({
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
    ]
})

// 登录表单ref
const registerFormRef = ref(null)

// 登录
const onSubmit = () => {
    registerFormRef.value.validate(async valid => {
        if (!valid) return
        register(registerForm).then(res=>{
            console.log(res);
            notice('success','登录成功')
            // 设置token
            setToken(res.data.token)
            // 获取用户信息
            
            // 设置状态
            store.commit('setUser',res.data)
            // 跳转到首页
            router.push('/')
        })
    })
}

</script>

<style>
.el-input-group__append,
.el-input-group__prepend {
    padding: 0 10px !important;
}
</style>
