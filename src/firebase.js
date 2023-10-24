import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXgQJpXxbL4rTxCngUZNrq5Q0kRX6IVHk",
    authDomain: "nanohertz-book.firebaseapp.com",
    projectId: "nanohertz-book",
    storageBucket: "nanohertz-book.appspot.com",
    messagingSenderId: "132901523738",
    appId: "1:132901523738:web:9fea97fd2d1d460e2fdca3"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);