export default {
  DB_API: 'AIzaSyB7CxXnJty6vIqepDgKbQgFCFb5INV8bQ4',
  DB_AUTH_URL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
  DB_URL: 'https://m-seven-filmoteka-default-rtdb.europe-west1.firebasedatabase.app',
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7CxXnJty6vIqepDgKbQgFCFb5INV8bQ4",
  authDomain: "m-seven-filmoteka.firebaseapp.com",
  databaseURL: "https://m-seven-filmoteka-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "m-seven-filmoteka",
  storageBucket: "m-seven-filmoteka.appspot.com",
  messagingSenderId: "180628799067",
  appId: "1:180628799067:web:33dc0680a0adf95c08c97e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);