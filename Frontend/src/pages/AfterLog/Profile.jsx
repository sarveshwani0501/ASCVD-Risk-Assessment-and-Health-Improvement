// import React, { useState, useSyncExternalStore } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   User,
//   Heart,
//   CalendarDays,
//   MapPin,
//   Mail,
//   Phone,
//   Edit,
//   Upload,
//   BarChart,
//   TrendingUp,
// } from "lucide-react";
// import { selectCompleteHistory } from "../../features/healthSlice";
// import {
//   selectIsAuthenticated,
//   selectAuthUser,
// } from "../../features/authSlice";
// const Profile = () => {
//   const authUser = useSelector(selectAuthUser);

//   const isAuthorized = useSelector(selectIsAuthenticated);

//   const completeHistory = useSelector(selectCompleteHistory);
//   console.log(authUser);
//   console.log(isAuthorized);
//   const firstName = authUser.firstName;
//   const lastName = authUser.lastName;
//   const email = authUser.email;
//   const dateOfBirth = authUser.dateOfBirth;
//   const [userData, setUserData] = useState({
//     name: `${firstName} ${lastName}`,
//     email: `${email}`,
//     phone: "+1 (555) 123-4567",
//     location: "New York, NY",
//     profilePicture: "/api/placeholder/200/200",
//     birthdate: `${dateOfBirth}`,
//     medicalHistory: {
//       height: 180,
//       weight: 85,
//       bloodPressure: "120/80",
//       cholesterolLevel: 190,
//     },
//   });

//   const completeHistory2 = completeHistory.map((assessment) => ({
//     ...assessment,
//     riskLevel:
//       assessment?.risk_Score >= 20
//         ? "High"
//         : assessment?.risk_Score >= 10
//         ? "Moderate"
//         : "Low",
//     recommendation:
//       assessment?.risk_Score >= 20
//         ? "Consult with cardiologist"
//         : assessment?.risk_Score >= 10
//         ? "Lifestyle modifications advised"
//         : "Continue current health practices",
//   }));

//   const [isEditing, setIsEditing] = useState(false);

