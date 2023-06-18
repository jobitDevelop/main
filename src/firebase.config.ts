import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPApfs2TqhsfjpwWRhf3v_q5umBS6r9mY',
  authDomain: 'jobit-afe72.firebaseapp.com',
  projectId: 'jobit-afe72',
  storageBucket: 'jobit-afe72.appspot.com',
  messagingSenderId: '1014413488731',
  appId: '1:1014413488731:web:0951fe20e81231fcd7c57e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
