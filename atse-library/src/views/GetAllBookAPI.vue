<template>
  <pre>
    {{ jsondata }}
  </pre>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const jsondata = ref(null);

onMounted(() => {
  getAllBooksAPI();
});

const getAllBooksAPI = async () => {
  try {
    const response = await axios.get('https://getallbooks-waonxcrica-uc.a.run.app/getAllBooks');
    jsondata.value = JSON.stringify(response.data, null, 2);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
</script>

<style>
</style>