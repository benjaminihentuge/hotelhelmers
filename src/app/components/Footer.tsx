"use client";

import Link from "next/link";

const Footer = () => {
  const handleLinkClick = () => {};

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 px-6 lg:px-20 text-gray-500">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <h1 className="text-xl font-bold">HOTEL HELMERS</h1>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="block px-4 py-2 lg:p-0 hover:text-red-500"
              >
                About Us
              </Link>
            </li>

            <li>Legal Information</li>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block px-4 py-2 lg:p-0 hover:text-red-500"
            >
              Contact Us
            </Link>
          </ul>
        </div>

        {/* Help Center Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Help Center</h2>
          <ul className="space-y-2">
            <li>Find the Property</li>
            <li>Why Us?</li>
            <li>FAQs</li>
            <li>Rental Guides</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-2">
            <li>Phone: +234 813 948 6554</li>
            <li>Email: hotelhelmers@gmail.com</li>
            <li>
              Address: Plot A16, Gen. Mohd U. Gololo way, Extension, off Linda
              Chalker Street, Asokoro, Abuja 900110, Federal Capital Territory
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Hotel Helmers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
