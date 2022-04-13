import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAV8KbrBMv06Dh6x6tYkm7VdMdQ7rgaJwg",
  authDomain: "saidovpro.firebaseapp.com",
  projectId: "saidovpro",
  storageBucket: "saidovpro.appspot.com",
  messagingSenderId: "647759786470",
  appId: "1:647759786470:web:699d0bffacddca7660e627",
  measurementId: "G-PBR953122K",
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebaseConfig;
