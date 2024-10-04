// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBb7tRlg37CF0di0othZVtODdUzO1Muhp0",
  authDomain: "linkproject-eb971.firebaseapp.com",
  projectId: "linkproject-eb971",
  storageBucket: "linkproject-eb971.appspot.com",
  messagingSenderId: "813807338467",
  appId: "1:813807338467:web:a335d5e1c3cc09069456d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
