import React, { useState, useSyncExternalStore } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  User,
  Heart,
  CalendarDays,
  MapPin,
  Mail,
  Phone,
  Edit,
  Upload,
  BarChart,
  TrendingUp,
} from "lucide-react";
import { selectCompleteHistory } from "../../features/healthSlice";
import {
  selectIsAuthenticated,
  selectAuthUser,
} from "../../features/authSlice";
const Profile = () => {
  const authUser = useSelector(selectAuthUser);

  const isAuthorized = useSelector(selectIsAuthenticated);

  const completeHistory = useSelector(selectCompleteHistory);
  console.log(authUser);
  console.log(isAuthorized);
  const firstName = authUser.firstName;
  const lastName = authUser.lastName;
  const email = authUser.email;
  const dateOfBirth = authUser.dateOfBirth;
  const [userData, setUserData] = useState({
    name: `${firstName} ${lastName}`,
    email: `${email}`,
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    profilePicture: "/api/placeholder/200/200",
    birthdate: `${dateOfBirth}`,
    medicalHistory: {
      height: 180,
      weight: 85,
      bloodPressure: "120/80",
      cholesterolLevel: 190,
    },
  });

  const completeHistory2 = completeHistory.map((assessment) => ({
    ...assessment,
    riskLevel:
      assessment?.risk_Score >= 20
        ? "High"
        : assessment?.risk_Score >= 10
        ? "Moderate"
        : "Low",
    recommendation:
      assessment?.risk_Score >= 20
        ? "Consult with cardiologist"
        : assessment?.risk_Score >= 10
        ? "Lifestyle modifications advised"
        : "Continue current health practices",
  }));

  const [isEditing, setIsEditing] = useState(false);

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserData((prev) => ({
          ...prev,
          profilePicture: event.target.result,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(1);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-blue-50 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={userData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer">
                  <Upload size={16} />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                  />
                </label>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-800">
                {userData.name}
              </h2>
              <p className="text-gray-600 flex items-center space-x-2">
                <User size={16} />
                <span>{calculateAge(userData.birthdate)} years old</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600"
          >
            <Edit size={16} />
            <span>{isEditing ? "Save" : "Edit Profile"}</span>
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <User className="mr-2 text-blue-600" />
              Personal Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-500" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CalendarDays size={16} className="text-blue-500" />
                <span>
                  Born on {new Date(userData.birthdate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <Heart className="mr-2 text-blue-600" />
              Medical Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <BarChart size={16} className="text-blue-500" />
                  Height
                </span>
                <span>{userData.medicalHistory.height} cm</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-blue-500" />
                  Weight
                </span>
                <span>{userData.medicalHistory.weight} kg</span>
              </div>
              <div className="flex justify-between">
                <span>BMI</span>
                <span>
                  {calculateBMI(
                    userData.medicalHistory.height,
                    userData.medicalHistory.weight
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            ASCVD Risk Assessment History
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow rounded-lg overflow-hidden">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Risk Score</th>
                  <th className="p-3 text-left">Risk Level</th>
                  <th className="p-3 text-left">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {completeHistory2.map((assessment, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      assessment.riskLevel === "High"
                        ? "bg-red-50 hover:bg-red-100"
                        : assessment.riskLevel === "Moderate"
                        ? "bg-yellow-50 hover:bg-yellow-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="p-3">
                      {new Date(assessment.date).toLocaleDateString()}
                    </td>
                    <td className="p-3">{assessment.risk_Score}</td>
                    <td className="p-3">
                      <span
                        className={`
                        px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          assessment.riskLevel === "High"
                            ? "bg-red-200 text-red-800"
                            : assessment.riskLevel === "Moderate"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-green-200 text-green-800"
                        }
                      `}
                      >
                        {assessment.riskLevel}
                      </span>
                    </td>
                    <td className="p-3">{assessment.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
