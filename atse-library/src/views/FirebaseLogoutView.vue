<template>
    <h1>Log out</h1>
    <p v-if="loggedOutUser === null">You have been successfully logged out!</p>
    <p v-else>Logging out...</p>
    <router-link to="/FireLogin" class="nav-link" active-class="active">Back to Login</router-link>
</template>

<script setup>
import { ref, onMounted } from "vue"
import {getAuth, signOut} from "firebase/auth"
import {useRouter} from "vue-router"
const router = useRouter ()
const auth = getAuth ()

const loggedOutUser = ref (auth.currentUser)

onMounted(() => {
    console.log("Before Logout- Current User: ", auth.currentUser)

    signOut(auth)
    .then(() => {
        loggedOutUser.value = auth.currentUser
        console.log("After Logout- Current User: ", auth.currentUser)
    }).catch((error) => {
        console.log("Error during logout: ", error)
    })
});
</script>

<style>
</style>