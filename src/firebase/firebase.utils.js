import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBegmBECajpPZoZzI4mqdYeC8XjYmwR6UE",
  authDomain: "ecom78-129c2.firebaseapp.com",
  projectId: "ecom78-129c2",
  storageBucket: "ecom78-129c2.appspot.com",
  messagingSenderId: "573022668325",
  appId: "1:573022668325:web:83c645b1d20b0d7b6221cc",
  measurementId: "G-F4E9RH0RY5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};



firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;
