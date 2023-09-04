// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBivufA4qb7k8DMX9Pe0XCg6EI8hMcW6ZQ",
  authDomain: "chat-app-b3b21.firebaseapp.com",
  projectId: "chat-app-b3b21",
  storageBucket: "chat-app-b3b21.appspot.com",
  messagingSenderId: "793271085111",
  appId: "1:793271085111:web:4d25659b837514d47377b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)