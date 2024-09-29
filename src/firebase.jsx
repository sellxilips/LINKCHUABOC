// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDN8nDmg4oFSfpaEGcvFrcU9I6QZuPRczs",
  authDomain: "linkproject8.firebaseapp.com",
  projectId: "linkproject8",
  storageBucket: "linkproject8.appspot.com",
  messagingSenderId: "587639012186",
  appId: "1:587639012186:web:114090b33cf30a4897d163"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
