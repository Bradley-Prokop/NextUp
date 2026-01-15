// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtfGtTmEmhZCa2uWYFPW3tTXxbmh7m4So",
  authDomain: "next-up-app-9fe4b.firebaseapp.com",
  projectId: "next-up-app-9fe4b",
  storageBucket: "next-up-app-9fe4b.firebasestorage.app",
  messagingSenderId: "121745269295",
  appId: "1:121745269295:web:b91ae622e899c67fd55cda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Database
export const db = getFirestore(app);