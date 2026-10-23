<script setup>
//Activity 1: Import JSON files (authors.json and bookstores.json)
//TODO: CODE TO IMPORT JSON FILES HERE
import authors from "../assets/json/authors.json";
import bookstores from "../assets/json/bookstores.json";

//Activity 2.1: Get Authors Born After 1850
import {computed, ref} from "vue";

const modernAuthors = computed(() =>
  authors.filter((author) => author.birthYear > 1850)
);

//Activity 2.2: Get All Famous Works
const allFamousWorks = computed(() =>
  authors.flatMap((author) => author.famousWorks.map((work) => work.title))
);

//Activity 4.1 Toggle the Message Visibility When the Button is Clicked
const showMessage = ref(false);
</script>

<template>
  <div>
    <!-- Activity 3.1: Render a list containing author names and their birth years -->
    <h2><b>Iterating through Arrays</b></h2>
    <ul>
      <li v-for="author in authors" :key="author.id">
        <span
          :title="author.name === 'George Orwell' ? 'Highlighted Author' : ''"
          :class="{highlight: author.name === 'George Orwell'}"
          :style="{color: 'Black', fontWeight: author.name === 'George Orwell' ? 'Bold' : 'Normal'}"
          >
          {{ author.name }}
        </span>
        ({{ author.birthYear }})
      </li>
    </ul>
    
    <!-- Activity 3.2: Render a list containing authors born after 1850 -->
    <h2><b>Filtering Arrays</b></h2>
    <p>Authors born after 1850:</p>
    <ul>
      <li v-for="author in modernAuthors" :key="author.id"> 
        {{ author.name }} ({{ author.birthYear }})
      </li>
    </ul>

    <!-- Activity 3.3: Render a list of all famous works -->
    <h2><b>Mapping Arrays</b></h2>
    <p>Famous Works:</p>
    <ul>
      <li v-for="work in allFamousWorks" :key="work">
        {{ work }}
      </li>
    </ul>

    <br>

    <!-- Activity 4.1 Toggle the Message Visibility When the Button is Clicked -->
    <h2><b>v-if & v-else</b></h2>
    <p>Toggle visibility based on a condition.</p>
    <button @click="showMessage = !showMessage">Toggle Message</button>
    <p v-if="showMessage" class="message success">
      ✨ You're a Vue superstar! ✨
    </p>
    <p v-else class="message">Click the button to see a message.</p>

  </div>
</template>