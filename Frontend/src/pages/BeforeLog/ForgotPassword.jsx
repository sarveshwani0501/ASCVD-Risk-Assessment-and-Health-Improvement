// import React, { useState } from "react";
// import { Mail, CheckCircle, ArrowLeft } from "lucide-react";
// import axios from "axios";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email) {
//       setError("Please enter your email address");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/forgot-password",
//         { email }
//       );
//       setMessage(res.data.message);
//       setSubmitted(true);
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Something went wrong. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="flex justify-center">
//           <div className="h-14 w-14 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
//             <Mail className="h-7 w-7 text-white" />
//           </div>
//         </div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Reset your password
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600 max-w-md mx-auto">
//           Enter your email address and we'll send you instructions to reset your
//           password
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {!submitted ? (
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email address
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="name@example.com"
//                   />
//                 </div>
//                 {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
//                     loading
//                       ? "bg-blue-400 cursor-not-allowed"
//                       : "bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   }`}
//                 >
//                   {loading ? "Sending..." : "Send reset instructions"}
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div className="text-center py-4">
//               <div className="mb-6 flex justify-center">
//                 <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shadow-md">
//                   <CheckCircle className="h-8 w-8 text-green-600" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Check your inbox
//               </h3>
//               <p className="mt-2 text-sm text-gray-600 mb-6">
//                 We've sent password reset instructions to:
//               </p>
//               <div className="py-3 px-4 bg-gray-50 rounded-md border border-gray-200 mb-6">
//                 <p className="font-medium text-gray-800">{email}</p>
//               </div>
//               <div className="mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setSubmitted(false)}
//                   className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   <ArrowLeft className="h-4 w-4 mr-1" />
//                   Use a different email address
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-1 gap-3">
//               <button
//                 type="button"
//                 className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 onClick={() => (window.location.href = "/login")}
//               >
//                 Return to login
//               </button>

//               <button
//                 type="button"
//                 className="inline-flex justify-center items-center text-sm font-medium text-gray-600 hover:text-gray-500"
//                 onClick={() => (window.location.href = "/signup")}
//               >
//                 Need an account? Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from "react";
import { Mail, CheckCircle, ArrowLeft, Heart, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const validateEmail = (email) => {
    if (!email) return "Email address is required";
    if (!/\S+@\S+\.\S+/.test(email))
      return "Please enter a valid email address";
    return null;
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validateEmail(email);
    setError(validationError || "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      setSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
                {!submitted ? (
                  <Mail className="h-10 w-10 text-blue-600" />
                ) : (
                  <CheckCircle className="h-10 w-10 text-green-600" />
                )}
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {!submitted ? "Forgot Password?" : "Check Your Email"}
            </h1>
            <p className="text-blue-100 text-sm">
              {!submitted
                ? "No worries, we'll send you reset instructions"
                : "We've sent you password reset instructions"}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {!submitted ? (
              <>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
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
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-200 text-gray-900 placeholder-gray-400 ${
                          touched && error
                            ? "border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            : "border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        }`}
                        placeholder="yourname@example.com"
                      />
                    </div>
                    {touched && error && (
                      <div className="flex items-center space-x-1 text-red-600 text-xs mt-2">
                        <AlertCircle size={12} />
                        <span>{error}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center items-center py-3 px-4 rounded-xl text-base font-semibold text-white shadow-lg transition-all duration-200 ${
                      loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                  >
                    {loading ? (
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
                        Sending Instructions...
                      </>
                    ) : (
                      "Send Reset Link"
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
                      Remember your password?
                    </span>
                  </div>
                </div>

                {/* Back to Login */}
                <button
                  onClick={() => navigate("/login")}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                >
                  <ArrowLeft size={18} />
                  <span>Back to Login</span>
                </button>
              </>
            ) : (
              <>
                {/* Success State */}
                <div className="text-center space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <p className="text-sm text-gray-600 mb-3">
                      We've sent password reset instructions to:
                    </p>
                    <div className="py-3 px-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <p className="font-semibold text-gray-900 break-all">
                        {email}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                    <p className="text-sm text-blue-800">
                      📧 Didn't receive the email? Check your spam folder or try
                      again with a different email address.
                    </p>
                  </div>

                  {/* Try Different Email */}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setEmail("");
                      setError("");
                      setTouched(false);
                    }}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ArrowLeft size={16} />
                    <span>Try a different email address</span>
                  </button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or</span>
                    </div>
                  </div>

                  {/* Return to Login */}
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                  >
                    <ArrowLeft size={18} />
                    <span>Return to Login</span>
                  </button>
                </div>
              </>
            )}

            {/* Sign Up Link - Only show in initial state */}
            {!submitted && (
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => navigate("/signup")}
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {!submitted
              ? "🔒 Your security is our priority"
              : "💌 Email sent successfully"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
