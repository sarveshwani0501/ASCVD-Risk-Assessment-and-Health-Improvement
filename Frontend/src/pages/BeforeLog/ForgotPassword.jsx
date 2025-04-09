// import React, { useState } from "react";
// import { Mail } from "lucide-react";
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
//     setLoading(true);
//     if (!email) {
//       setError("Please enter your email address");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/forgot-password",
//         { email }
//       );
//       setLoading(false);
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response.data.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="flex justify-center">
//           <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center">
//             <Mail className="h-6 w-6 text-white" />
//           </div>
//         </div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Reset your password
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Enter your email and we'll send you instructions to reset your
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
//                 <div className="mt-1">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                 >
//                   {loading ? "Sending..." : "Send reset instructions"}
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div className="text-center">
//               <div className="mb-4 flex justify-center">
//                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
//                   <svg
//                     className="h-6 w-6 text-green-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-lg font-medium text-gray-900">
//                 Check your email
//               </h3>
//               <p className="mt-2 text-sm text-gray-600">
//                 We've sent reset instructions to <strong>{email}</strong>
//               </p>
//               <div className="mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setSubmitted(false)}
//                   className="text-sm font-medium text-teal-600 hover:text-teal-500"
//                 >
//                   Didn't receive an email? Try again
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

//             <div className="mt-6 text-center">
//               <button
//                 type="button"
//                 className="text-sm font-medium text-teal-600 hover:text-teal-500"
//                 onClick={() => (window.location.href = "/login")}
//               >
//                 Return to login
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
import { Mail, CheckCircle, ArrowLeft } from "lucide-react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      setMessage(res.data.message);
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
            <Mail className="h-7 w-7 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w-md mx-auto">
          Enter your email address and we'll send you instructions to reset your
          password
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {!submitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                  />
                </div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  }`}
                >
                  {loading ? "Sending..." : "Send reset instructions"}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mb-6 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shadow-md">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Check your inbox
              </h3>
              <p className="mt-2 text-sm text-gray-600 mb-6">
                We've sent password reset instructions to:
              </p>
              <div className="py-3 px-4 bg-gray-50 rounded-md border border-gray-200 mb-6">
                <p className="font-medium text-gray-800">{email}</p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Use a different email address
                </button>
              </div>
            </div>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                type="button"
                className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => (window.location.href = "/login")}
              >
                Return to login
              </button>

              <button
                type="button"
                className="inline-flex justify-center items-center text-sm font-medium text-gray-600 hover:text-gray-500"
                onClick={() => (window.location.href = "/signup")}
              >
                Need an account? Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
