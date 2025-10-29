import React from "react";
import heroImage from "../images/hero-dubai.jpg"; // place your background image in /src/assets/

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Expand Beyond Borders — <br />
          Build, Grow & Protect <br /> Your Business in the UAE
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Helping Indian MSMEs save taxes, scale globally & achieve financial
          freedom legally.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-blue-800 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium transition">
            Book Free Orientation →
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md text-lg font-medium transition">
            Join Bootcamp
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
