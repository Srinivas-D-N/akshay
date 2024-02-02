// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_-Ycpam53lCngxSaD49hYzdQ1Y88kv8o",
  authDomain: "netflixgpt-6c884.firebaseapp.com",
  projectId: "netflixgpt-6c884",
  storageBucket: "netflixgpt-6c884.appspot.com",
  messagingSenderId: "924883819563",
  appId: "1:924883819563:web:fb86da0fc69ac4317f5e6e",
  measurementId: "G-6Q9MFZN970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();