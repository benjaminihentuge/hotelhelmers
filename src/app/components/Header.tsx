"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-black text-gray-500 p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Hotel Helmers
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden block text-gray-500 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation Links and Book Now Button */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-black lg:static lg:w-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4 z-50 transition-all duration-300 ease-in-out`}
      >
        {["About", "Gallery", "Contact"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
            onClick={handleLinkClick}
            className="block relative px-4 py-2 lg:p-0 hover:text-red-500 group"
          >
            {item}
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"
              aria-hidden="true"
            ></span>
          </Link>
        ))}
        <Link
          href="/book"
          onClick={handleLinkClick}
          className="block bg-red-500 text-white px-8 py-4 text-lg font-bold rounded-lg lg:ml-4 lg:px-4 lg:py-2 hover:bg-red-600"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
};

export default Header;
