"use client";


import Link from "next/link";
import Image from "next/image"; // Import Image for optimization
import { useState, useEffect } from "react"; // For preloader spinner

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate image loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
          <div className="loader border-t-4 border-red-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      <section className="relative text-center bg-cover bg-center h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/images/bar.webp"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority // Ensures high-priority loading
          className="-z-10"
        />

        {/* Overlay Content */}
        <div className="bg-black bg-opacity-0 text-white p-6 rounded max-w-md z-10">
          <h1 className="text-4xl font-bold">Hotel Helmers</h1>
          <p className="text-lg mt-2">Comfort and luxury at its finest!</p>

          {/* Book Now Button */}
          <Link href="/book">
            <button className="mt-4 bg-red-500 px-10 py-2 text-lg font-semibold rounded hover:bg-red-600 transition-colors">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* Section Below the Hero */}
      <section className="bg-gray-900 text-white py-10 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Text Section */}
          <div>
            <h2 className="text-green-400 text-lg font-semibold">Luxury Redefined</h2>
            <h3 className="text-3xl font-bold mt-2">Experience the Best in Abuja</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Welcome! Here, we don't do the conventional; we do fun and loyalty...
              Known in the heart of Abuja for spaces, services, food, and drinks
              that bring the magic. If you're a fan of stylish hotels with a true
              tourist experience, you'll be right at home with us.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Hotel Helmers is the perfect destination where sophistication, comfort,
              and quality service are intertwined. Enjoy exceptional service and a
              host of exceptional amenities.
            </p>

            {/* Get in Touch Button */}
            <Link href="/contact">
              <span className="mt-6 inline-block text-lg font-semibold underline hover:text-red-500 transition-colors">
                Get in touch
              </span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/hero2.webp"
              alt="Hotel interior"
              layout="fill"
              objectFit="cover"
              priority // Ensures high-priority loading
              className="rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
