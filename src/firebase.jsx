// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBl0c9v24rdkgulEhI9tT_fbW61-OXj4gQ",
  authDomain: "linkproject9.firebaseapp.com",
  projectId: "linkproject9",
  storageBucket: "linkproject9.appspot.com",
  messagingSenderId: "201007004535",
  appId: "1:201007004535:web:44d5005eabd655b01fff72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
