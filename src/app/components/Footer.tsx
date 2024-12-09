"use client";


import Link from "next/link";

const Footer = () => {


  const handleLinkClick = () => {
    
  };

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
              <li>Phone: 1234567890</li>
              <li>Email: company@email.com</li>
              <li>Location: 100 Smart Street, LA, USA</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  