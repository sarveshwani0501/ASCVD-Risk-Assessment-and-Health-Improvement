import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  ArrowRight,
  Check,
  ActivityIcon,
  X,
} from "lucide-react";

import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
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
  });

  useEffect(() => {
    const passwordValidation = {
      length: formData.password.length >= 8,
      uppercase: /[A-Z]/.test(formData.password),
    };
    setPasswordStrength(passwordValidation);
  }, [formData.password]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Full Registration Data:", formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      console.log(response.data);

      setShowConfirmation(true);
    } catch (error) {
      console.error(error.response?.data || "SignUp failed");
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    navigate("/login");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Personal Information
              </h2>
              <p className="text-gray-500 mt-2">
                Let's start with your basic details
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Create password"
                required
              />
              <div className="mt-2 grid grid-cols-2 gap-2">
                {Object.entries(passwordStrength).map(([key, isValid]) => (
                  <div
                    key={key}
                    className={`flex items-center text-sm ${
                      isValid ? "text-emerald-600" : "text-gray-400"
                    }`}
                  >
                    <Check
                      className={`mr-2 ${
                        isValid ? "text-emerald-600" : "text-gray-400"
                      }`}
                      size={16}
                    />
                    {key === "length" && "At least 8 characters"}
                    {key === "uppercase" && "Uppercase letter"}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Confirm password"
                required
              />
            </div>

            <button
              onClick={nextStep}
              className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center"
            >
              Continue <ArrowRight className="ml-2" />
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Health Profile
              </h2>
              <p className="text-gray-500 mt-2">
                Help us understand your health background
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="w-1/2 mr-2 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-1/2 bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center"
              >
                Create Account <Heart className="ml-2" />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md md:max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-emerald-500">
              <img
                src="/api/placeholder/250/250"
                alt="ASCVD Risk Calculator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
            ASCVD Risk Calculator
          </h1>
          <p className="text-sm sm:text-base text-center text-gray-500 mb-6">
            Create your personalized health account
          </p>

          <form onSubmit={handleSubmit}>{renderStep()}</form>

          <div className="text-center mt-4 text-sm sm:text-base">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              to="/login"
              className="text-emerald-600 font-bold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-2 py-3 sm:py-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors duration-300 ${
                step === item ? "bg-emerald-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 sm:w-96 mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Success!</h3>
              <button
                onClick={handleConfirmationClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex justify-center my-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <Check size={32} className="text-emerald-500" />
              </div>
            </div>
            <p className="text-center text-gray-700 mb-4">
              Your account has been successfully created!
            </p>
            <button
              onClick={handleConfirmationClose}
              className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
            >
              Continue to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
