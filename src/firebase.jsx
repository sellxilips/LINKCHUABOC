// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA21ElRyOxYA_2hQsG9vmL-HI6tK5wKJUE",
  authDomain: "linkproject16.firebaseapp.com",
  projectId: "linkproject16",
  storageBucket: "linkproject16.appspot.com",
  messagingSenderId: "393721070350",
  appId: "1:393721070350:web:72f73bb4cc8b6cfabc0d5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
