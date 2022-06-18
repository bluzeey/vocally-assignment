// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY1rQAFKikrrQP-toRK-BKodIatUnd7dU",
  authDomain: "vocally-assignment.firebaseapp.com",
  projectId: "vocally-assignment",
  storageBucket: "vocally-assignment.appspot.com",
  messagingSenderId: "166219061503",
  appId: "1:166219061503:web:dcb9d57582e80c49a4d4ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();