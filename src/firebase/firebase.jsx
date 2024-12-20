//First after create your project you need to use **
// npm install firebase to create your app **
// Then get the firebase config and set into your project **

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration **********
const firebaseConfig = {
  apiKey: "AIzaSyDlZ2mmtq49CuwR839mweGdmVsMcHPWsEo",
  authDomain: "login-auth-742fd.firebaseapp.com",
  projectId: "login-auth-742fd",
  storageBucket: "login-auth-742fd.firebasestorage.app",
  messagingSenderId: "76293970932",
  appId: "1:76293970932:web:7fc6ed3a1c9a7cbde2f7a1"
};
//********** 


// Initialize Firebase 
// Apply your Firebase configuration to initialize Firebase services in your app. 
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// This initializes the authentication service, which will handle user login and sign-up.
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;