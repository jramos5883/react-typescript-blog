// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Firestore utils
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";

//testing
import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";

import { ICreatePostForm } from "../../components/createPosts-form/createPosts-form.component";

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
export const createUserDocumentFromAuth = async (
  userAuth: IUser,
  additionalInformation = {}
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error: any) {
      console.log("Error creating the user.", error.message);
    }
  }
  // if user data exists
  return userDocRef;
  // return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// setting up CRUD functions for firestore below

// post collection ref
export const postCollectionRef = collection(db, "posts");

// get collection data

interface IPost {
  id: string;
  [key: string]: any;
}

getDocs(postCollectionRef)
  .then((snapshot) => {
    let posts: IPost[] = [];
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
    console.log(posts);
  })
  .catch((err) => {
    console.log(err.message);
  });

// displaying database posts

export const usePosts = () => {
  const [posts, setPosts] = useState<ICreatePostForm[]>([]);

  useEffect(() => {
    const q = query(postCollectionRef, orderBy("publicationDate", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts: ICreatePostForm[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        fetchedPosts.push({
          title: data.title,
          image: data.image,
          content: data.content,
          publicationDate: data.publicationDate.toDate(),
        });
      });
      setPosts(fetchedPosts);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return posts;
};
