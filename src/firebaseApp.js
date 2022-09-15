import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAfzT85L1oBtk2a37EZTjXTp4cfBNLKfus",
    authDomain: "reactcoderniz.firebaseapp.com",
    projectId: "reactcoderniz",
    storageBucket: "reactcoderniz.appspot.com",
    messagingSenderId: "12709099025",
    appId: "1:12709099025:web:b8dca1d201c0336557e3b0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

