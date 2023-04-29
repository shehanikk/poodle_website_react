import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV95Rp5dY648WOqwn3zJ5mJal5emjQXgk",
  authDomain: "poodle-application.firebaseapp.com",
  projectId: "poodle-application",
  storageBucket: "poodle-application.appspot.com",
  messagingSenderId: "849763827579",
  appId: "1:849763827579:web:ca13974f3d3e97578587de",
  measurementId: "G-KYSTH9TJBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();