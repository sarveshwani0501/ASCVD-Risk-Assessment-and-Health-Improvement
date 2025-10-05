// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// const Login = () => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   // const [rememberMe, setRememberMe] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   function handleinputChange(e) {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setIsLoading(true);
//     // setTimeout(() => {
//     //   setIsLoading(false);
//     //   // Here you would normally handle authentication
//     //   console.log("Login attempted with:", { email, password, rememberMe });
//     // }, 1500);
//     // Simulate API call
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         formData
//       );
//       navigate("/user/home");
//     } catch (error) {
//       console.error(error.response?.data || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//           {/* Header with logo and tagline */}
//           <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-center">
//             <div className="flex justify-center mb-3">
//               <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
//                 <svg
//                   className="h-8 w-8 text-green-600"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                 </svg>
//               </div>
//             </div>
//             <h1 className="text-2xl font-bold text-white">HeartHealth</h1>
//             <p className="text-green-100 mt-1">
//               Personalized cardiovascular risk management
//             </p>
//           </div>

//           {/* Login Form */}
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">
//               Sign in to your account
//             </h2>

//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//                     placeholder="yourname@example.com"
//                     value={formData.email}
//                     onChange={handleinputChange}
//                   />
//                 </div>

//                 <div>
//                   <div className="flex items-center justify-between mb-1">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       to="/forgetpassword"
//                       className="text-sm text-green-600 hover:text-green-800 transition"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//                     placeholder="••••••••"
//                     value={formData.password}
//                     onChange={handleinputChange}
//                   />
//                 </div>

//                 {/* <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input
//                       id="remember-me"
//                       name="remember-me"
//                       type="checkbox"
//                       className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//                       checked={rememberMe}
//                       onChange={(e) => setRememberMe(e.target.checked)}
//                     />
//                     <label
//                       htmlFor="remember-me"
//                       className="ml-2 block text-sm text-gray-700"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                 </div> */}

//                 <button
//                   type="submit"
//                   className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
//                     isLoading
//                       ? "bg-green-400"
//                       : "bg-green-600 hover:bg-green-700"
//                   } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition`}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                   ) : null}
//                   {isLoading ? "Signing in..." : "Sign in"}
//                 </button>
//               </div>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/signup"
//                   className="font-medium text-green-600 hover:text-green-500 transition"
//                 >
//                   Start your heart health journey
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-6 text-sm text-gray-500">
//           <p>Take control of your cardiovascular health today</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   loginUser,
//   selectAuthStatus,
//   selectAuthError,
//   selectIsAuthenticated,
// } from "../../features/authSlice";

// import { selectCompleteHistory } from "../../features/healthSlice";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Get auth state from Redux store
//   const status = useSelector(selectAuthStatus);
//   const error = useSelector(selectAuthError);
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const completeHistory = useSelector(selectCompleteHistory);

//   const isLoading = status === "loading";

//   useEffect(() => {
//     if (isAuthenticated) {
//       completeHistory.length > 0 ?
//       navigate("/user/home") : navigate("/user/risk");
//     }
//   }, [isAuthenticated, navigate]);

//   function handleInputChange(e) {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     dispatch(loginUser(formData));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden">

//           <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-center">
//             <div className="flex justify-center mb-3">
//               <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
//                 <svg
//                   className="h-8 w-8 text-green-600"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                 </svg>
//               </div>
//             </div>
//             <h1 className="text-2xl font-bold text-white">HeartHealth</h1>
//             <p className="text-green-100 mt-1">
//               Personalized cardiovascular risk management
//             </p>
//           </div>

//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">
//               Sign in to your account
//             </h2>

//             {error && (
//               <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//                     placeholder="yourname@example.com"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div>
//                   <div className="flex items-center justify-between mb-1">
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Password
//                     </label>
//                     <Link
//                       to="/forgotpassword"
//                       className="text-sm text-green-600 hover:text-green-800 transition"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//                     placeholder="••••••••"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
//                     isLoading
//                       ? "bg-green-400"
//                       : "bg-green-600 hover:bg-green-700"
//                   } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition`}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                   ) : null}
//                   {isLoading ? "Signing in..." : "Sign in"}
//                 </button>
//               </div>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/signup"
//                   className="font-medium text-green-600 hover:text-green-500 transition"
//                 >
//                   Start your heart health journey
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-6 text-sm text-gray-500">
//           <p>Take control of your cardiovascular health today</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  selectAuthStatus,
  selectAuthError,
  selectIsAuthenticated,
} from "../../features/authSlice";
import { selectCompleteHistory } from "../../features/healthSlice";
import { Heart, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get auth state from Redux store
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const completeHistory = useSelector(selectCompleteHistory);

  const isLoading = status === "loading";

  useEffect(() => {
    if (isAuthenticated) {
      completeHistory.length > 0
        ? navigate("/user/home")
        : navigate("/user/risk");
    }
  }, [isAuthenticated, navigate, completeHistory]);

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative flex justify-center mb-4">
              <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                <Heart
                  className="h-10 w-10 text-blue-600"
                  fill="currentColor"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Ayuvita</h1>
            <p className="text-blue-100 text-sm">
              Personalized cardiovascular risk management
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600 text-sm">
                Sign in to continue your health journey
              </p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800">
                    Authentication Failed
                  </p>
                  <p className="text-sm text-red-600 mt-1">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Link
                    to="/forgotpassword"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full flex justify-center items-center py-3 px-4 rounded-xl text-base font-semibold text-white shadow-lg transition-all duration-200 ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  New to Ayuvita?
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            🩺 Take control of your cardiovascular health today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
