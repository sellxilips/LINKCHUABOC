// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_peNcP7mIBXGnkDXCvqSjXfow9WpDmT8",
  authDomain: "linkproject5.firebaseapp.com",
  projectId: "linkproject5",
  storageBucket: "linkproject5.appspot.com",
  messagingSenderId: "1081867582510",
  appId: "1:1081867582510:web:3610b3241f78ac206ab3bf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
