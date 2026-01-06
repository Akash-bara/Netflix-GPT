// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwUk9HK6Ohbflr6PY1_moczPuun3UP24Y",
  authDomain: "netflix-gpt-8792f.firebaseapp.com",
  projectId: "netflix-gpt-8792f",
  storageBucket: "netflix-gpt-8792f.firebasestorage.app",
  messagingSenderId: "222575773604",
  appId: "1:222575773604:web:204fa456e3ad4161286331",
  measurementId: "G-Q8HFZZTM6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();