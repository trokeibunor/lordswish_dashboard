// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnsDmU7TQRKQafM8rhloYUk9MqXNmIWg8",
  authDomain: "lordwish-portfolio.firebaseapp.com",
  projectId: "lordwish-portfolio",
  storageBucket: "lordwish-portfolio.appspot.com",
  messagingSenderId: "53871540578",
  appId: "1:53871540578:web:b3af2a243347a8c261143b",
  measurementId: "G-8DB627NP5Q"
};

initializeApp(firebaseConfig);
// const auth = getAuth();

// Initialize Firebase
export  const db = getFirestore();
// const analytics = getAnalytics(app);
