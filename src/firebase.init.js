// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD_yO6JIIcxivuzx-qg2duFn-zRjRME_Y",
  authDomain: "car-house-4d8d1.firebaseapp.com",
  projectId: "car-house-4d8d1",
  storageBucket: "car-house-4d8d1.appspot.com",
  messagingSenderId: "385659022589",
  appId: "1:385659022589:web:90126d4a5d3e70b345a294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;