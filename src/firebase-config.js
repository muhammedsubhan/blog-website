import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAl1GEQ2LAU9xSBn9c7lnIoWeiRNKC1W4I",
  authDomain: "blog-website-23682.firebaseapp.com",
  projectId: "blog-website-23682",
  storageBucket: "blog-website-23682.appspot.com",
  messagingSenderId: "557686344877",
  appId: "1:557686344877:web:a97c87e61290f307224a24",
  measurementId: "G-J0LCP1052P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
