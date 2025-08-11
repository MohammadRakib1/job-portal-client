// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// VITE_apiKey=AIzaSyCePMGlFCodKf6v_Xy8lRRETjYgSHz96kc
// VITE_authDomain=job-portal-f681f.firebaseapp.com
// VITE_projectId=job-portal-f681f
// VITE_storageBucket=job-portal-f681f.firebasestorage.app
// VITE_messagingSenderId=368453007653
// VITE_appId=1:368453007653:web:e4c95fc0d92075490002cc