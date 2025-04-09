import React, { useState, useRef, useEffect } from "react";
import { Heart, ChevronDown, User, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/authSlice";

export function NavbarBefore() {
  const [isProfile, setProfile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropDownProfile = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropDownProfile.current &&
        !dropDownProfile.current.contains(event.target)
      ) {
        setProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfile]);

  function handleToggleNav() {
    setOpen(!isOpen);
  }

  //Logout 
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      // Redirect to home/login page after successful logout
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      // You could add error handling UI here if needed
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-600">HealthCare</span>
          </div>
          <button className="border-none md:hidden" onClick={handleToggleNav}>
            <div className="flex items-center space-x-2 p-2 hover:border hover:border-gray-400 hover:rounded-full hover:bg-gray-50">
              <Menu className="h-8 w-8 text-black cursor-pointer" />
            </div>
          </button>
          {/* Main Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <CustomNavLink to="/user/home">Home</CustomNavLink>
            <CustomNavLink to="/user/risk">Risk Calculator</CustomNavLink>
            <CustomNavLink to="/user/dashboard">Dashboard</CustomNavLink>
            <CustomNavLink to="/user/healthTips">Diet & Exercise</CustomNavLink>

            {/* Profile Menu */}
            <div className="relative" ref={dropDownProfile}>
              <button
                onClick={() => setProfile(!isProfile)}
                className="p-2 rounded-full hover:bg-teal-50 transition-colors duration-200"
              >
                <User size={24} className="text-gray-700 hover:text-teal-600" />
              </button>

              {isProfile && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <DropdownItem to="/user/profile">My Profile</DropdownItem>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <MobileMenu onClose={handleToggleNav} onLogout={handleLogout} />
        </>
      )}
    </nav>
  );
}

// Helper Components
const CustomNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
        isActive
          ? "text-teal-600 font-medium"
          : "text-gray-700 hover:text-teal-600"
      }`
    }
  >
    <span>{children}</span>
  </NavLink>
);

const DropdownItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-4 py-2 text-sm transition-colors duration-200 ${
        isActive
          ? "bg-teal-50 text-teal-600"
          : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
      }`
    }
  >
    {children}
  </NavLink>
);

const MobileMenu = ({ onClose, onLogout }) => {
  return (
    <nav className="bg-teal-50 fixed top-20 right-0 min-h-screen w-1/2 flex flex-col items-center border-r-4 py-2 z-50">
      <button
        className="self-end text-gray-700 text-xl font-bold mb-4 mt-1 p-1 mr-2 hover:border hover:border-gray-700 hover:rounded-full hover:bg-gray-100"
        onClick={onClose}
      >
        ✖
      </button>
      <NavLink
        to="/user/home"
        onClick={onClose}
        className={({ isActive }) =>
          `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
            isActive ? "bg-teal-800" : ` bg-teal-600`
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/user/risk"
        onClick={onClose}
        className={({ isActive }) =>
          `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
            isActive ? "bg-teal-800" : ` bg-teal-600`
          }`
        }
      >
        Risk Calculator
      </NavLink>
      <NavLink
        to="/user/dashboard"
        onClick={onClose}
        className={({ isActive }) =>
          `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
            isActive ? "bg-teal-800" : ` bg-teal-600`
          }`
        }
      >
        Dashboard
      </NavLink>
      {/* <div className="bg-teal-600 w-full flex items-center justify-center border rounded-lg py-2"> */}
      <NavLink
        to="/user/healthTips"
        onClick={onClose}
        className={({ isActive }) =>
          `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
            isActive ? "bg-teal-800" : ` bg-teal-600`
          }`
        }
      >
        Diet & Exercise
      </NavLink>

      <NavLink
        to="/user/profile"
        onClick={onClose}
        className={({ isActive }) =>
          `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
            isActive ? "bg-teal-800" : ` bg-teal-600`
          }`
        }
      >
        Profile
      </NavLink>

      <button
        onClick={() => {
          onLogout();
          onClose();
        }}
        className="text-gray-100 w-full flex items-center justify-center py-2 bg-teal-600 hover:bg-teal-700"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavbarBefore;
