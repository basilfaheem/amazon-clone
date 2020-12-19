import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGkTj2JrgRENcvLS-aN3GROoWARQCzI84",
    authDomain: "clone-9bd63.firebaseapp.com",
    projectId: "clone-9bd63",
    storageBucket: "clone-9bd63.appspot.com",
    messagingSenderId: "798851394572",
    appId: "1:798851394572:web:bde1a0ce82644524c81229",
    measurementId: "G-NMBCGLN87S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};