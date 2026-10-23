<!-- Week 10 Activity 10.3.1: Page setup -->
<template>
  <!-- <div id="app">
    <h1>Book Count</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div> -->
  
  <pre>
    {{ jsondata }}
  </pre>
</template>

<script setup>
import axios from 'axios';
// import { ref } from 'vue';

const count = ref(null);
const error = ref(null);

import { ref, onMounted } from 'vue';

const jsondata = ref(null);

onMounted(() => {
  getBookCountAPI();
});

// const getBookCount = async () => {
//     try {
//         const response = await axios.get('https://countbooks-waonxcrica-uc.a.run.app/countBooks');
//         count.value = response.data.count;
//         error.value = null;
//     } catch (err) {
//         error.value = 'Error fetching book count';
//         count.value = null;
//     }
// };

const getBookCountAPI = async () => {
  try {
    const response = await axios.get('https://countbooks-waonxcrica-uc.a.run.app/countBooks');
    jsondata.value = JSON.stringify(response.data, null, 2);
    error.value = null;
  } catch (err) {
    error.value = 'Error fetching book count';
    jsondata.value = null;
  }
};
</script>

<style>
</style>