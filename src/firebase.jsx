// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB1ThEvZZjWTtgZfzx0RQa2WLCZCxQdRmc",
  authDomain: "linkproject12-23497.firebaseapp.com",
  projectId: "linkproject12-23497",
  storageBucket: "linkproject12-23497.appspot.com",
  messagingSenderId: "643886990675",
  appId: "1:643886990675:web:996ff5170107a8ba624da6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
