// import React, { useState, useRef, useEffect } from "react";
// import { Heart, ChevronDown, User, Menu } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../../features/authSlice";

// export function NavbarBefore() {
//   const [isProfile, setProfile] = useState(false);
//   const [isOpen, setOpen] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const dropDownProfile = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         dropDownProfile.current &&
//         !dropDownProfile.current.contains(event.target)
//       ) {
//         setProfile(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isProfile]);

//   function handleToggleNav() {
//     setOpen(!isOpen);
//   }

//   //Logout
//   const handleLogout = async () => {
//     try {
//       await dispatch(logoutUser()).unwrap();

//       navigate("/");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Heart className="h-8 w-8 text-teal-600" />
//             <span className="text-2xl font-bold text-teal-600">Ayuvita</span>
//           </div>
//           <button className="border-none md:hidden" onClick={handleToggleNav}>
//             <div className="flex items-center space-x-2 p-2 hover:border hover:border-gray-400 hover:rounded-full hover:bg-gray-50">
//               <Menu className="h-8 w-8 text-black cursor-pointer" />
//             </div>
//           </button>
//           {/* Main Navigation */}
//           <div className="hidden items-center space-x-8 md:flex">
//             <CustomNavLink to="/user/home">Home</CustomNavLink>
//             <CustomNavLink to="/user/risk">Risk Calculator</CustomNavLink>
//             <CustomNavLink to="/user/dashboard">Dashboard</CustomNavLink>
//             <CustomNavLink to="/user/healthTips">Diet & Exercise</CustomNavLink>

//             {/* Profile Menu */}
//             <div className="relative" ref={dropDownProfile}>
//               <button
//                 onClick={() => setProfile(!isProfile)}
//                 className="p-2 rounded-full hover:bg-teal-50 transition-colors duration-200"
//               >
//                 <User size={24} className="text-gray-700 hover:text-teal-600" />
//               </button>

//               {isProfile && (
//                 <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                   <DropdownItem to="/user/profile">My Profile</DropdownItem>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
//                   >
//                     Log Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <>
//           <MobileMenu onClose={handleToggleNav} onLogout={handleLogout} />
//         </>
//       )}
//     </nav>
//   );
// }

// // Helper Components
// const CustomNavLink = ({ to, children }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) =>
//       `flex items-center space-x-1 px-3 py-2 transition-colors duration-200 ${
//         isActive
//           ? "text-teal-600 font-medium"
//           : "text-gray-700 hover:text-teal-600"
//       }`
//     }
//   >
//     <span>{children}</span>
//   </NavLink>
// );

// const DropdownItem = ({ to, children }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) =>
//       `block px-4 py-2 text-sm transition-colors duration-200 ${
//         isActive
//           ? "bg-teal-50 text-teal-600"
//           : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
//       }`
//     }
//   >
//     {children}
//   </NavLink>
// );

// const MobileMenu = ({ onClose, onLogout }) => {
//   return (
//     <nav className="bg-teal-50 fixed top-20 right-0 min-h-screen w-1/2 flex flex-col items-center border-r-4 py-2 z-50">
//       <button
//         className="self-end text-gray-700 text-xl font-bold mb-4 mt-1 p-1 mr-2 hover:border hover:border-gray-700 hover:rounded-full hover:bg-gray-100"
//         onClick={onClose}
//       >
//         ✖
//       </button>
//       <NavLink
//         to="/user/home"
//         onClick={onClose}
//         className={({ isActive }) =>
//           `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
//             isActive ? "bg-teal-800" : ` bg-teal-600`
//           }`
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/user/risk"
//         onClick={onClose}
//         className={({ isActive }) =>
//           `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
//             isActive ? "bg-teal-800" : ` bg-teal-600`
//           }`
//         }
//       >
//         Risk Calculator
//       </NavLink>
//       <NavLink
//         to="/user/dashboard"
//         onClick={onClose}
//         className={({ isActive }) =>
//           `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
//             isActive ? "bg-teal-800" : ` bg-teal-600`
//           }`
//         }
//       >
//         Dashboard
//       </NavLink>
//       {/* <div className="bg-teal-600 w-full flex items-center justify-center border rounded-lg py-2"> */}
//       <NavLink
//         to="/user/healthTips"
//         onClick={onClose}
//         className={({ isActive }) =>
//           `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
//             isActive ? "bg-teal-800" : ` bg-teal-600`
//           }`
//         }
//       >
//         Diet & Exercise
//       </NavLink>

