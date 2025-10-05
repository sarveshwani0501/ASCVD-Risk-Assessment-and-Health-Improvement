// import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { Heart } from "lucide-react";

// const NavbarB = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white py-4 shadow-md">
//       <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-green-600 text-2xl font-semibold no-underline"
//         >
//           <Heart className="text-green-600" size={24} />
//           <span>Ayuvita</span>
//         </Link>
//         <div className="flex gap-8 items-center md:flex">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
//                 isActive
//                   ? "text-teal-600 font-medium"
//                   : "text-gray-700 hover:text-teal-600"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about-us"
//             className={({ isActive }) =>
//               `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
//                 isActive
//                   ? "text-teal-600 font-medium"
//                   : "text-gray-700 hover:text-teal-600"
//               }`
//             }
//           >
//             AboutUs
//           </NavLink>
//           <NavLink
//             to="/contact-us"
//             className={({ isActive }) =>
//               `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
//                 isActive
//                   ? "text-teal-600 font-medium"
//                   : "text-gray-700 hover:text-teal-600"
//               }`
//             }
//           >
//             ContactUs
//           </NavLink>
//           <Link to="/login">
//             <button className="bg-green-600 text-white py-2 px-5 rounded-md font-medium text-base transition-all duration-200 border-none cursor-pointer hover:bg-green-700 hover:-translate-y-0.5">
//               Sign In
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default NavbarB;

import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";

const NavbarB = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group no-underline">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg transition-transform duration-200 group-hover:scale-105">
                <Heart className="w-7 h-7 text-white" />
              </span>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent tracking-tight">
                Ayuvita
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/about-us">About Us</CustomNavLink>
              <CustomNavLink to="/contact-us">Contact Us</CustomNavLink>

              <Link to="/login" className="ml-4">
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all duration-200">
                  Sign In
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleToggleNav}
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6 text-blue-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu onClose={closeMobileMenu} />}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

// Desktop Navigation Link Component
const CustomNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-1 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
      ${
        isActive
          ? "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
      }`
    }
  >
    {children}
  </NavLink>
);

// Mobile Menu Component
const MobileMenu = ({ onClose }) => (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden animate-fade-in"
      onClick={onClose}
    />

    {/* Slide-in Menu */}
    <nav className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[70] md:hidden animate-slide-in-right overflow-y-auto">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Ayuvita
            </span>
          </div>
          <button
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            onClick={onClose}
            aria-label="Close Navigation"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <MobileNavLink to="/" onClick={onClose}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about-us" onClick={onClose}>
            About Us
          </MobileNavLink>
          <MobileNavLink to="/contact-us" onClick={onClose}>
            Contact Us
          </MobileNavLink>
        </div>

        {/* Sign In Button */}
        <div className="pt-4 mt-4 border-t border-gray-200">
          <Link to="/login" onClick={onClose}>
            <button className="w-full flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  </>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, onClick, children }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `w-full flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
        isActive
          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
      }`
    }
  >
    {children}
  </NavLink>
);

export default NavbarB;
