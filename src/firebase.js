// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWpvywvB8foxopGXla3k85vhMe-tclvRA",
  authDomain: "appchat-d7a2a.firebaseapp.com",
  projectId: "appchat-d7a2a",
  storageBucket: "appchat-d7a2a.appspot.com",
  messagingSenderId: "173949718864",
  appId: "1:173949718864:web:c4a7a8f6dc367fa9625c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)


