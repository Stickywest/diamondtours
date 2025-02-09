// src/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ5g9_ihUeOOjie34PCjPpoZGpybRR3zk",
  authDomain: "hamisha-epic-tours.firebaseapp.com",
  projectId: "hamisha-epic-tours",
  storageBucket: "hamisha-epic-tours.firebasestorage.app",
  messagingSenderId: "549911979761",
  appId: "1:549911979761:web:e73484fa23b170b638eb50",
  measurementId: "G-BDNMC52ZR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);  // Exporting auth
export const firestore = getFirestore(app); // Exporting Firestore instance

// Function to add booking to Firestore
export const addBookingToFirestore = async (userId: string, bookingData: any) => {
  const bookingsCollection = collection(firestore, "bookings");
  
  try {
    const docRef = await addDoc(bookingsCollection, {
      userId,
      ...bookingData,
      timestamp: new Date(),
    });
    return docRef.id;  // Return the document ID of the new booking
  } catch (e) {
    console.error("Error adding booking: ", e);
    throw new Error("Error adding booking to Firestore.");
  }
};

// Exporting other Firebase services as needed
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
