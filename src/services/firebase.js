// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASrpy7DHiamjiQpICpZMR7DpM5a-y3vhI",
  authDomain: "qr-lost.firebaseapp.com",
  projectId: "qr-lost",
  storageBucket: "qr-lost.firebasestorage.app",
  messagingSenderId: "892710166443",
  appId: "1:892710166443:web:4e4888bb1bb3c80a673cee",
  measurementId: "G-SJ2B29LE6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
