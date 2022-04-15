import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQxPsBXAyOivyK2DQZ2cR4gpSWZFI592Q",
  authDomain: "admindash-63e4c.firebaseapp.com",
  projectId: "admindash-63e4c",
  storageBucket: "admindash-63e4c.appspot.com",
  messagingSenderId: "1001141115197",
  appId: "1:1001141115197:web:e767065a2639e8345bcd54",
  measurementId: "G-SQJJ7PEF8Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
export const auth = getAuth();