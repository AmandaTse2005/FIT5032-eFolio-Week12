// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import bootstrap css

//Activity 3: Form styling with CSS
// import './style.css'

//Activity 4: Install and Set up Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'

//Week 4 Activity 4: Install PrimeVue into the Library Web Application
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

//Week 5 Activity 5.6: Update Main.js
import router from './router'

//Week 7 Activity 7.2.1: Setting up the VueJs
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAugQYC5FgHpdqfQwcoHbqH-w0SOyuqjA4",
//   authDomain: "fit5032-f556e.firebaseapp.com",
//   projectId: "fit5032-f556e",
//   storageBucket: "fit5032-f556e.firebasestorage.app",
//   messagingSenderId: "915511787735",
//   appId: "1:915511787735:web:bc7c61923b363a4f157092"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig); //Removed "const app ="

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)

app.use(router)

app.mount('#app')