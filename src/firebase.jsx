// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC5hGXuajJ1PX1lk2u-21JYFY4j-Glv6qU",
  authDomain: "linkproject3.firebaseapp.com",
  projectId: "linkproject3",
  storageBucket: "linkproject3.appspot.com",
  messagingSenderId: "737279066515",
  appId: "1:737279066515:web:76752e40691531e1ada866"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
