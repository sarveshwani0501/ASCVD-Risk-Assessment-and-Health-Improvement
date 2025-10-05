// import React, { useEffect } from "react";
// import {
//   Heart,
//   Activity,
//   ArrowRight,
//   Calendar,
//   AlertCircle,
//   User,
//   Settings,
//   LogOut,
//   FileText,
//   HeartPulse,
//   Utensils,
//   ChevronUp,
//   ChevronDown,
//   TrendingDown,
//   TrendingUp,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchUserHealthHistory,
//   selectUserData,
//   selectLatestAssessment,
//   selectHealthHistoryStatus,
//   selectHealthHistoryError,
//   selectCompleteHistory,
// } from "D:/Projects/ASCVD Risk Assessment/Frontend/src/features/healthSlice";

// import { logoutUser } from "../../features/authSlice";

// const HomeA = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const userId = useSelector((state) => state.auth.user?._id);

//   const userData = useSelector(selectUserData);
//   const latestAssessment = useSelector(selectLatestAssessment);
//   const status = useSelector(selectHealthHistoryStatus);
//   const error = useSelector(selectHealthHistoryError);
//   const completeHistory = useSelector(selectCompleteHistory);

//   useEffect(() => {
//     dispatch(fetchUserHealthHistory(userId));
//   }, [dispatch, userId]);

//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   const calculateRiskDifference = () => {
//     if (!latestAssessment) return { value: 0, improved: false };

//     return { value: 2.3, improved: true };
//   };
//   if (latestAssessment && latestAssessment.risk_Score) {
//     console.log(latestAssessment.risk_Score);
//   } else {
//     console.log("Data or risk_Score is unavailable");
//   }
//   const riskScore =
//     latestAssessment && latestAssessment.risk_Score
//       ? Number(latestAssessment.risk_Score).toFixed(2)
//       : 0;

//   const getRiskStatus = (riskScore) => {
//     if (riskScore <= 5) return "Low";
//     if (riskScore < 7.5) return "Borderline";
//     if (riskScore < 20) return "Moderate";
//     return "High";
//   };

//   console.log(completeHistory.length);
//   let prevRisk = 0;
//   let currRisk = riskScore;
//   let riskDiff = 0;
//   let roundedRiskDiff = 0;
//   if (completeHistory.length > 2) {
//     prevRisk = completeHistory[completeHistory.length - 2].risk_Score;
//     currRisk = latestAssessment.risk_Score;
//     riskDiff = ((currRisk - prevRisk) / prevRisk) * 100;
//     roundedRiskDiff = Math.round(riskDiff * 100) / 100;
//   }

//   console.log(roundedRiskDiff);
//   if (status === "failed") {
//     return (
//       <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen sm:my-1 flex justify-center items-center">
//         <p>Error loading health data: {error}</p>
//       </div>
//     );
//   }

//   const riskDifference = calculateRiskDifference();
//   const riskStatus = getRiskStatus(riskScore);

//   const getRiskColor = (status) => {
//     switch (status) {
//       case "Low":
//         return "text-green-500";
//       case "Borderline":
//         return "text-yellow-500";
//       case "Moderate":
//         return "text-orange-500";
//       case "High":
//         return "text-red-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   const getRiskBgColor = (status) => {
//     switch (status) {
//       case "Low":
//         return "bg-green-500";
//       case "Borderline":
//         return "bg-yellow-500";
//       case "Moderate":
//         return "bg-orange-500";
//       case "High":
//         return "bg-red-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getRiskLightBgColor = (status) => {
//     switch (status) {
//       case "Low":
//         return "bg-green-50";
//       case "Borderline":
//         return "bg-yellow-50";
//       case "Moderate":
//         return "bg-orange-50";
//       case "High":
//         return "bg-red-50";
//       default:
//         return "bg-gray-50";
//     }
//   };

//   const riskColor = getRiskColor(riskStatus);
//   const riskBgColor = getRiskBgColor(riskStatus);
//   const riskLightBgColor = getRiskLightBgColor(riskStatus);

