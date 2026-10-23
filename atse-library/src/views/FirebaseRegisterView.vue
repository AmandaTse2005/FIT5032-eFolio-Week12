<!-- Week 7 Activity 7.3.1: Create Firebase Registration page -->
<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p>
        <select v-model="role">
            <option value="User">User</option>
            <option value="Admin">Admin</option>
        </select>
    </p>
    <p><button @click="register">Save to Firebase</button></p>
</template>

<script setup>
import { ref } from "vue"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router"
const email = ref ("")
const password = ref ("")
const router = useRouter ()
const auth = getAuth ()

const role = ref ("User")

const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const uid = userCredential.user.uid
        const savedRoles = JSON.parse(localStorage.getItem("user_roles") || "{}")
        savedRoles[uid] = role.value
        localStorage.setItem("user_roles", JSON.stringify(savedRoles))

        console.log("Firebase Register Successful! Role: ", role.value)
        router.push("/FireLogin")
    }).catch((error) => {
        console.log(error.code);
    })
};
</script>

<style>
</style>