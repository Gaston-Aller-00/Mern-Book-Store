// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqWZhEvlEuGkI-F9GF-uVyLTklhhWenSc",
  authDomain: "mern-book-inventory-9acc0.firebaseapp.com",
  projectId: "mern-book-inventory-9acc0",
  storageBucket: "mern-book-inventory-9acc0.appspot.com",
  messagingSenderId: "687392603479",
  appId: "1:687392603479:web:c81d981fd48cd1c24d1212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;