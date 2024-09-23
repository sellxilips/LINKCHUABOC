// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBi9cJbTrcLokej2vajE0S8W9jdGB-Sd_I",
  authDomain: "linkproject2-329a9.firebaseapp.com",
  projectId: "linkproject2-329a9",
  storageBucket: "linkproject2-329a9.appspot.com",
  messagingSenderId: "570315702406",
  appId: "1:570315702406:web:19727bf005cc0dafafd107"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
