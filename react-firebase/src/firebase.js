// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDle11-vPuY550avG28pUxK8uRwKYKp8ZU",
  authDomain: "node-y-firebase.firebaseapp.com",
  projectId: "node-y-firebase",
  storageBucket: "node-y-firebase.firebasestorage.app",
  messagingSenderId: "942087652500",
  appId: "1:942087652500:web:273f7ce079dc6cab28a081"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);