//   const handleLogout = async () => {
//     try {
//       await dispatch(logoutUser()).unwrap();

//       navigate("/");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen sm:my-1">
//       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6 mb-8">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-2">
//           <div>
//             <h1 className="text-2xl font-bold mb-2">
//               Welcome back, {userData?.firstName || "User"}
//             </h1>
//             <p className="text-gray-600">Your latest ASCVD risk assessment</p>
//           </div>
//           <div className="mt-4 md:mt-0 md:w-[700px] flex flex-col bg-white p-5 rounded-lg shadow-sm">
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <div className="flex flex-col mb-3 md:mb-0">
//                 <p className="text-sm text-gray-500">10-Year ASCVD Risk</p>
//                 <div className="flex items-end">
//                   <p className={`text-4xl font-bold ${riskColor}`}>
//                     {riskScore}%
//                   </p>
//                   <p className="text-lg font-medium ml-2 mb-1 text-gray-700">
//                     {riskStatus} Risk
//                   </p>
//                 </div>
//                 <div className="flex items-center mt-1">
//                   {roundedRiskDiff <= 0 ? (
//                     <TrendingDown size={16} className="text-green-500 mr-1" />
//                   ) : (
//                     <TrendingUp size={16} className="text-red-500 mr-1" />
//                   )}
//                   <p
//                     className={`text-sm ${
//                       roundedRiskDiff <= 0 ? "text-green-500" : "text-red-500"
//                     }`}
//                   >
//                     {Math.abs(roundedRiskDiff)}% from previous assessment
//                   </p>
//                 </div>
//               </div>

//               <div className="w-full md:w-1/2">
//                 <div className="h-4 bg-gray-200 rounded-full overflow-hidden w-full flex">
//                   <div
//                     className="h-full bg-green-500"
//                     style={{ width: "25%" }}
//                   ></div>
//                   <div
//                     className="h-full bg-yellow-500"
//                     style={{ width: "25%" }}
//                   ></div>
//                   <div
//                     className="h-full bg-orange-500"
//                     style={{ width: "25%" }}
//                   ></div>
//                   <div
//                     className="h-full bg-red-500"
//                     style={{ width: "25%" }}
//                   ></div>
//                 </div>

//                 <div className="flex justify-between text-xs text-gray-600 mt-1">
//                   <span>Low</span>
//                   <span>Borderline</span>
//                   <span>Moderate</span>
//                   <span>High</span>
//                 </div>

