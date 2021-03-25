import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCt0MsvLBhxtAEs2U7AmZWV49LE-wlbTos",
  authDomain: "clothing-db-f0ca5.firebaseapp.com",
  projectId: "clothing-db-f0ca5",
  storageBucket: "clothing-db-f0ca5.appspot.com",
  messagingSenderId: "267466100378",
  appId: "1:267466100378:web:f37fa6cbf200d18cbf9923",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
