"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { FaCalendarAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const BookingPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages
  const [formData, setFormData] = useState({
    accommodation: "asokoro",
    checkInDate: "",
    checkOutDate: "",
    adults: "1",
    children: "0",
    email: "",
    phone: "",
    roomType: "suite1",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage(null);

    // Check for missing required fields
    const { checkInDate, checkOutDate, email, phone, termsAccepted } = formData;
    if (!checkInDate || !checkOutDate || !email || !phone) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!termsAccepted) {
      setErrorMessage("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      console.log("Booking submitted successfully");

      // Show success popup
      setShowPopup(true);

      // Redirect to a confirmation page after a delay
      setTimeout(() => {
        setShowPopup(false);
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Error submitting booking:", error);
      setErrorMessage("There was an error submitting your booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient text-white flex justify-center items-center">
      <div className="container mx-auto px-4 md:max-w-4xl mb-10 mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-in">
          {/* Left Section: Booking Form */}
          <div className="bg-glass p-4 md:p-6 rounded-xl shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Book Your Stay</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Accommodation Type */}
              <div>
                <p className="text-sm font-medium mb-2">Accommodation Type</p>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accommodation"
                    value="asokoro"
                    className="mr-2"
                    checked={formData.accommodation === "asokoro"}
                    onChange={handleChange}
                  />
                  Asokoro
                </label>
              </div>

              {/* Check-In and Check-Out Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">Check-In</label>
                  <FaCalendarAlt className="absolute mt-3 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">Check-Out</label>
                  <FaCalendarAlt className="absolute mt-3 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                  />
                </div>
              </div>

              {/* Guests Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Adults</label>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full bg-gray-800 p-2 rounded text-gray-200"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Children</label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full bg-gray-800 p-2 rounded text-gray-200"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                />
              </div>

              {/* Room/Suite Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Room/Suite</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full bg-gray-800 p-2 rounded text-gray-200"
                >
                  <option value="suite1">Standard Room</option>
                  <option value="suite2">King Room</option>
                  <option value="suite3">Queens Room</option>
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mr-2"
                />
                <p className="text-sm text-gray-400">
                  You agree to the terms & conditions of staying at Hotel Helmers.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-red-500 text-black px-4 py-2 rounded font-medium w-full animate-pulse"
              >
                Submit
              </button>
            </form>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 mt-4">{errorMessage}</div>
            )}
          </div>

          {/* Right Section: Accommodation Card */}
          <div className="bg-glass h-[400px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="relative h-full">
              <img
                src="/images/hero.jpeg"
                alt="Hotel"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/20 z-10 p-4 rounded-b">
                <h3 className="text-lg md:text-xl font-bold">Asokoro</h3>
                <span className="text-sm text-yellow-400">Hotel</span>
                <p className="text-gray-400 text-sm mt-2">
                  Plot 123 Asokoro Crescent, Abuja
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Popup */}
      {showPopup && (
        <div
          className="fixed right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in"
          style={{ top: '80px', zIndex: 9999 }}  // High z-index to ensure it's on top
        >
          Booking Confirmed!
        </div>
      )}

    </div>
  );
};

export default BookingPage;
