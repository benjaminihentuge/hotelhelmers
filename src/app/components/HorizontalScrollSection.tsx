"use client";

import React from "react";

const HorizontalScrollSection = () => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-4xl font-bold text-center p-8">Our Highlights</h1>
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {/* Section 1 */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-[80vh] snap-start p-4">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/section1.jpg"
              alt="Our Story"
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-sm mt-2">
                Step into the narrative of Hotel 2020, a tale deeply intertwined
                with a passion for excellence and luxury.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-[80vh] snap-start p-4">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/section2.jpg"
              alt="Our Mission"
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-sm mt-2">
                At Hotel 2020, our mission transcends ordinary hospitality,
                creating memorable experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-[80vh] snap-start p-4">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/section3.jpg"
              alt="Our Vision"
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-sm mt-2">
                A future where Hotel 2020 remains a symbol of luxury and
                innovation in hospitality.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-[80vh] snap-start p-4">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/section4.jpg"
              alt="Our Values"
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Our Values</h2>
              <p className="text-sm mt-2">
                Integrity, innovation, and exceptional service define who we are
                at Hotel 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
