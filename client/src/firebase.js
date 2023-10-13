// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-app.firebaseapp.com",
  projectId: "mern-realestate-app",
  storageBucket: "mern-realestate-app.appspot.com",
  messagingSenderId: "668071162786",
  appId: "1:668071162786:web:87e026b761d4e2b5afb8fb",
  measurementId: "G-RKD54QW50P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
