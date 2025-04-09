import React from "react";

function FooterA() {
  return (
    <footer className="mt-8 pt-6 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">© 2025 ASCVD Risk Calculator</p>
          <p className="text-xs text-gray-400">
            Developed by HeartHealth Research Institute
          </p>
        </div>
        <div className="flex gap-4">
          <button className="text-sm text-gray-500 hover:text-blue-600">
            Help
          </button>
          <button className="text-sm text-gray-500 hover:text-blue-600">
            Privacy
          </button>
          <button className="text-sm text-gray-500 hover:text-blue-600">
            Terms
          </button>
          <button className="text-sm text-gray-500 hover:text-blue-600">
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
export default FooterA;
