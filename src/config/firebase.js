import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAvZwQEpf0GtuWeLE4INinLIw2GfQCJ8jA",
  authDomain: "employee-engagement-platform.firebaseapp.com",
  projectId: "employee-engagement-platform",
  storageBucket: "employee-engagement-platform.appspot.com",
  messagingSenderId: "147000404296",
  appId: "1:147000404296:web:5be355b23259dc956dab7d",
  measurementId: "G-Q4ZFJQ3PQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);