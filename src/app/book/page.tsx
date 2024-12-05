"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const BookingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Close the popup after 3 seconds
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
                    defaultChecked
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
                      className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Check-Out</label>
                    <FaCalendarAlt className="absolute mt-3 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                    />
                  </div>
                </div>


              {/* Guests Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Adults</label>
                  <select className="w-full bg-gray-800 p-2 rounded text-gray-200">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Children</label>
                  <select className="w-full bg-gray-800 p-2 rounded text-gray-200">
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
                  placeholder="Your Email Address"
                  className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full bg-gray-800 p-2 pl-10 rounded text-gray-200"
                />
              </div>

              {/* Room/Suite Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Room/Suite
                </label>
                <select className="w-full bg-gray-800 p-2 rounded text-gray-200">
                  <option value="suite1">Standard Room</option>
                  <option value="suite2">King Room</option>
                  <option value="suite3">Queens Room</option>
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input type="checkbox" className="mr-2" />
                <p className="text-sm text-gray-400">
                  You agree to the terms & conditions of staying at Hotel
                  Helmers.
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
          </div>

          {/* Right Section: Accommodation Card */}
          <div className="bg-glass h-[400px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="relative h-full">
              {/* Hotel Image */}
              <img
                src="/images/hero.jpeg"
                alt="Hotel"
                className="w-full h-full object-cover rounded"
              />
              {/* Address Overlay */}
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
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
          Booking Confirmed!
        </div>
      )}
    </div>
  );
};

export default BookingPage;
