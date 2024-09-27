// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDm2bvoWUQ0uiI_LX19MsohLLormfMpK4g",
  authDomain: "linkproject6-23bda.firebaseapp.com",
  projectId: "linkproject6-23bda",
  storageBucket: "linkproject6-23bda.appspot.com",
  messagingSenderId: "303064391590",
  appId: "1:303064391590:web:9d13e4801f5dd6d4aa7967"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
