"use client";

import React, { useEffect } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaDribbble,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

interface SocialMediaLinkProps {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ label, icon, href }) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-4 hover:scale-110 transition-transform duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

const ContactPage = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Image with Parallax Effect */}
              <section
          className="w-full h-[75vh] relative hero"
          data-aos="fade-down"
        >
          <Image
            src="/images/contacthero2.webp"
            alt="Contact Hero"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw"
          />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Get in Touch with Us</h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="text-center py-32" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Contact The Reception</h2>
        <p className="text-gray-400 mt-2">
          For assistance, call us at +234 813 948 6554 or email us at{" "}
          <a href="mailto:hotelhelmers@gmail.com" className="text-red-500">
            hotelhelmers@gmail.com
          </a>
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="tel:+2347049222264"
            className="bg-gray-800 p-4 rounded hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            Phone
          </a>
          <a
            href="mailto:reservations@hotel2020.com"
            className="bg-gray-800 p-4 rounded hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            Email
          </a>
          <a
            href="https://instagram.com/hotel2020abj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 rounded hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Contact Form & Social Media Links Section */}
      <section className="py-16 px-4 bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-black p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold text-gray-300 mb-4 text-center">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-700 text-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-700 text-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Message"
                className="w-full bg-gray-700 text-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
              ></textarea>
              <button className="bg-red-500 text-black w-full py-2 rounded-md font-semibold hover:bg-red-600 glow">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="bg-gray-800 p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold text-gray-300 mb-4 text-center">
              Follow Us on Social Media
            </h2>
            <div className="space-y-4">
              <SocialMediaLink
                label="Instagram"
                icon={<FaInstagram size={24} className="text-red-500" />}
                href="https://instagram.com/hotel2020abj"
              />
              <SocialMediaLink
                label="WhatsApp"
                icon={<FaWhatsapp size={24} className="text-red-500" />}
                href="https://wa.me/2348139486554"
              />
              <SocialMediaLink
                label="Email"
                icon={<FaEnvelope size={24} className="text-red-500" />}
                href="mailto:hotelhelmers@gmail.com"
              />
              <SocialMediaLink
                label="Twitter"
                icon={<FaTwitter size={24} className="text-red-500" />}
                href="https://twitter.com/hotel2020abj"
              />
              <SocialMediaLink
                label="Facebook"
                icon={<FaFacebook size={24} className="text-red-500" />}
                href="https://facebook.com/hotel2020abj"
              />
              <SocialMediaLink
                label="Dribbble"
                icon={<FaDribbble size={24} className="text-red-500" />}
                href="https://dribbble.com/hotel2020abj"
              />
              <SocialMediaLink
                label="Phone"
                icon={<FaPhoneAlt size={24} className="text-red-500" />}
                href="tel:+2347049222264"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Fade-in Animation */}
      <section data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.475880216453!2d7.531770573528323!3d9.020279189128448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f5e81392cbd%3A0x7f3434fc8ffee12!2sHelmers%20Hotel!5e0!3m2!1sen!2sng!4v1733239305185!5m2!1sen!2sng"
          width="100%"
          height="500"
          allowFullScreen={true}
          loading="lazy"
          style={{ border: 0 }}
          className="rounded"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;