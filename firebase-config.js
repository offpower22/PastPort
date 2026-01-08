// Firebase Configuration and Initialization
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvpg6YMJeQbRXoGe-FHhJ-R3iPJOXrTJQ",
  authDomain: "pastport-new.firebaseapp.com",
  projectId: "pastport-new",
  storageBucket: "pastport-new.firebasestorage.app",
  messagingSenderId: "259343247400",
  appId: "1:259343247400:web:c4dd577918368e1d22ed1d",
  measurementId: "G-DH0X6942JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db };
