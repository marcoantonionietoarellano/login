import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhuqQIzxD_kHQ21UWlqecZHukr_pqNwMQ",
  authDomain: "web40-8821e.firebaseapp.com",
  projectId: "web40-8821e",
  storageBucket: "web40-8821e.appspot.com",
  messagingSenderId: "862831086847",
  appId: "1:862831086847:web:6bdb4166f38665fbbf90ca"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};