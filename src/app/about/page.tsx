"use client";

import React from "react";
import Image from "next/image";
import HorizontalScrollSection from '@/app/components/HorizontalScrollSection';

const AboutPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Image with Parallax Effect */}
      <section className="w-full h-[75vh] relative">
        <Image
          src="/images/contacthero2.jpg"
          alt="Hotel Helmers Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Welcome to Hotel Helmers</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-6">ABOUT US</h1>
        <p className="mb-4">
          Hotel Helmers is luxuriously built and tastefully furnished hotel
          standing head and shoulders above others in the hospitality industry.
          The designs of our rooms are simple yet sophisticated enough to meet
          up with contemporary expectations. The soundproof doors, spacious
          balconies in all our rooms, and the feelings of being in one will
          sweep you off your feet. Our rooms provide you with the right ambiance
          and pleasure you have only dreamt of. Come experience a thrilling
          moment at Hotel Helmers.
        </p>
        <p>
          More than just a hotel. It's a way of life! The perfect blend of
          heritage, sophistication, and relaxation awaits you at Hotel Helmers. We
          pride ourselves on service excellence, great amenities, and African
          heritage, establishing Hotel Helmers as a true Nigerian favorite.
        </p>
      </section>

      {/* Other sections */}
      <div>
        <HorizontalScrollSection />
      </div>
    </div>
  );
};

export default AboutPage;
