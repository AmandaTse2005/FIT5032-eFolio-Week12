<!-- Week 7 Activity 7.4.1: Create Firebase Sign-in page -->
<template>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>

    <br>
    <div v-if="currentUser">
        <h5>Current User: {{ currentUser.email }}</h5>
        <h5>Role: {{ currentRole }}</h5>
    </div>
</template>

<script setup>
import { ref } from "vue"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router"
const email = ref ("")
const password = ref ("")
const router = useRouter ()
const auth = getAuth ()

const currentUser = ref (null)
const currentRole = ref ("")

const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Firebase Sign In Successful!")

        const uid = data.user.uid
        const savedRoles = JSON.parse(localStorage.getItem("user_roles") || "{}")
        currentUser.value = auth.currentUser
        currentRole.value = savedRoles[uid] || "User"

        // router.push("/")
        console.log("Current User Object: ", auth.currentUser)
        console.log("Retrieved Role: ", currentRole.value)
    }).catch((error) => {
        console.log(error.code);
    })
};
</script>

<style>
</style>