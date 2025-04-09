import React from "react";
import { Link } from "react-router-dom";
const FooterB = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-emerald-800 text-white py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-300 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold">ASCVD Risk Calculator</h2>
            </div>
            <p className="text-green-200">
              Empowering you to take control of your heart health.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/login"
                    className="text-green-200 hover:text-white transition"
                  >
                    Risk Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-green-200 hover:text-white transition"
                  >
                    Diet Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-green-200 hover:text-white transition"
                  >
                    Exercise Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about-us"
                    className="text-green-200 hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-green-200 hover:text-white transition"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © {new Date().getFullYear()} AYUVITA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterB;
