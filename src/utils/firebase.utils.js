// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaXE09rWj9yx4xawIzHDteuVKGS0rHOmE",
  authDomain: "cc-clone-cf8cb.firebaseapp.com",
  projectId: "cc-clone-cf8cb",
  storageBucket: "cc-clone-cf8cb.appspot.com",
  messagingSenderId: "72146461888",
  appId: "1:72146461888:web:d02ed4283cc9b3f73ef925",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Firestore

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  // if user data doesn't exists
  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  // create the document with the data from userAuth in my collection

  // if user data exists

  // return userDoc Ref
  return userDocRef
};
