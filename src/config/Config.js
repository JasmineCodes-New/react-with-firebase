import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBQRxTXKbLnRrTs7LHr5RtK7n1IJ5U-58E",
  authDomain: "react-with-firebase-881c3.firebaseapp.com",
  projectId: "react-with-firebase-881c3",
  storageBucket: "react-with-firebase-881c3.appspot.com",
  messagingSenderId: "662200781234",
  appId: "1:662200781234:web:3b7dc8962270165b797cab",
  measurementId: "G-RRJ3EQ716F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();

export { auth, db, storage }