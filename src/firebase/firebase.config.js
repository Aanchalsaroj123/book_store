// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd7UTnWpPhOBt6GDYh4K2Zdm6ge14lYR4",
  authDomain: "mern-bookstore-7e2e6.firebaseapp.com",
  projectId: "mern-bookstore-7e2e6",
  storageBucket: "mern-bookstore-7e2e6.appspot.com",
  messagingSenderId: "478533619216",
  appId: "1:478533619216:web:99af7b0d226793d1dfc495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;