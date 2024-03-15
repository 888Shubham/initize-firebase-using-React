// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB0mOF5cro4jFwu7hhfoeS2RbrfNyycoU",
  authDomain: "blogging-app-c28d3.firebaseapp.com",
  projectId: "blogging-app-c28d3",
  storageBucket: "blogging-app-c28d3.appspot.com",
  messagingSenderId: "935291045446",
  appId: "1:935291045446:web:dac67b6433b1b04347ec47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
