"use client";

import React from "react";

const HorizontalScrollSection = () => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-4xl font-bold text-center py-8">Our Highlights</h1>
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide relative">
        {/* Section 1 */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-[80vh] snap-start px-6 relative">
          <div className="absolute inset-0 bg-gray-800 rounded-xl shadow-xl transform translate-y-6 translate-x-6 z-[-10]"></div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/hero.jpeg"
              alt="Our Story"
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-sm mt-2">
                Step into the narrative of Hotel Helmers, a tale deeply intertwined
                with a passion for excellence and luxury.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-[80vh] snap-start px-6 relative">
          <div className="absolute inset-0 bg-gray-800 rounded-xl shadow-xl transform translate-y-6 translate-x-6 z-[-10]"></div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/hero.jpeg"
              alt="Our Mission"
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-sm mt-2">
                At Hotel Helmers, our mission transcends ordinary hospitality,
                creating memorable experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-[80vh] snap-start px-6 relative">
          <div className="absolute inset-0 bg-gray-800 rounded-xl shadow-xl transform translate-y-6 translate-x-6 z-[-10]"></div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/hero.jpeg"
              alt="Our Vision"
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-sm mt-2">
                A future where Hotel Helmers remains a symbol of luxury and
                innovation in hospitality.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
