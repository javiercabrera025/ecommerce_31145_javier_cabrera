// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkpaQsMHMXm2uvgy07KXPOovNn8H_GUjc",
  authDomain: "ecommerce-31145.firebaseapp.com",
  projectId: "ecommerce-31145",
  storageBucket: "ecommerce-31145.appspot.com",
  messagingSenderId: "106090123107",
  appId: "1:106090123107:web:19b3817783050e5d08cd56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
