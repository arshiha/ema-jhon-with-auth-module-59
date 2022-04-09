// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsVHKPTzMmuLm4DAfQCt8fyeNn4BZr1jU",
  authDomain: "ema-jhon-simple-9a762.firebaseapp.com",
  projectId: "ema-jhon-simple-9a762",
  storageBucket: "ema-jhon-simple-9a762.appspot.com",
  messagingSenderId: "15117564214",
  appId: "1:15117564214:web:3193b78bc2dfcd73f21b97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
