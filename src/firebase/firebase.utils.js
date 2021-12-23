import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDcuezNeXdN2bO70eBFbpOCEm6CuJoWWEc",
  authDomain: "crwn-db-a8770.firebaseapp.com",
  projectId: "crwn-db-a8770",
  storageBucket: "crwn-db-a8770.appspot.com",
  messagingSenderId: "763358762752",
  appId: "1:763358762752:web:157cdf0616c7616e8b85e5",
  measurementId: "G-Z9ETZBP7HN",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
