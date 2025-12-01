import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-7">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Explore the World, <br />
            <span className="text-blue-500">One Country</span> at a Time
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>

          <NavLink to="/country">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:shadow-[0_0_18px_rgba(59,130,246,0.9)]">
              Start Exploring
              <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="/images/world.png"
            alt="world beauty"
            className="w-[85%] md:w-[90%] drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
