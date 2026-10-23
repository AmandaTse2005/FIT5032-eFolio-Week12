<!-- Create an access-denied page to show unauthenticated users. -->
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                <h2 class="text-center">Access Denied</h2>
                <p class="text-danger">You must be logged in to access this page!</p>
                <router-link to="/login" class="btn btn-primary">Go to Login</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
</style>