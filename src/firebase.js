import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA4UJgBcJ7Mkp0K3WC9ocLCw2keMqoo5Mk",
    authDomain: "netflix-89996.firebaseapp.com",
    projectId: "netflix-89996",
    storageBucket: "netflix-89996.appspot.com",
    messagingSenderId: "283259047275",
    appId: "1:283259047275:web:0124b66f0051764653902e",
    measurementId: "G-DLJQV0T00G"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export const auth=firebase.auth();
export default db;