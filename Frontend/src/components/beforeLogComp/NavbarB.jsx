import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Heart } from "lucide-react";

const NavbarB = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-green-600 text-2xl font-semibold no-underline"
        >
          <Heart className="text-green-600" size={24} />
          <span>HealthCare</span>
        </Link>
        <div className="flex gap-8 items-center md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
                isActive
                  ? "text-teal-600 font-medium"
                  : "text-gray-700 hover:text-teal-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
                isActive
                  ? "text-teal-600 font-medium"
                  : "text-gray-700 hover:text-teal-600"
              }`
            }
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
                isActive
                  ? "text-teal-600 font-medium"
                  : "text-gray-700 hover:text-teal-600"
              }`
            }
          >
            ContactUs
          </NavLink>
          <Link to="/login">
            <button className="bg-green-600 text-white py-2 px-5 rounded-md font-medium text-base transition-all duration-200 border-none cursor-pointer hover:bg-green-700 hover:-translate-y-0.5">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavbarB;
