// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAZznLOg2pr3fyQbrKUcvkP47vHzAPxgws",
  authDomain: "tiktok---jornada-8f83b.firebaseapp.com",
  projectId: "tiktok---jornada-8f83b",
  storageBucket: "tiktok---jornada-8f83b.appspot.com",
  messagingSenderId: "240609915277",
  appId: "1:240609915277:web:c382d79c133f6c3088cdc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;