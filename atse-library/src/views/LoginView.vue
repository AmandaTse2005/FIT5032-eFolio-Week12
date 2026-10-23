<!-- Create a login page with username and password fields. -->
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">Library Login</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleLogin">
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" v-model="username" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password" />
                            </div>
                            <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//Implement a simple authentication system (use hardcoded credentials for now).
import { login } from '../authentication'

const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const validUsername = 'admin'
const validPassword = 'Password123456!'

const handleLogin = () => {
    if (username.value === validUsername && password.value === validPassword) {
        login()
        router.push('/about')
    } else {
        errorMessage.value = 'Invalid username or password.'
    }
}
</script>

<style>
</style>