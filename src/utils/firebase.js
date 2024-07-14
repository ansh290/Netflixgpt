// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCUuX2ITuefX7VvC4yHlmgTZx6XELljAiU",
  authDomain: "netflixgpt-6f62e.firebaseapp.com",
  projectId: "netflixgpt-6f62e",
  storageBucket: "netflixgpt-6f62e.appspot.com",
  messagingSenderId: "537120661906",
  appId: "1:537120661906:web:4bba36cf095c09e1af614b",
  measurementId: "G-50C8NQJZKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
