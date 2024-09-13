// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjR09BfuONENGhMd0-tnolvMWm_BVnQUU",
  authDomain: "auth-private-route-e4701.firebaseapp.com",
  projectId: "auth-private-route-e4701",
  storageBucket: "auth-private-route-e4701.appspot.com",
  messagingSenderId: "793876763397",
  appId: "1:793876763397:web:bdd3df3e9e1e6d72639d6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
