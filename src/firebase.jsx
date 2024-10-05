// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBaKcFVWdXSXTKvwDnUBb9N_AOb8naB9CU",
  authDomain: "linkproject15.firebaseapp.com",
  projectId: "linkproject15",
  storageBucket: "linkproject15.appspot.com",
  messagingSenderId: "594788245173",
  appId: "1:594788245173:web:ef1d3a47fb49ae814d68fc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
