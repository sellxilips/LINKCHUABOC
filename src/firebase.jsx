// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBqmKtvRZFTr_4nYr7vMhgrKT5t0s5UwWY",
  authDomain: "linkproject10-e21e8.firebaseapp.com",
  projectId: "linkproject10-e21e8",
  storageBucket: "linkproject10-e21e8.appspot.com",
  messagingSenderId: "939610544237",
  appId: "1:939610544237:web:d4bb161cc5e4af92de0764"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
