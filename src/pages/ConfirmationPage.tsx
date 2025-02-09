// src/pages/ConfirmationPage.tsx
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  doc, getDoc } from "firebase/firestore";
import { firestore } from "../services/firebase";

const ConfirmationPage = () => {
  const { bookingId } = useParams(); // Retrieve booking ID from URL
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      const bookingRef = doc(firestore, "bookings", bookingId!);
      const bookingDoc = await getDoc(bookingRef);

      if (bookingDoc.exists()) {
        setBookingData(bookingDoc.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchBooking();
  }, [bookingId]);

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-semibold text-center">Booking Confirmation</h2>
      <div className="mt-6">
        <div className="mb-4">
          <strong className="block text-lg">Booking ID:</strong>
          <p>{bookingId}</p>
        </div>

        <div className="mb-4">
          <strong className="block text-lg">Destination:</strong>
          <p>{bookingData.destination}</p>
        </div>

        <div className="mb-4">
          <strong className="block text-lg">Travel Date:</strong>
          <p>{bookingData.travelDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
