// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBDxGxrIQiFy7A4mphuVcBI_jD2BiLfapg",
  authDomain: "linkproject11.firebaseapp.com",
  projectId: "linkproject11",
  storageBucket: "linkproject11.appspot.com",
  messagingSenderId: "14843761387",
  appId: "1:14843761387:web:d715737ab7d2ef8b9fe4ae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
