<template>
    <el-row class="min-h-screen">
        <el-col :span="12" :offset="6" class="flex items-center justify-center flex-col">
            <el-card>
                <h2 class="text-2xl font-bold mb-4">登录</h2>
                <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="w-60">
                    <el-form-item prop="email">
                        <el-input v-model="loginForm.email" placeholder="邮箱">
                            <template #prepend>
                                <el-icon>
                                    <User />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" placeholder="密码" show-password>
                            <template #prepend>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="w-60" type="primary" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { USER } from '../service/api/user'

// 登录表单
const loginForm = reactive({
    email: '',
    password: ''
})

// 登录表单验证规则
const loginFormRules = reactive({
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
const loginFormRef = ref(null)

// 登录
const login = () => {
    loginFormRef.value.validate(async valid => {
        if (!valid) return
        const { data } = await USER.login(loginForm)
        console.log(data);
    })
}

</script>

<style>
.el-input-group__append,
.el-input-group__prepend {
    padding: 0 10px !important;
}
</style>