//                 <div className="relative h-6 mt-1">
//                   <div
//                     className="absolute bottom-5 transform -translate-x-1/2"
//                     style={{
//                       left: `${Math.min(Math.max(riskScore * 3.33, 5), 95)}%`,
//                     }}
//                   >
//                     <div
//                       className={`w-0 h-0 border-l-8 border-r-8 border-red-400 border-b-8 border-l-transparent border-r-transparent`}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               className={`mt-4 p-3 ${riskLightBgColor} rounded-lg border border-gray-200`}
//             >
//               <div className="flex justify-left items-center">
//                 <p className={`font-medium ${riskColor}`}>
//                   Key Factors Affecting Your Score:
//                 </p>
//                 <div className="flex gap-1">
//                   {latestAssessment?.is_smoking === "YES" && (
//                     <span className="ml-2 px-2 py-1 bg-gray-200 text-xs rounded-full">
//                       Smoking
//                     </span>
//                   )}
//                   {latestAssessment?.diabetes === "YES" && (
//                     <span className="ml-2 px-2 py-1 bg-gray-200 text-xs rounded-full">
//                       Diabetes
//                     </span>
//                   )}
//                   {latestAssessment?.sysBP > 130 && (
//                     <span className="ml-2 px-2 py-1 bg-gray-200 text-xs rounded-full">
//                       Blood Pressure
//                     </span>
//                   )}
//                   {latestAssessment?.totChol > 200 && (
//                     <span className="ml-2 px-2 py-1 bg-gray-200 text-xs rounded-full">
//                       Cholesterol
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-4 mt-6">
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center"
//             onClick={() => navigate("/user/risk")}
//           >
//             <Activity size={16} className="mr-2" /> Update Risk Factors
//           </button>
//           <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition flex items-center">
//             <FileText size={16} className="mr-2" /> View Full Report
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
//           <p className="text-sm text-gray-500">Last Assessment</p>
//           <p className="font-bold">
//             {latestAssessment ? formatDate(new Date()) : "No data"}
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
//           <p className="text-sm text-gray-500">Blood Pressure</p>
//           <p className="font-bold">
//             {latestAssessment
//               ? `${latestAssessment.sysBP}/${latestAssessment.diaBP} mmHg`
//               : "No data"}
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
//           <p className="text-sm text-gray-500">Total Cholesterol</p>
//           <p className="font-bold">
//             {latestAssessment ? `${latestAssessment.totChol} mg/dL` : "No data"}
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
//           <p className="text-sm text-gray-500">HDL Cholesterol</p>
//           <p className="font-bold">
//             {latestAssessment
//               ? `${latestAssessment.totChol * 0.3} mg/dL`
//               : "No data"}
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-6 mb-8">
//         <div className="flex-1">
//           <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
//           <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
//             <div className="flex items-start mb-4">
//               <AlertCircle className={`${riskColor} mr-3 mt-1`} size={20} />
//               <div>
//                 <h3 className="font-semibold">{riskStatus} Risk Level</h3>
//                 <p className="text-sm text-gray-600">
//                   Your 10-year ASCVD risk is {riskScore}%, which is considered{" "}
//                   {riskStatus.toLowerCase()}. This means you have approximately
//                   a {riskScore}% chance of experiencing a cardiovascular event
//                   in the next 10 years.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <Activity className="text-blue-500 mr-3 mt-1" size={20} />
//               <div>
//                 <h3 className="font-semibold">Improvement Opportunities</h3>
//                 <p className="text-sm text-gray-600">
//                   {roundedRiskDiff <= 0
//                     ? `Your risk score has improved by ${Math.abs(
//                         roundedRiskDiff
//                       )}% since your last assessment. Continue with your current lifestyle changes and medication adherence.`
//                     : `Your risk score has increased by ${Math.abs(
//                         roundedRiskDiff
//                       )}% since your last assessment. Consider reviewing your lifestyle factors and medication adherence.`}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-1">
//           <h2 className="text-xl font-semibold mb-4">Resources</h2>
//           <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
//             <div className="flex items-start mb-4 pb-4 border-b border-gray-100">
//               <div className="mr-3 mt-1">
//                 <div className="bg-purple-100 p-2 rounded-full">
//                   <Heart size={16} className="text-purple-600" />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-medium">Understanding Your ASCVD Risk</h3>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Learn more about what your risk score means and how it's
//                   calculated.
//                 </p>
//                 <a
//                   href="https://www.acc.org/-/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Tools-and-Practice-Support/Risk-Communications/3-Explaining-ASCVD-Risk-Scores-for-Primary-Prevention.pdf?utm_source=chatgpt.com"
//                   className="text-sm text-blue-600 hover:underline flex items-center"
//                 >
//                   Read article <ArrowRight size={14} className="ml-1" />
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="mr-3 mt-1">
//                 <div className="bg-green-100 p-2 rounded-full">
//                   <Activity size={16} className="text-green-600" />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-medium">Lifestyle Modifications</h3>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Simple changes to reduce your cardiovascular risk.
//                 </p>
//                 <Link
//                   to="/user/healthTips"
//                   className="text-sm text-blue-600 hover:underline flex items-center"
//                 >
//                   View recommendations <ArrowRight size={14} className="ml-1" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <button
//               onClick={() => {
//                 navigate("/user/dashboard");
//               }}
//               className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:bg-gray-50"
//             >
//               <div className="bg-blue-100 p-3 rounded-full mb-2">
//                 <Activity size={20} className="text-blue-600" />
//               </div>
//               <p className="text-sm font-medium">Dashboard</p>
//             </button>
//             <button
//               className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:bg-gray-50"
//               onClick={() => {
//                 navigate("/user/risk");
//               }}
//             >
//               <div className="bg-purple-100 p-3 rounded-full mb-2">
//                 <HeartPulse size={20} className="text-purple-600" />
//               </div>
//               <p className="text-sm font-medium">Risk Assessment</p>
//             </button>
//             <button
//               className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:bg-gray-50"
//               onClick={() => {
//                 navigate("/user/healthTips");
//               }}
//             >
//               <div className="bg-green-100 p-3 rounded-full mb-2">
//                 <Utensils size={20} className="text-green-600" />
//               </div>
//               <p className="text-sm font-medium">Diet & Exercise</p>
//             </button>
//             <button
//               className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:bg-gray-50"
//               onClick={handleLogout}
//             >
//               <div className="bg-red-100 p-3 rounded-full mb-2">
//                 <LogOut size={20} className="text-red-600" />
//               </div>
//               <p className="text-sm font-medium">Log Out</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeA;

