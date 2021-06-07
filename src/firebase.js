
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyClkzZyRIL1XzEuqIwVgPIDxoH1G3z5los",
    authDomain: "todo-app-cp-9007f.firebaseapp.com",
    projectId: "todo-app-cp-9007f",
    storageBucket: "todo-app-cp-9007f.appspot.com",
    messagingSenderId: "83578919167",
    appId: "1:83578919167:web:238fd7bddee907bfc354ca",
    measurementId: "G-4VZ3R1RJ16"
  });

const db = firebaseApp.firestore();

export default db;