import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5JT8Di7395gg-xKXmoWnZOso4sSgoOA",
  authDomain: "personal-website-89776.firebaseapp.com",
  projectId: "personal-website-89776",
  storageBucket: "personal-website-89776.appspot.com",
  messagingSenderId: "970206396131",
  appId: "1:970206396131:web:568777cd8a8fa55e0b8fd6",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// export const storage = getStorage();
export const auth = getAuth();
