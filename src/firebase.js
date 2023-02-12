import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCk_oF90utjkrihfA2eVvoHVTjRVC5cNIE",
  authDomain: "line-clone-app-5167c.firebaseapp.com",
  projectId: "line-clone-app-5167c",
  storageBucket: "line-clone-app-5167c.appspot.com",
  messagingSenderId: "405847744032",
  appId: "1:405847744032:web:97629d5b3860583ee06645",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
