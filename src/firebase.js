import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmffZh5qMlIak7NxAUfH6Ky92TRX-D-s8",
  authDomain: "linkedin-clone-886a6.firebaseapp.com",
  projectId: "linkedin-clone-886a6",
  storageBucket: "linkedin-clone-886a6.appspot.com",
  messagingSenderId: "644313032558",
  appId: "1:644313032558:web:d14e9a8961ae3a70b9c37f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
