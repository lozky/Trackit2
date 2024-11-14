// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh12ribaDGCDCTjCiigE0uWcPYJrMsCKs",
  authDomain: "trackit-ad1b5.firebaseapp.com",
  projectId: "trackit-ad1b5",
  storageBucket: "trackit-ad1b5.firebasestorage.app",
  messagingSenderId: "979127532677",
  appId: "1:979127532677:web:be3b8b3d6f6ebd2ffb3dec"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;