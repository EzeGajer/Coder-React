import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA0RBUL-Bc2cIpNUKiZA9ecRtiKHvF-lhI",
  authDomain: "fb-curso-react.firebaseapp.com",
  projectId: "fb-curso-react",
  storageBucket: "fb-curso-react.appspot.com",
  messagingSenderId: "657165869431",
  appId: "1:657165869431:web:51275749af8dfd14b74172"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

