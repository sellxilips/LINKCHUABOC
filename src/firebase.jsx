// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDe-B0grz9-edSOLbV3wzGyBSHcCoItyXA",
  authDomain: "linkproject14.firebaseapp.com",
  projectId: "linkproject14",
  storageBucket: "linkproject14.appspot.com",
  messagingSenderId: "930521557785",
  appId: "1:930521557785:web:d415087be254545db93388"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
