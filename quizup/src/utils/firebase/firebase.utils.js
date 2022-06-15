import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWMc_-uAoQ0w4c0EW9_7dE-LLSmg0hVXU",
  authDomain: "quiz-b69ac.firebaseapp.com",
  projectId: "quiz-b69ac",
  storageBucket: "quiz-b69ac.appspot.com",
  messagingSenderId: "570208247148",
  appId: "1:570208247148:web:54a2efff36a26f5503a749",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocref = doc(db, "users", userAuth.uid);

  console.log(userDocref);

  const userSnapshot = await getDoc(userDocref);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocref;
};
