import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChcsFpF9aqziP1-uMTV1cHd_WCNdUac24",
  authDomain: "proyecto-final-3126f.firebaseapp.com",
  projectId: "proyecto-final-3126f",
  storageBucket: "proyecto-final-3126f.appspot.com",
  messagingSenderId: "350683161520",
  appId: "1:350683161520:web:3e77e046cfa4cfd93dac75",
  measurementId: "G-XTJ2S6RQBN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