//       <NavLink
//         to="/user/profile"
//         onClick={onClose}
//         className={({ isActive }) =>
//           `text-gray-100 w-full flex items-center justify-center py-2 hover:bg-teal-700 ${
//             isActive ? "bg-teal-800" : ` bg-teal-600`
//           }`
//         }
//       >
//         Profile
//       </NavLink>

//       <button
//         onClick={() => {
//           onLogout();
//           onClose();
//         }}
//         className="text-gray-100 w-full flex items-center justify-center py-2 bg-teal-600 hover:bg-teal-700"
//       >
//         Logout
//       </button>
//     </nav>
//   );
// };

// export default NavbarBefore;

import React, { useState, useRef, useEffect } from "react";
import { Heart, ChevronDown, User, Menu, X } from "lucide-react";
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

  function handleToggleNav() {
    setOpen(!isOpen);
  }

  //Logout
  const handleLogout = async () => {
    try {
      console.log("Logout button clicked");
      await dispatch(logoutUser()).unwrap();
      console.log("Logout successful, navigating to home");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/user/home" className="flex items-center gap-3 group">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg transition-transform duration-200 group-hover:scale-105">
                <Heart className="w-7 h-7 text-white" />
              </span>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent tracking-tight">
                Ayuvita
              </span>
            </NavLink>

            {/* Hamburger Button */}
            <button
              className="md:hidden p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleToggleNav}
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6 text-blue-600" />
            </button>

            {/* Main Navigation Desktop */}
            <div className="hidden items-center space-x-2 md:flex">
              <CustomNavLink to="/user/home">Home</CustomNavLink>
              <CustomNavLink to="/user/risk">Risk Calculator</CustomNavLink>
              <CustomNavLink to="/user/dashboard">Dashboard</CustomNavLink>
              <CustomNavLink to="/user/healthTips">
                Diet & Exercise
              </CustomNavLink>

              {/* Profile Menu */}
              <div className="relative ml-2" ref={dropDownProfile}>
                <button
                  onClick={() => setProfile(!isProfile)}
                  className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 shadow-sm"
                  aria-label="Toggle Profile Menu"
                >
                  <User size={20} className="text-blue-600" />
                </button>

                {isProfile && (
                  <div className="absolute top-full right-0 mt-2 w-52 rounded-2xl bg-white shadow-xl py-2 z-50 border border-gray-100 animate-fade-in">
                    <DropdownItem to="/user/profile">My Profile</DropdownItem>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 mx-1"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu onClose={handleToggleNav} onLogout={handleLogout} />
      )}
    </>
  );
}

// Helper Components
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

const DropdownItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-200 mx-1 ${
        isActive
          ? "bg-blue-50 text-blue-600"
          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
      }`
    }
  >
    {children}
  </NavLink>
);

const MobileMenu = ({ onClose, onLogout }) => (
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
          <MobileNavLink to="/user/home" onClick={onClose}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/user/risk" onClick={onClose}>
            Risk Calculator
          </MobileNavLink>
          <MobileNavLink to="/user/dashboard" onClick={onClose}>
            Dashboard
          </MobileNavLink>
          <MobileNavLink to="/user/healthTips" onClick={onClose}>
            Diet & Exercise
          </MobileNavLink>
          <MobileNavLink to="/user/profile" onClick={onClose}>
            My Profile
          </MobileNavLink>
        </div>

        {/* Logout Button */}
        <div className="pt-4 mt-4 border-t border-gray-200">
          <button
            onClick={() => {
              console.log("Mobile logout button clicked");
              onLogout();
              onClose();
            }}
            className="w-full flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  </>
);

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

export default NavbarBefore;
