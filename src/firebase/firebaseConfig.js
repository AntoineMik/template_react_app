// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvoIDqy8aApMfVPmq7rN6TKt7Qp-4UH1M",
    authDomain: "mavboutique-latest.firebaseapp.com",
    projectId: "mavboutique-latest",
    storageBucket: "mavboutique-latest.appspot.com",
    messagingSenderId: "52607487854",
    appId: "1:52607487854:web:76bdc28ce8c9adb1cd3b7f",
    measurementId: "G-EYD5N4PCL6"
  };


// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const firebase_storage = getStorage(app);
const firebase_auth = getAuth(app);

export {app, analytics, firestore, firebase_storage, firebase_auth}