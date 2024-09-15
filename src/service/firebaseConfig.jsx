// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-f1vItpSNr2HE87LsIW_di6PYzQSmGCo",
  authDomain: "ai-trip-pla.firebaseapp.com",
  projectId: "ai-trip-pla",
  storageBucket: "ai-trip-pla.appspot.com",
  messagingSenderId: "598286000291",
  appId: "1:598286000291:web:02d21f89948ad89e1e5f16",
  measurementId: "G-36QBJ9MWMF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);