// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTL5ig3Swz-Qd51W4BK8hU_S8DzJfSwQo",
  authDomain: "angular-3195c.firebaseapp.com",
  projectId: "angular-3195c",
  storageBucket: "angular-3195c.appspot.com",
  messagingSenderId: "257107507656",
  appId: "1:257107507656:web:de880d0d8b5cd45d59e8fd",
  measurementId: "G-E91C95TPYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);