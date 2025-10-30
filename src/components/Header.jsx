import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-8 py-4 bg-white shadow-sm fixed w-full top-0 left-0 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-blue-900">Aurevik</span>{" "}
          <span className="text-yellow-500">Capital</span>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="/" className="hover:text-blue-900">
            Home
          </a>
          <a href="/about" className="hover:text-blue-900">
            About Us
          </a>
          <a href="#" className="hover:text-blue-900">
            Services
          </a>
          <a href="/Bootcamp" className="hover:text-blue-900">
            Bootcamp
          </a>
          <a href="#" className="hover:text-blue-900">
            Resources
          </a>
          <a href="/contact" className="hover:text-blue-900">
            Contact
          </a>
        </nav>

        {/* CTA Button (Desktop) */}
        <button className="hidden md:block bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
          Join Free Orientation
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-bold">
            <span className="text-blue-900">Aurevik</span>{" "}
            <span className="text-yellow-500">Capital</span>
          </div>
          <button
            className="text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col p-6 space-y-4 text-gray-800 font-medium">
          <a href="/" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="/Bootcamp" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>
            Bootcamp
          </a>
          <a href="#" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
          <a href="/contact" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="w-full bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Join Free Orientation
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
