import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvEe2kiR5u-c30eLpE5tFG6zo0hV0CKRk",
  authDomain: "blogzinho-f617c.firebaseapp.com",
  projectId: "blogzinho-f617c",
  storageBucket: "blogzinho-f617c.appspot.com",
  messagingSenderId: "301516535900",
  appId: "1:301516535900:web:e236aa45493fa943304e99"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };