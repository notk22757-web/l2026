import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfGFz0AsArdWCVYnMFEwggAK-PQBjuor0",
  authDomain: "cbttest-d46ea.firebaseapp.com",
  projectId: "cbttest-d46ea",
  storageBucket: "cbttest-d46ea.firebasestorage.app",
  messagingSenderId: "881028247098",
  appId: "1:881028247098:web:06e5dd2c3f884eb7c80f03",
  measurementId: "G-BXJST6GRDT"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Compatibility wrapper so app.js can use db.collection(...).add(...)
window.db = {
  collection(name) {
    return {
      add(data) {
        return addDoc(collection(firestore, name), data);
      }
    };
  }
};