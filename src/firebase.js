import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3QuGD1RX7vPFZvVRtsxhzHbgS0RPXBs0",
  authDomain: "react-authentication-368ba.firebaseapp.com",
  projectId: "react-authentication-368ba",
  storageBucket: "react-authentication-368ba.appspot.com",
  messagingSenderId: "736405526636",
  appId: "1:736405526636:web:10995860e39c688701e049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);