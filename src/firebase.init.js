// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiQ4lZSzxXMvAX3qctCgmZFKjHRtHle2w",
  authDomain: "car-parts-588b3.firebaseapp.com",
  projectId: "car-parts-588b3",
  storageBucket: "car-parts-588b3.appspot.com",
  messagingSenderId: "877208203984",
  appId: "1:877208203984:web:dd61b56b63e18f85bca4d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;