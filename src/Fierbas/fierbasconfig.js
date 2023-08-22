// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Fixed import
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMv7t-A_-6kWDLb968RNHIWMuBZpfeSvk",
  authDomain: "e-comp-b927d.firebaseapp.com",
  projectId: "e-comp-b927d",
  storageBucket: "e-comp-b927d.appspot.com",
  messagingSenderId: "886757823955",
  appId: "1:886757823955:web:0be0ea6c36c7041b99cb26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app); // Fixed function name
