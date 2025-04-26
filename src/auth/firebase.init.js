// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD970lIo-TKMOGDyuA05GnzMX5Bx8Cceto",
  authDomain: "ecommerce-c15f0.firebaseapp.com",
  projectId: "ecommerce-c15f0",
  storageBucket: "ecommerce-c15f0.firebasestorage.app",
  messagingSenderId: "458287675124",
  appId: "1:458287675124:web:b7158a3455caa20e6c90a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);