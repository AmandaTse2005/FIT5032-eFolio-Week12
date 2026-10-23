//Week 8 Activity 8.2.1: Install package and configure Main.JS file
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugQYC5FgHpdqfQwcoHbqH-w0SOyuqjA4",
  authDomain: "fit5032-f556e.firebaseapp.com",
  projectId: "fit5032-f556e",
  storageBucket: "fit5032-f556e.firebasestorage.app",
  messagingSenderId: "915511787735",
  appId: "1:915511787735:web:bc7c61923b363a4f157092"
};

// Initialize Firebase
initializeApp(firebaseConfig); //Removed "const app ="

const db = getFirestore();
export default db