// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnFj2kgBYWVVGPsnsr1YNjIimm6Gvpz0E',
  authDomain: 'audit-music.firebaseapp.com',
  projectId: 'audit-music',
  storageBucket: 'audit-music.appspot.com',
  messagingSenderId: '601332679967',
  appId: '1:601332679967:web:21e07a961b068273949c2a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: process.env.Firebase_apiKey,
// authDomain: process.env.Firebase_authDomain,
// projectId: process.env.Firebase_projectId,
// storageBucket: process.env.Firebase_storageBucket,
// messagingSenderId: process.env.Firebase_messagingSenderId,
// appId: process.env.Firebase_appId,
