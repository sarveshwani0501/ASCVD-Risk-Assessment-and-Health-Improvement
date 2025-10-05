// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Heart,
//   ShieldCheck,
//   ArrowRight,
//   Check,
//   ActivityIcon,
//   X,
// } from "lucide-react";

// import axios from "axios";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     dateOfBirth: "",
//     gender: "",
//   });

//   const [passwordStrength, setPasswordStrength] = useState({
//     length: false,
//     uppercase: false,
//   });

//   useEffect(() => {
//     const passwordValidation = {
//       length: formData.password.length >= 8,
//       uppercase: /[A-Z]/.test(formData.password),
//     };
//     setPasswordStrength(passwordValidation);
//   }, [formData.password]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const nextStep = () => {
//     setStep((prevStep) => Math.min(prevStep + 1, 2));
//   };

//   const prevStep = () => {
//     setStep((prevStep) => Math.max(prevStep - 1, 1));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     console.log("Full Registration Data:", formData);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         formData
//       );
//       console.log(response.data);

//       setShowConfirmation(true);
//     } catch (error) {
//       console.error(error.response?.data || "SignUp failed");
//     }
//   };

//   const handleConfirmationClose = () => {
//     setShowConfirmation(false);
//     navigate("/login");
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div className="space-y-6 animate-fade-in">
//             <div className="text-center mb-6">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//                 Personal Information
//               </h2>
//               <p className="text-gray-500 mt-2">
//                 Let's start with your basic details
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
//                   placeholder="Enter first name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
//                   placeholder="Enter last name"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
//                 placeholder="Create password"
//                 required
//               />
//               <div className="mt-2 grid grid-cols-2 gap-2">
//                 {Object.entries(passwordStrength).map(([key, isValid]) => (
//                   <div
//                     key={key}
//                     className={`flex items-center text-sm ${
//                       isValid ? "text-emerald-600" : "text-gray-400"
//                     }`}
//                   >
//                     <Check
//                       className={`mr-2 ${
//                         isValid ? "text-emerald-600" : "text-gray-400"
//                       }`}
//                       size={16}
//                     />
//                     {key === "length" && "At least 8 characters"}
//                     {key === "uppercase" && "Uppercase letter"}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
//                 placeholder="Confirm password"
//                 required
//               />
//             </div>

//             <button
//               onClick={nextStep}
//               className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center"
//             >
//               Continue <ArrowRight className="ml-2" />
//             </button>
//           </div>
//         );

//       case 2:
//         return (
//           <div className="space-y-6 animate-fade-in">
//             <div className="text-center mb-6">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//                 Health Profile
//               </h2>
//               <p className="text-gray-500 mt-2">
//                 Help us understand your health background
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   name="dateOfBirth"
//                   value={formData.dateOfBirth}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={prevStep}
//                 className="w-1/2 mr-2 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="w-1/2 bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center"
//               >
//                 Create Account <Heart className="ml-2" />
//               </button>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
//       <div className="w-full max-w-md md:max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
//         <div className="p-6 sm:p-8">
//           <div className="flex justify-center mb-4">
//             <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-emerald-500">
//               <img
//                 src="/api/placeholder/250/250"
//                 alt="ASCVD Risk Calculator"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
//             ASCVD Risk Calculator
//           </h1>
//           <p className="text-sm sm:text-base text-center text-gray-500 mb-6">
//             Create your personalized health account
//           </p>

//           <form onSubmit={handleSubmit}>{renderStep()}</form>

