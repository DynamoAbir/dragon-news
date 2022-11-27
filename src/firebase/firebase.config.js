// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8mYJCa2A63SaIPBPUeIdZ-jkW92EkRRo",
    authDomain: "dragon-news-8c17b.firebaseapp.com",
    projectId: "dragon-news-8c17b",
    storageBucket: "dragon-news-8c17b.appspot.com",
    messagingSenderId: "303785948133",
    appId: "1:303785948133:web:23f45a39af09f8b7bbb50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;