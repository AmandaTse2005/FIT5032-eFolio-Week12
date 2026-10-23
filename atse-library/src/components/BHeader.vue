<!-- Week 5 Activity 5.1.1: Recreate the starter project -->
<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <!-- Week 5 Activity 5.5: Modify the navigation menu -->
                <!-- <a href="#" class="nav-link active" aria-current="page">Home (Week 5)</a> -->
                 <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
            </li>

            <!-- Create a login page with username and password fields. -->
            <li v-if="!isAuthenticated" class="nav-item">
                <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
            </li>

            <!-- Restrict access to certain routes (e.g., About page) to authenticated users only. -->
            <li v-if="isAuthenticated" class="nav-item">
                <router-link to="/about" class="nav-link" active-class="active">About</router-link>
            </li>

            <!-- Show a logout option for authenticated users. -->
            <li v-if="isAuthenticated" class="nav-item">
                <button type="button" class="nav-link btn btn-link" @click="handleLogout">Logout</button>
            </li>

            <!-- <li class="nav-item">
                <router-link to="/about" class="nav-link" active-class="active">About</router-link>
            </li> -->
            <!-- <li class="nav-item"><a href="#" class="nav-link">About</a></li> -->
            <!-- <li class="nav-item"><a href="#" class="nav-link">Contact us</a></li> -->

            <!-- Week 7 Activity 7.2.1: Setting up the VueJs -->
            <li class="nav-item">
                <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
            </li>

            <!-- Week 7 Activity 7.3.1: Create Firebase Registration page -->
            <li class="nav-item">
                <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
            </li>
            
            <li class="nav-item">
                <router-link to="/FireLogout" class="nav-link" active-class="active">Firebase Logout</router-link>
            </li>

            <!-- Week 8 Activity 8.4.2: Modify the existing page to incorporate added page -->
            <li class="nav-item">
                <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
            </li>

            <!-- Week 9 Activity 9.3.1: Start Vue.js project -->
            <li class="nav-item">
                <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>
            </li>

            <!-- Week 10 Activity 10.2.1: Page setup -->
            <li class="nav-item">
                <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
            </li>
            
            <!-- Week 10 Activity 10.3.1: Page setup -->
            <li class="nav-item">
                <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/GetAllBookAPI" class="nav-link" active-class="active">Get All Book API</router-link>
            </li>
        </ul>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

//Implement a simple authentication system (use hardcoded credentials for now).
import { isAuthenticated, logout } from '../authentication'

import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged} from 'firebase/auth'

const router = useRouter()

const auth = getAuth()
const currentUser = ref(null)

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        currentUser.value = user
    })
})

//Show a logout option for authenticated users.
const handleLogout = () => {
    logout()
    router.push('/login')
}
</script>

<style>
</style>