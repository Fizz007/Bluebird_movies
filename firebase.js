import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDHxYSzp87uPZfqQO4R3z5vKP7qIxABwlE",
  authDomain: "bluebird-6bddd.firebaseapp.com",
  projectId: "bluebird-6bddd",
  storageBucket: "bluebird-6bddd.appspot.com",
  messagingSenderId: "996964255707",
  appId: "1:996964255707:web:70c970ec0127252b9fc9fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
