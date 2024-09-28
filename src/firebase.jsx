// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCrK2e10OqAwv7xmaTD_RW4eC5Wu_IEwWI",
  authDomain: "linkproject7.firebaseapp.com",
  projectId: "linkproject7",
  storageBucket: "linkproject7.appspot.com",
  messagingSenderId: "916978258149",
  appId: "1:916978258149:web:370a4789a2d5dd579dc40c"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
