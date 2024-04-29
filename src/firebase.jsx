import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-VpY4t0OnwZI9N7NHbGKgFukm8Ewkagc",
  authDomain: "pi42suraj.firebaseapp.com",
  projectId: "pi42suraj",
  storageBucket: "pi42suraj.appspot.com",
  messagingSenderId: "641923513129",
  appId: "1:641923513129:web:de094eb13be20df2091538",
  measurementId: "G-Q4HC3B6ZHS"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };