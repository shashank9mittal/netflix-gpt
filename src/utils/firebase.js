// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA51x8qcRzZC-TPsvSPZPBJAj2EZ0-Dfr8",
  authDomain: "nextflix-gpt.firebaseapp.com",
  projectId: "nextflix-gpt",
  storageBucket: "nextflix-gpt.appspot.com",
  messagingSenderId: "418939878085",
  appId: "1:418939878085:web:f0eb3e01feb2e70edd0eac",
  measurementId: "G-RBKMEDX8EP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
