// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// This is a template firebase app, please replace with your if your app use authentication or remove.
const firebaseConfig = {
  apiKey: "AIzaSyB35ed0S0qFchmgVEq0DebjGeqReFsFifk",
  authDomain: "mavuploads.firebaseapp.com",
  projectId: "mavuploads",
  storageBucket: "mavuploads.appspot.com",
  messagingSenderId: "502647937837",
  appId: "1:502647937837:web:565fc49163c5fe22e2d1a4",
  measurementId: "G-2QSHBM4VLZ"
};


// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const firebase_storage = getStorage(app);
const firebase_auth = getAuth(app);

export {app, analytics, firestore, firebase_storage, firebase_auth}