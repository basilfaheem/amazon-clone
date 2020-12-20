import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // paste your firebaseconfig here.
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};