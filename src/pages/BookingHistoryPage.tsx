// src/pages/BookingHistoryPage.tsx
import { useEffect, useState } from "react";
import { firestore } from "../services/firebase"; // Import firestore instead of db
import { collection, getDocs, query, where } from "firebase/firestore"; // Firebase Firestore functions

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Assuming we have a user logged in and we can get their ID
        const userId = "some-user-id";  // Replace with actual user ID from auth state
        const bookingsCollection = collection(firestore, "bookings");
        const q = query(bookingsCollection, where("userId", "==", userId));
        
        const querySnapshot = await getDocs(q);
        const bookingsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setBookings(bookingsList);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <p>Booking ID: {booking.id}</p>
              <p>Destination: {booking.destination}</p>
              <p>Date: {booking.timestamp?.toDate().toLocaleString()}</p>
              {/* You can display other booking details here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistoryPage;
