// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmaXYpDUUnMWu-ERN0t6nuNljVdBMkkxE",
  authDomain: "dragon-news-6f972.firebaseapp.com",
  projectId: "dragon-news-6f972",
  storageBucket: "dragon-news-6f972.firebasestorage.app",
  messagingSenderId: "143764759143",
  appId: "1:143764759143:web:4a26ec4ffef5c1fe602ac2",
  measurementId: "G-NDHZ0WNBTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;