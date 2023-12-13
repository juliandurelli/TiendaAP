// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
import {getAuth, initializeAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcDrSnbsMOFnGyrTCy8SsxOa1ZIx_fgOM",
  authDomain: "tiendaap-6627e.firebaseapp.com",
  projectId: "tiendaap-6627e",
  storageBucket: "tiendaap-6627e.appspot.com",
  messagingSenderId: "925669754079",
  appId: "1:925669754079:web:7c2e5bf4e86709234fd56a"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore()
export const dbis = getAuth(initializeApp(firebaseConfig))
