// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXLnDPAVD3UL05Ee-QmuY7NXqXwOvANYo",
    authDomain: "react-cac.firebaseapp.com",
    projectId: "react-cac",
    storageBucket: "react-cac.appspot.com",
    messagingSenderId: "970377906113",
    appId: "1:970377906113:web:3991a11ce2519360205140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);