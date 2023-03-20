// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firestore utils
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgFQ4woskvu6Erq_P_4BKcYJOnbGHUsEk",
  authDomain: "my-blog-38959.firebaseapp.com",
  projectId: "my-blog-38959",
  storageBucket: "my-blog-38959.appspot.com",
  messagingSenderId: "164934440621",
  appId: "1:164934440621:web:afeccfa8eab3a85189d824",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// db points to datbase in firebase
export const db = getFirestore(firebaseApp);

interface IUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

// doc takes 2 parameters, the db collection and the ID of the document
export const createUserDocumentFromAuth = async (userAuth: IUser) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data doesn't exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user.");
    }
  }
  // if user data exists
  return userDocRef;
  // return userDocRef
};
