import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaDribbble,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Image */}
      <section
        className="w-full h-[75vh] bg-cover bg-center bg-fixed sm:bg-[url(/images/contacthero2.jpg)]"
        style={{
          backgroundImage: 'url("images/contacthero2.jpg")',
        }}
      ></section>

      {/* Contact Information */}
      <section className="text-center py-32">
        <h2 className="text-2xl font-bold">Contact The Reception</h2>
        <p className="text-gray-400 mt-2">
          For assistance, call us at +234 813 948 6554 or email us at hotelhelmers@gmail.com
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="tel:+2347049222264" className="bg-gray-800 p-4 rounded">
            Phone
          </a>
          <a href="mailto:reservations@hotel2020.com" className="bg-gray-800 p-4 rounded">
            Email
          </a>
          <a href="https://instagram.com/hotel2020abj" className="bg-gray-800 p-4 rounded">
            Instagram
          </a>
        </div>
      </section>

      {/* Contact Form and Social Links */}
      <section className="py-8 px-4 md:flex items-start space-y-8 md:space-y-0">
        {/* Contact Form */}
        <div className="">
        <form className="w-full md:w-1/2 space-y-4 ">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-gray-800 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 p-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full bg-gray-800 p-2 rounded"
            rows={4}
          ></textarea>
          <button className="bg-yellow-500 px-4 py-2 rounded">Send Message</button>
        </form>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/2 md:flex md:justify-center md:items-center">
  <div className="space-y-4 text-center">
    <h2 className="text-lg text-gray-300 mb-4">Hotel Helmers</h2>
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <FaInstagram size={24} />
        <span>Instagram</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaWhatsapp size={24} />
        <span>WhatsApp</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaEnvelope size={24} />
        <span>Email</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaTwitter size={24} />
        <span>Twitter</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaFacebook size={24} />
        <span>Facebook</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaDribbble size={24} />
        <span>Dribbble</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaPhoneAlt size={24} />
        <span>Phone</span>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Map Section */}
      <section className="py-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.475880216453!2d7.531770573528323!3d9.020279189128448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f5e81392cbd%3A0x7f3434fc8ffee12!2sHelmers%20Hotel!5e0!3m2!1sen!2sng!4v1733239305185!5m2!1sen!2sng"
          width="100%"
          height="350"
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