//   const handleProfilePicChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setUserData((prev) => ({
//           ...prev,
//           profilePicture: event.target.result,
//         }));
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const calculateAge = (birthdate) => {
//     const today = new Date();
//     const birthDate = new Date(birthdate);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (
//       monthDiff < 0 ||
//       (monthDiff === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       age--;
//     }

//     return age;
//   };

//   const calculateBMI = (height, weight) => {
//     const heightInMeters = height / 100;
//     const bmi = weight / (heightInMeters * heightInMeters);
//     return bmi.toFixed(1);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//         <div className="bg-blue-50 p-6 flex items-center justify-between">
//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <img
//                 src={userData.profilePicture}
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
//               />
//               {isEditing && (
//                 <label className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer">
//                   <Upload size={16} />
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept="image/*"
//                     onChange={handleProfilePicChange}
//                   />
//                 </label>
//               )}
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-blue-800">
//                 {userData.name}
//               </h2>
//               <p className="text-gray-600 flex items-center space-x-2">
//                 <User size={16} />
//                 <span>{calculateAge(userData.birthdate)} years old</span>
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600"
//           >
//             <Edit size={16} />
//             <span>{isEditing ? "Save" : "Edit Profile"}</span>
//           </button>
//         </div>

//         <div className="p-6 grid md:grid-cols-2 gap-6">
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
//               <User className="mr-2 text-blue-600" />
//               Personal Information
//             </h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Mail size={16} className="text-blue-500" />
//                 <span>{userData.email}</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <CalendarDays size={16} className="text-blue-500" />
//                 <span>
//                   Born on {new Date(userData.birthdate).toLocaleDateString()}
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-blue-50 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
//               <Heart className="mr-2 text-blue-600" />
//               Medical Overview
//             </h3>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="flex items-center space-x-2">
//                   <BarChart size={16} className="text-blue-500" />
//                   Height
//                 </span>
//                 <span>{userData.medicalHistory.height} cm</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center space-x-2">
//                   <TrendingUp size={16} className="text-blue-500" />
//                   Weight
//                 </span>
//                 <span>{userData.medicalHistory.weight} kg</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>BMI</span>
//                 <span>
//                   {calculateBMI(
//                     userData.medicalHistory.height,
//                     userData.medicalHistory.weight
//                   )}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 bg-gray-50">
//           <h3 className="text-lg font-semibold text-blue-800 mb-4">
//             ASCVD Risk Assessment History
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow rounded-lg overflow-hidden">
//               <thead className="bg-blue-100">
//                 <tr>
//                   <th className="p-3 text-left">Date</th>
//                   <th className="p-3 text-left">Risk Score</th>
//                   <th className="p-3 text-left">Risk Level</th>
//                   <th className="p-3 text-left">Recommendation</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {completeHistory2.map((assessment, index) => (
//                   <tr
//                     key={index}
//                     className={`border-b ${
//                       assessment.riskLevel === "High"
//                         ? "bg-red-50 hover:bg-red-100"
//                         : assessment.riskLevel === "Moderate"
//                         ? "bg-yellow-50 hover:bg-yellow-100"
//                         : "hover:bg-gray-50"
//                     }`}
//                   >
//                     <td className="p-3">
//                       {new Date(assessment.date).toLocaleDateString()}
//                     </td>
//                     <td className="p-3">{assessment.risk_Score}</td>
//                     <td className="p-3">
//                       <span
//                         className={`
//                         px-3 py-1 rounded-full text-xs font-semibold
//                         ${
//                           assessment.riskLevel === "High"
//                             ? "bg-red-200 text-red-800"
//                             : assessment.riskLevel === "Moderate"
//                             ? "bg-yellow-200 text-yellow-800"
//                             : "bg-green-200 text-green-800"
//                         }
//                       `}
//                       >
//                         {assessment.riskLevel}
//                       </span>
//                     </td>
//                     <td className="p-3">{assessment.recommendation}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
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
  Activity,
  Ruler,
  Weight,
  Droplet,
  Camera,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingDown,
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

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return { status: "Underweight", color: "text-yellow-600" };
    if (bmi < 25) return { status: "Normal", color: "text-green-600" };
    if (bmi < 30) return { status: "Overweight", color: "text-orange-600" };
    return { status: "Obese", color: "text-red-600" };
  };

  const bmiValue = calculateBMI(
    userData.medicalHistory.height,
    userData.medicalHistory.weight
  );
  const bmiStatus = getBMIStatus(parseFloat(bmiValue));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My Profile
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your personal information and health data
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          {/* Cover Section with Gradient */}
          <div className="relative h-32 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                  <img
                    src={userData.profilePicture}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <label className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-2.5 cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200">
                    <Camera size={18} />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {userData.name}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User size={18} className="text-blue-500" />
                    <span>{calculateAge(userData.birthdate)} years old</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={18} className="text-blue-500" />
                    <span>{userData.email}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <Edit size={18} />
                <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {/* Height Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                    <Ruler className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Height</p>
                <p className="text-2xl font-bold text-gray-900">
                  {userData.medicalHistory.height}
                  <span className="text-base text-gray-600 ml-1">cm</span>
                </p>
              </div>

              {/* Weight Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-md">
                    <Weight className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Weight</p>
                <p className="text-2xl font-bold text-gray-900">
                  {userData.medicalHistory.weight}
                  <span className="text-base text-gray-600 ml-1">kg</span>
                </p>
              </div>

              {/* BMI Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-md">
                    <Activity className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">BMI</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-bold text-gray-900">{bmiValue}</p>
                  <span className={`text-sm font-semibold ${bmiStatus.color}`}>
                    {bmiStatus.status}
                  </span>
                </div>
              </div>

              {/* Blood Pressure Card */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-md">
                    <Droplet className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">Blood Pressure</p>
                <p className="text-2xl font-bold text-gray-900">
                  {userData.medicalHistory.bloodPressure}
                  <span className="text-base text-gray-600 ml-1">mmHg</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Health Assessment History */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                ASCVD Risk Assessment History
              </h3>
            </div>
            <p className="text-gray-600 ml-13">
              Track your cardiovascular health risk over time
            </p>
          </div>

          {completeHistory2.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>Date</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      <div className="flex items-center space-x-2">
                        <BarChart size={16} />
                        <span>Risk Score</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Activity size={16} />
                        <span>Risk Level</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Heart size={16} />
                        <span>Recommendation</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {completeHistory2.map((assessment, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(assessment.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-gray-900">
                          {assessment.risk_Score}%
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold ${
                            assessment.riskLevel === "High"
                              ? "bg-red-100 text-red-700 border border-red-200"
                              : assessment.riskLevel === "Moderate"
                              ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                              : "bg-green-100 text-green-700 border border-green-200"
                          }`}
                        >
                          {assessment.riskLevel === "High" ? (
                            <AlertCircle size={14} />
                          ) : assessment.riskLevel === "Moderate" ? (
                            <TrendingUp size={14} />
                          ) : (
                            <CheckCircle size={14} />
                          )}
                          <span>{assessment.riskLevel}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {assessment.recommendation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-gray-400" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Assessment History
              </h3>
              <p className="text-gray-600">
                Complete your first risk assessment to see your history here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
