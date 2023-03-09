import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu6h13PRuSF8NAmDLyBZkPYxTo4EqorG8",
  authDomain: "chatwave-371a8.firebaseapp.com",
  projectId: "chatwave-371a8",
  storageBucket: "chatwave-371a8.appspot.com",
  messagingSenderId: "278982803376",
  appId: "1:278982803376:web:1f2eaf6255ad5a748c6075",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
