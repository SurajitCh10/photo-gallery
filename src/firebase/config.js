import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDoC7U3STOFFT_hCYbrQRPceZJPmxvsGls",
    authDomain: "dhrishya.firebaseapp.com",
    projectId: "dhrishya",
    storageBucket: "dhrishya.appspot.com",
    messagingSenderId: "175146521269",
    appId: "1:175146521269:web:04abe86cdfafb19962a4fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{projectStorage, projectFirestore, timestamp };