// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCE1Kc8CY191rqAyeScBkYYBxJoq9cRK8M",
  authDomain: "linkproject4-1d5c4.firebaseapp.com",
  projectId: "linkproject4-1d5c4",
  storageBucket: "linkproject4-1d5c4.appspot.com",
  messagingSenderId: "578522963692",
  appId: "1:578522963692:web:3d8751329566739213cfc9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
