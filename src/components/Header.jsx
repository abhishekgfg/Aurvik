import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-blue-900">Aurevik</span>{" "}
        <span className="text-yellow-500">Capital</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
        <a href="#" className="hover:text-blue-900">
          Home
        </a>
        <a href="#" className="hover:text-blue-900">
          About Us
        </a>
        <a href="#" className="hover:text-blue-900">
          Services
        </a>
        <a href="#" className="hover:text-blue-900">
          Bootcamp
        </a>
        <a href="#" className="hover:text-blue-900">
          Resources
        </a>
        <a href="#" className="hover:text-blue-900">
          Contact
        </a>
      </nav>

      {/* CTA Button */}
      <button className="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
        Join Free Orientation
      </button>
    </header>
  );
};

export default Header;