import React, { useEffect } from "react";
import {
  Heart,
  Activity,
  ArrowRight,
  Calendar,
  AlertCircle,
  User,
  Settings,
  LogOut,
  FileText,
  HeartPulse,
  Utensils,
  ChevronUp,
  ChevronDown,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
import {
  fetchUserHealthHistory,
  selectUserData,
  selectLatestAssessment,
  selectHealthHistoryStatus,
  selectHealthHistoryError,
  selectCompleteHistory,
} from "D:/Projects/ASCVD Risk Assessment/Frontend/src/features/healthSlice";

import { logoutUser } from "../../features/authSlice";

const HomeA = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user?._id);
  const userData = useSelector(selectUserData);
  const latestAssessment = useSelector(selectLatestAssessment);
  const status = useSelector(selectHealthHistoryStatus);
  const error = useSelector(selectHealthHistoryError);
  const completeHistory = useSelector(selectCompleteHistory);

  useEffect(() => {
    // Uncomment and use your actual action:
    if (userId) {
      console.log("Dispatching fetchUserHealthHistory with userId:", userId);
      dispatch(fetchUserHealthHistory(userId));
    }
  }, [dispatch, userId]);

  // Debug logs
  console.log("Current state values:");
  console.log("- userId:", userId);
  console.log("- userData:", userData);
  console.log("- latestAssessment:", latestAssessment);
  console.log("- status:", status);
  console.log("- error:", error);
  console.log("- completeHistory:", completeHistory);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateRiskDifference = () => {
    if (!latestAssessment) return { value: 0, improved: false };
    return { value: 2.3, improved: true };
  };

  if (latestAssessment && latestAssessment.risk_Score) {
    console.log(latestAssessment.risk_Score);
  } else {
    console.log("Data or risk_Score is unavailable");
  }

  const riskScore =
    latestAssessment && latestAssessment.risk_Score
      ? Number(latestAssessment.risk_Score).toFixed(2)
      : 0;

  const getRiskStatus = (riskScore) => {
    if (riskScore <= 5) return "Low";
    if (riskScore < 7.5) return "Borderline";
    if (riskScore < 20) return "Moderate";
    return "High";
  };
  console.log(completeHistory);
  console.log(completeHistory.length);
  let prevRisk = 0;
  let currRisk = riskScore;
  let riskDiff = 0;
  let roundedRiskDiff = 0;
  if (completeHistory.length > 2) {
    prevRisk = completeHistory[completeHistory.length - 2].risk_Score;
    currRisk = latestAssessment.risk_Score;
    riskDiff = ((currRisk - prevRisk) / prevRisk) * 100;
    roundedRiskDiff = Math.round(riskDiff * 100) / 100;
  }

  console.log(roundedRiskDiff);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex justify-center items-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
            <Activity className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Loading Your Data
          </h2>
          <p className="text-gray-600">
            Please wait while we fetch your health assessment...
          </p>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex justify-center items-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Error Loading Data
          </h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => dispatch(fetchUserHealthHistory(userId))}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const riskDifference = calculateRiskDifference();
  const riskStatus = getRiskStatus(riskScore);

  const getRiskColor = (status) => {
    switch (status) {
      case "Low":
        return "text-green-500";
      case "Borderline":
        return "text-yellow-500";
      case "Moderate":
        return "text-orange-500";
      case "High":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getRiskBgColor = (status) => {
    switch (status) {
      case "Low":
        return "bg-green-500";
      case "Borderline":
        return "bg-yellow-500";
      case "Moderate":
        return "bg-orange-500";
      case "High":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRiskLightBgColor = (status) => {
    switch (status) {
      case "Low":
        return "bg-green-50 border-green-200";
      case "Borderline":
        return "bg-yellow-50 border-yellow-200";
      case "Moderate":
        return "bg-orange-50 border-orange-200";
      case "High":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const riskColor = getRiskColor(riskStatus);
  const riskBgColor = getRiskBgColor(riskStatus);
  const riskLightBgColor = getRiskLightBgColor(riskStatus);

  const handleLogout = async () => {
    try {
      // Uncomment and use your actual action:
      await dispatch(logoutUser()).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="bg-white rounded-3xl shadow-sm p-8 mb-8 border border-blue-100">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome back, {userData?.firstName || "User"} 👋
              </h1>
              <p className="text-gray-600 text-lg">
                Your latest ASCVD risk assessment
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                onClick={() => navigate("/user/risk")}
              >
                <Activity size={18} />
                Update Risk Factors
              </button>
              <button className="px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 font-medium">
                <FileText size={18} />
                View Full Report
              </button>
            </div>
          </div>
        </div>

        {/* Main Risk Score Card */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg p-8 mb-8 border border-blue-100">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left: Risk Score */}
            <div className="flex-1">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-2">
                10-Year ASCVD Risk Score
              </p>
              <div className="flex items-end gap-3 mb-3">
                <p className={`text-6xl md:text-7xl font-bold ${riskColor}`}>
                  {riskScore}%
                </p>
                <p className="text-2xl font-semibold mb-2 text-gray-700">
                  {riskStatus} Risk
                </p>
              </div>
              <div className="flex items-center gap-2 mb-6">
                {roundedRiskDiff <= 0 ? (
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-green-100 rounded-full">
                    <TrendingDown size={16} className="text-green-600" />
                    <p className="text-sm font-medium text-green-600">
                      {Math.abs(roundedRiskDiff)}% improved
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-red-100 rounded-full">
                    <TrendingUp size={16} className="text-red-600" />
                    <p className="text-sm font-medium text-red-600">
                      {Math.abs(roundedRiskDiff)}% increased
                    </p>
                  </div>
                )}
                <span className="text-gray-500 text-sm">
                  from previous assessment
                </span>
              </div>

              {/* Key Factors */}
              <div className={`p-4 ${riskLightBgColor} rounded-2xl border`}>
                <p
                  className={`font-semibold ${riskColor} mb-3 flex items-center gap-2`}
                >
                  <AlertCircle size={18} />
                  Key Factors Affecting Your Score
                </p>
                <div className="flex flex-wrap gap-2">
                  {latestAssessment?.is_smoking === "YES" && (
                    <span className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full font-medium shadow-sm">
                      🚬 Smoking
                    </span>
                  )}
                  {latestAssessment?.diabetes === "YES" && (
                    <span className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full font-medium shadow-sm">
                      💉 Diabetes
                    </span>
                  )}
                  {latestAssessment?.sysBP > 130 && (
                    <span className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full font-medium shadow-sm">
                      💓 High BP
                    </span>
                  )}
                  {latestAssessment?.totChol > 200 && (
                    <span className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full font-medium shadow-sm">
                      📊 Cholesterol
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Risk Scale */}
            <div className="w-full lg:w-[450px]">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-sm font-medium text-gray-600 mb-4">
                  Risk Level Scale
                </p>
                <div className="relative">
                  <div className="h-6 bg-gray-200 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: "25%" }}
                    ></div>
                    <div
                      className="h-full bg-yellow-500"
                      style={{ width: "25%" }}
                    ></div>
                    <div
                      className="h-full bg-orange-500"
                      style={{ width: "25%" }}
                    ></div>
                    <div
                      className="h-full bg-red-500"
                      style={{ width: "25%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs font-medium text-gray-600 mt-3">
                    <span>Low</span>
                    <span>Borderline</span>
                    <span>Moderate</span>
                    <span>High</span>
                  </div>

                  <div className="relative h-8 mt-2">
                    <div
                      className="absolute bottom-0 transform -translate-x-1/2 transition-all duration-500"
                      style={{
                        left: `${Math.min(Math.max(riskScore * 3.33, 5), 95)}%`,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-blue-500"></div>
                        <div className="w-1 h-4 bg-blue-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500 font-medium">
                Last Assessment
              </p>
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {latestAssessment ? formatDate(new Date()) : "No data"}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500 font-medium">
                Blood Pressure
              </p>
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {latestAssessment
                ? `${latestAssessment.sysBP}/${latestAssessment.diaBP}`
                : "No data"}
            </p>
            <p className="text-xs text-gray-500 mt-1">mmHg</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500 font-medium">
                Total Cholesterol
              </p>
              <Heart className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {latestAssessment ? latestAssessment.totChol : "No data"}
            </p>
            <p className="text-xs text-gray-500 mt-1">mg/dL</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500 font-medium">
                HDL Cholesterol
              </p>
              <HeartPulse className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {latestAssessment
                ? (latestAssessment.totChol * 0.3).toFixed(0)
                : "No data"}
            </p>
            <p className="text-xs text-gray-500 mt-1">mg/dL</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Key Insights */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Key Insights</h2>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
                <div
                  className={`w-12 h-12 ${riskLightBgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <AlertCircle className={riskColor} size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {riskStatus} Risk Level
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your 10-year ASCVD risk is {riskScore}%, which is considered{" "}
                    {riskStatus.toLowerCase()}. This means you have
                    approximately a {riskScore}% chance of experiencing a
                    cardiovascular event in the next 10 years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Improvement Opportunities
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {roundedRiskDiff <= 0
                      ? `Your risk score has improved by ${Math.abs(
                          roundedRiskDiff
                        )}% since your last assessment. Continue with your current lifestyle changes and medication adherence.`
                      : `Your risk score has increased by ${Math.abs(
                          roundedRiskDiff
                        )}% since your last assessment. Consider reviewing your lifestyle factors and medication adherence.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resources & Quick Access */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Resources</h2>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Understanding Your ASCVD Risk
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Learn more about what your risk score means and how it's
                    calculated.
                  </p>
                  <a
                    href="https://www.acc.org/-/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Tools-and-Practice-Support/Risk-Communications/3-Explaining-ASCVD-Risk-Scores-for-Primary-Prevention.pdf?utm_source=chatgpt.com"
                    className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1 text-sm group"
                  >
                    Read article
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>

              <div className="h-px bg-gray-100"></div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity size={20} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Lifestyle Modifications
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Simple changes to reduce your cardiovascular risk.
                  </p>
                  <Link
                    to="/user/healthTips"
                    className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1 text-sm group"
                  >
                    View recommendations
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Access
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => navigate("/user/dashboard")}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Activity size={24} className="text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Dashboard</p>
                </button>

                <button
                  onClick={() => navigate("/user/risk")}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <HeartPulse size={24} className="text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Risk Assessment</p>
                </button>

                <button
                  onClick={() => navigate("/user/healthTips")}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Utensils size={24} className="text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Diet & Exercise</p>
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <LogOut size={24} className="text-red-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Log Out</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeA;
