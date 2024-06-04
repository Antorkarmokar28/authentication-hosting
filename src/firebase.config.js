// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWim-VTdQAJhR3mR8qKRE-1vEfF3RC6AU",
  authDomain: "authentication-hosting.firebaseapp.com",
  projectId: "authentication-hosting",
  storageBucket: "authentication-hosting.appspot.com",
  messagingSenderId: "931409779249",
  appId: "1:931409779249:web:54ed82307438c25c81d310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;