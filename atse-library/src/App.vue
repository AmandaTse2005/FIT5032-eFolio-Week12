<script setup>
//Activity 1: Create Form Vue component
// import JSON from './components/JSON.vue'

// import JSONSolution from "./components/JSONSolution.vue"
// import LibraryRegistrationForm from './components/LibraryRegistrationForm.vue';

//Week 5 Activity 5.1.1: Recreate the starter project
import BHeader from './components/BHeader.vue'

//Week 10 Activity 10.3.1: Page setup
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Note: CountBookAPI is registered as a route component via vue-router,
// so it doesn't need to be imported here unless used directly in the template.

const route = useRoute();

// Computed property replacing the old computed option
const showHeader = computed(() => {
  return route.name !== 'CountBookAPI';
});
</script>

<template>
  <!-- Week 5 Activity 5.1.1: Recreate the starter project -->
  <!-- <header>
    <BHeader />
  </header>

  <main class="container mt-4"> -->
    <!-- <JSON /> -->
    <!-- <JSONSolution /> -->
    <!-- Week 5 Activity 5.4: Modify Main App Component -->
    <!-- <LibraryRegistrationForm /> -->
    <!-- <router-view></router-view>
  </main> -->

  <!-- Week 10 Activity 10.3.1: Page setup -->
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

/* Week 5 Activity 5.8: Clean-up! */
   .card {
   border: 1px solid #ccc;
   border-radius: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   }
   .card-header {
   background-color: #275FDA;
   color: white;
   padding: 10px;
   border-radius: 10px 10px 0 0;
   }
   .list-group-item {
   padding: 10px;
   }
</style>