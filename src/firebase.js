// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUMCLx_AyC3Roh__eEcOnk4T-61KZpJ3Q",
  authDomain: "jaintoolsindia-jti.firebaseapp.com",
  databaseURL: "https://jaintoolsindia-jti-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jaintoolsindia-jti",
  storageBucket: "jaintoolsindia-jti.appspot.com",
  messagingSenderId: "594754080992",
  appId: "1:594754080992:web:fef213e7e9ce73c1004085",
  measurementId: "G-66392QZ9D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);