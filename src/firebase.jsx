import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCqfECGF4rGOBIv0UXyzHElBfktkqOlHT8",
  authDomain: "react-notes-794d1.firebaseapp.com",
  projectId: "react-notes-794d1",
  storageBucket: "react-notes-794d1.appspot.com",
  messagingSenderId: "879788581181",
  appId: "1:879788581181:web:eb5f01d3bf99d0901c6554"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")