//           <div className="text-center mt-4 text-sm sm:text-base">
//             <span className="text-gray-600">Already have an account? </span>
//             <Link
//               to="/login"
//               className="text-emerald-600 font-bold hover:underline"
//             >
//               Login
//             </Link>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-2 py-3 sm:py-4">
//           {[1, 2].map((item) => (
//             <div
//               key={item}
//               className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors duration-300 ${
//                 step === item ? "bg-emerald-500" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl shadow-lg p-6 w-80 sm:w-96 mx-4">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-gray-800">Success!</h3>
//               <button
//                 onClick={handleConfirmationClose}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X size={20} />
//               </button>
//             </div>
//             <div className="flex justify-center my-4">
//               <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
//                 <Check size={32} className="text-emerald-500" />
//               </div>
//             </div>
//             <p className="text-center text-gray-700 mb-4">
//               Your account has been successfully created!
//             </p>
//             <button
//               onClick={handleConfirmationClose}
//               className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
//             >
//               Continue to Login
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUp;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  ArrowRight,
  Check,
  X,
  Mail,
  Lock,
  User,
  Calendar,
  AlertCircle,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
  });

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  // Password validation
  useEffect(() => {
    const passwordValidation = {
      length: formData.password.length >= 8,
      uppercase: /[A-Z]/.test(formData.password),
      lowercase: /[a-z]/.test(formData.password),
      number: /[0-9]/.test(formData.password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    };
    setPasswordStrength(passwordValidation);
  }, [formData.password]);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return null;
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password))
      return "Password must contain an uppercase letter";
    if (!/[a-z]/.test(password))
      return "Password must contain a lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain a number";
    return null;
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) return "Please confirm your password";
    if (confirmPassword !== password) return "Passwords do not match";
    return null;
  };

  const validateName = (name, fieldName) => {
    if (!name) return `${fieldName} is required`;
    if (name.length < 2) return `${fieldName} must be at least 2 characters`;
    if (!/^[a-zA-Z\s]+$/.test(name))
      return `${fieldName} can only contain letters`;
    return null;
  };

  const validateDateOfBirth = (dob) => {
    if (!dob) return "Date of birth is required";
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) return "You must be at least 18 years old";
    if (age > 120) return "Please enter a valid date of birth";
    return null;
  };

  const validateGender = (gender) => {
    if (!gender) return "Please select your gender";
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleBlur = (fieldName) => {
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    let error = null;
    switch (fieldName) {
      case "firstName":
        error = validateName(formData.firstName, "First name");
        break;
      case "lastName":
        error = validateName(formData.lastName, "Last name");
        break;
      case "email":
        error = validateEmail(formData.email);
        break;
      case "password":
        error = validatePassword(formData.password);
        break;
      case "confirmPassword":
        error = validateConfirmPassword(
          formData.confirmPassword,
          formData.password
        );
        break;
      case "dateOfBirth":
        error = validateDateOfBirth(formData.dateOfBirth);
        break;
      case "gender":
        error = validateGender(formData.gender);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      newErrors.firstName = validateName(formData.firstName, "First name");
      newErrors.lastName = validateName(formData.lastName, "Last name");
      newErrors.email = validateEmail(formData.email);
      newErrors.password = validatePassword(formData.password);
      newErrors.confirmPassword = validateConfirmPassword(
        formData.confirmPassword,
        formData.password
      );
    } else if (currentStep === 2) {
      newErrors.dateOfBirth = validateDateOfBirth(formData.dateOfBirth);
      newErrors.gender = validateGender(formData.gender);
    }

    const filteredErrors = Object.entries(newErrors).reduce(
      (acc, [key, value]) => {
        if (value) acc[key] = value;
        return acc;
      },
      {}
    );

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  const nextStep = () => {
    // Mark all step 1 fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (validateStep(1)) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true,
      dateOfBirth: true,
      gender: true,
    });

    if (!validateStep(1) || !validateStep(2)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      console.log(response.data);
      setShowConfirmation(true);
    } catch (error) {
      console.error(error.response?.data || "SignUp failed");
      setErrors({
        submit:
          error.response?.data?.message ||
          "Registration failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    navigate("/login");
  };

  const getInputClassName = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const baseClass =
      "w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-200 text-gray-900 placeholder-gray-400";

    if (hasError) {
      return `${baseClass} border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent`;
    }

    return `${baseClass} border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent`;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-5 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Create Your Account
              </h2>
              <p className="text-gray-600 text-sm">
                Let's start with your basic information
              </p>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("firstName")}
                    className={getInputClassName("firstName")}
                    placeholder="John"
                    required
                  />
                </div>
                {touched.firstName && errors.firstName && (
                  <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.firstName}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("lastName")}
                    className={getInputClassName("lastName")}
                    placeholder="Doe"
                    required
                  />
                </div>
                {touched.lastName && errors.lastName && (
                  <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.lastName}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("email")}
                  className={getInputClassName("email")}
                  placeholder="yourname@example.com"
                  required
                />
              </div>
              {touched.email && errors.email && (
                <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("password")}
                  className={getInputClassName("password")}
                  placeholder="Create a strong password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {touched.password && errors.password && (
                <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.password}</span>
                </div>
              )}
              <div className="mt-3 grid grid-cols-2 gap-2">
                {Object.entries(passwordStrength).map(([key, isValid]) => (
                  <div
                    key={key}
                    className={`flex items-center text-xs transition-colors duration-200 ${
                      isValid ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    {isValid ? (
                      <CheckCircle className="mr-1.5" size={14} />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 mr-1.5"></div>
                    )}
                    {key === "length" && "8+ characters"}
                    {key === "uppercase" && "Uppercase"}
                    {key === "lowercase" && "Lowercase"}
                    {key === "number" && "Number"}
                    {key === "special" && "Special char"}
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("confirmPassword")}
                  className={getInputClassName("confirmPassword")}
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.confirmPassword}</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Continue
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-5 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Health Profile
              </h2>
              <p className="text-gray-600 text-sm">
                Tell us a bit about yourself
              </p>
            </div>

            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{errors.submit}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("dateOfBirth")}
                    max={new Date().toISOString().split("T")[0]}
                    className={getInputClassName("dateOfBirth")}
                    required
                  />
                </div>
                {touched.dateOfBirth && errors.dateOfBirth && (
                  <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.dateOfBirth}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("gender")}
                    className={getInputClassName("gender")}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {touched.gender && errors.gender && (
                  <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.gender}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-1/2 py-3 rounded-xl transition-all duration-200 flex items-center justify-center font-semibold shadow-lg ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                    Creating...
                  </>
                ) : (
                  <>
                    Create Account
                    <Heart className="ml-2" size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center">
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
              Start your cardiovascular health journey
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit}>{renderStep()}</form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 pb-6">
            {[1, 2].map((item) => (
              <div
                key={item}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step === item ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            🩺 Take control of your cardiovascular health today
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showConfirmation && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] animate-fade-in" />
          <div className="fixed inset-0 flex items-center justify-center z-[70] p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md animate-scale-in">
              <div className="flex justify-end mb-2">
                <button
                  onClick={handleConfirmationClose}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Check size={40} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
                Account Created!
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Your account has been successfully created. You can now sign in
                and start managing your cardiovascular health.
              </p>

              <button
                onClick={handleConfirmationClose}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Continue to Sign In
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Add these animations to your global CSS
const styles = `
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-in {
  from { 
    opacity: 0;
    transform: scale(0.9);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}
`;

export default SignUp;
