import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCw4BoiDEF7XXmmfoYx4EYD9X8rSg1baQc",
    authDomain: "login-f8d82.firebaseapp.com",
    projectId: "login-f8d82",
    storageBucket: "login-f8d82.appspot.com",
    messagingSenderId: "1031242334740",
    appId: "1:1031242334740:web:b4a88168a0aae7ddec5d01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;