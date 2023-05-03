// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQoC1CgnsdgfQDZzBIP1t7EPuvCd9zz0U",
  authDomain: "the-eaters-client.firebaseapp.com",
  projectId: "the-eaters-client",
  storageBucket: "the-eaters-client.appspot.com",
  messagingSenderId: "1098214143344",
  appId: "1:1098214143344:web:202ae1574bf8384e6c4bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;