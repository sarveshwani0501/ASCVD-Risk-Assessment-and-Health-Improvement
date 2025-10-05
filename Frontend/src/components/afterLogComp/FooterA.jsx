// import React from "react";

// function FooterA() {
//   return (
//     <footer className="mt-8 pt-6 border-t border-gray-200">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-4 md:mb-0">
//           <p className="text-sm text-gray-500">© 2025 ASCVD Risk Calculator</p>
//           <p className="text-xs text-gray-400">
//             Developed by HeartHealth Research Institute
//           </p>
//         </div>
//         <div className="flex gap-4">
//           <button className="text-sm text-gray-500 hover:text-blue-600">
//             Help
//           </button>
//           <button className="text-sm text-gray-500 hover:text-blue-600">
//             Privacy
//           </button>
//           <button className="text-sm text-gray-500 hover:text-blue-600">
//             Terms
//           </button>
//           <button className="text-sm text-gray-500 hover:text-blue-600">
//             Contact
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default FooterA;

import React from "react";
import { Heart } from "lucide-react";

function FooterA() {
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0">
          {/* Brand Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Ayuvita
              </p>
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex items-center space-x-6">
            <a
              href="#help"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Help
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a
              href="#privacy"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a
              href="#terms"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Terms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </a>
          </div>
        </div>

        {/* Decorative line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 rounded-full"></div>
      </div>
    </footer>
  );
}

export default FooterA;
