import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxfqj0zqdAthaEQSW_KClH0Z_xYv_69rM",
  authDomain: "linkedin-clone-88ce0.firebaseapp.com",
  projectId: "linkedin-clone-88ce0",
  storageBucket: "linkedin-clone-88ce0.appspot.com",
  messagingSenderId: "645915192509",
  appId: "1:645915192509:web:d842a680377f037079dbd4",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth, firebaseapp };
