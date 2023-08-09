// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArKpWQKQYssot8rfy88YiPjkJr4A3fm8c",
  authDomain: "fir-ce83e.firebaseapp.com",
  projectId: "fir-ce83e",
  storageBucket: "fir-ce83e.appspot.com",
  messagingSenderId: "438558072776",
  appId: "1:438558072776:web:8e5ce3a8eb8a6639e52afd",
  measurementId: "G-PRW8LB3C9Y",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
