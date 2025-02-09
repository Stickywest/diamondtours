// src/pages/BookingPage.tsx
import React, { useState } from "react";
import { auth, firestore } from "../services/firebase"; // Use firestore instead of db
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!destination || !startDate || !endDate) {
      setFormError("Please fill in all required fields.");
      return false;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setFormError("End date cannot be before start date.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setFormError(""); // Reset any previous error messages

    try {
      const user = auth.currentUser;

      if (user) {
        // Add booking data to Firestore
        await addDoc(collection(firestore, "bookings"), {
          userId: user.uid,
          destination,
          startDate,
          endDate,
          specialRequests,
          status: "Pending", // Booking status
          bookingId: `${user.uid}-${Date.now()}`, // Unique booking ID
        });

        alert("Booking successfully created!");
        // Reset the form fields
        setDestination("");
        setStartDate("");
        setEndDate("");
        setSpecialRequests("");
        navigate(`/confirmation/${user.uid}-${Date.now()}`);
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error creating your booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Book Your Trip</h2>
      {formError && (
        <div className="mb-4 text-red-600 text-center">
          <p>{formError}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C56D00]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C56D00]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C56D00]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="specialRequests" className="block text-gray-700">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C56D00]"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#C56D00] text-white font-semibold rounded-md hover:bg-[#105A89] transition duration-300"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
