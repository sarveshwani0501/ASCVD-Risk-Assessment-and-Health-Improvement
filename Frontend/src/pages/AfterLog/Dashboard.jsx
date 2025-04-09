// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   AlertCircle,
//   Heart,
//   Activity,
//   Droplet,
//   Clock,
//   TrendingDown,
//   TrendingUp,
//   Calendar,
//   Clipboard,
// } from "lucide-react";

// const Dashboard = () => {
//   // Sample data - replace with actual data from your backend
//   const [userData] = useState({
//     name: "John Doe",
//     lastAssessment: "2025-03-12",
//     riskScores: [
//       { date: "Jan 2025", score: 7.2 },
//       { date: "Feb 2025", score: 6.8 },
//       { date: "Mar 2025", score: 5.9 },
//     ],
//     bloodPressure: [
//       { date: "Jan 2025", systolic: 135, diastolic: 85 },
//       { date: "Feb 2025", systolic: 130, diastolic: 83 },
//       { date: "Mar 2025", systolic: 128, diastolic: 82 },
//     ],
//     cholesterol: [
//       { date: "Jan 2025", hdl: 45, ldl: 128, total: 195 },
//       { date: "Feb 2025", hdl: 47, ldl: 125, total: 190 },
//       { date: "Mar 2025", hdl: 48, ldl: 120, total: 185 },
//     ],
//     glucose: [
//       { date: "Jan 2025", value: 102 },
//       { date: "Feb 2025", value: 98 },
//       { date: "Mar 2025", value: 97 },
//     ],
//     smoking: false,
//     medication: {
//       statins: true,
//       antihypertensive: true,
//       aspirin: false,
//     },
//     googleFitConnected: true,
//     googleFitData: {
//       steps: [
//         { date: "Mar 13", value: 8245 },
//         { date: "Mar 14", value: 7890 },
//         { date: "Mar 15", value: 9124 },
//         { date: "Mar 16", value: 5678 },
//         { date: "Mar 17", value: 10245 },
//         { date: "Mar 18", value: 8765 },
//         { date: "Mar 19", value: 6543 },
//       ],
//       heartRate: [
//         { date: "Mar 13", average: 72 },
//         { date: "Mar 14", average: 74 },
//         { date: "Mar 15", average: 71 },
//         { date: "Mar 16", average: 73 },
//         { date: "Mar 17", average: 70 },
//         { date: "Mar 18", average: 72 },
//         { date: "Mar 19", average: 71 },
//       ],
//       activeMinutes: [
//         { date: "Mar 13", value: 45 },
//         { date: "Mar 14", value: 38 },
//         { date: "Mar 15", value: 52 },
//         { date: "Mar 16", value: 30 },
//         { date: "Mar 17", value: 58 },
//         { date: "Mar 18", value: 45 },
//         { date: "Mar 19", value: 35 },
//       ],
//     },
//   });

//   // Calculate risk trend
//   const latestRisk = userData.riskScores[userData.riskScores.length - 1].score;
//   const previousRisk =
//     userData.riskScores[userData.riskScores.length - 2].score;
//   const riskTrend =
//     latestRisk < previousRisk
//       ? "down"
//       : latestRisk > previousRisk
//       ? "up"
//       : "stable";
//   const riskDifference = Math.abs(latestRisk - previousRisk).toFixed(1);

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Health Risk Dashboard
//         </h1>
//         <div className="flex items-center text-gray-600">
//           <Clock className="mr-2" size={16} />
//           <span>
//             Last assessment:{" "}
//             {new Date(userData.lastAssessment).toLocaleDateString()}
//           </span>
//         </div>
//       </div>

//       {/* Risk Score Summary */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-gray-500 text-sm uppercase font-semibold">
//                 Current ASCVD Risk
//               </h2>
//               <div className="flex items-baseline">
//                 <span className="text-4xl font-bold text-gray-800">
//                   {latestRisk}%
//                 </span>
//                 <span className="ml-2 text-sm text-gray-500">10-year risk</span>
//               </div>
//             </div>
//             <div
//               className={`p-3 rounded-full ${
//                 latestRisk < 5
//                   ? "bg-green-100"
//                   : latestRisk < 7.5
//                   ? "bg-yellow-100"
//                   : "bg-red-100"
//               }`}
//             >
//               <Heart
//                 className={`${
//                   latestRisk < 5
//                     ? "text-green-500"
//                     : latestRisk < 7.5
//                     ? "text-yellow-500"
//                     : "text-red-500"
//                 }`}
//                 size={24}
//               />
//             </div>
//           </div>
//           <div className="mt-4 flex items-center">
//             {riskTrend === "down" ? (
//               <TrendingDown className="text-green-500 mr-1" size={16} />
//             ) : riskTrend === "up" ? (
//               <TrendingUp className="text-red-500 mr-1" size={16} />
//             ) : (
//               <Activity className="text-blue-500 mr-1" size={16} />
//             )}
//             <span
//               className={`text-sm ${
//                 riskTrend === "down"
//                   ? "text-green-500"
//                   : riskTrend === "up"
//                   ? "text-red-500"
//                   : "text-blue-500"
//               }`}
//             >
//               {riskTrend === "down"
//                 ? `${riskDifference}% decrease`
//                 : riskTrend === "up"
//                 ? `${riskDifference}% increase`
//                 : "No change"}{" "}
//               since last assessment
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-gray-500 text-sm uppercase font-semibold">
//                 Blood Pressure
//               </h2>
//               <div className="flex items-baseline">
//                 <span className="text-4xl font-bold text-gray-800">
//                   {
//                     userData.bloodPressure[userData.bloodPressure.length - 1]
//                       .systolic
//                   }
//                   /
//                   {
//                     userData.bloodPressure[userData.bloodPressure.length - 1]
//                       .diastolic
//                   }
//                 </span>
//                 <span className="ml-2 text-sm text-gray-500">mmHg</span>
//               </div>
//             </div>
//             <div className="p-3 rounded-full bg-blue-100">
//               <Droplet className="text-blue-500" size={24} />
//             </div>
//           </div>
//           <div className="mt-4">
//             <span className="text-sm text-gray-600">
//               {userData.bloodPressure[userData.bloodPressure.length - 1]
//                 .systolic > 130 ||
//               userData.bloodPressure[userData.bloodPressure.length - 1]
//                 .diastolic > 80
//                 ? "Above optimal range"
//                 : "Within optimal range"}
//             </span>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-gray-500 text-sm uppercase font-semibold">
//                 Cholesterol
//               </h2>
//               <div className="flex items-baseline">
//                 <span className="text-4xl font-bold text-gray-800">
//                   {userData.cholesterol[userData.cholesterol.length - 1].total}
//                 </span>
//                 <span className="ml-2 text-sm text-gray-500">mg/dL</span>
//               </div>
//             </div>
//             <div className="p-3 rounded-full bg-purple-100">
//               <Clipboard className="text-purple-500" size={24} />
//             </div>
//           </div>
//           <div className="mt-4">
//             <span className="text-sm text-gray-600">
//               HDL: {userData.cholesterol[userData.cholesterol.length - 1].hdl}{" "}
//               mg/dL | LDL:{" "}
//               {userData.cholesterol[userData.cholesterol.length - 1].ldl} mg/dL
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             ASCVD Risk History
//           </h2>

//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={userData.riskScores}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="score"
//                 stroke="#8884d8"
//                 name="Risk Score %"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             Blood Pressure History
//           </h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={userData.bloodPressure}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="systolic"
//                 stroke="#ff7300"
//                 name="Systolic"
//               />
//               <Line
//                 type="monotone"
//                 dataKey="diastolic"
//                 stroke="#387908"
//                 name="Diastolic"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Risk Factors */}
//       <div className="bg-white p-6 rounded-xl shadow-md mb-6 z-0">
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">
//           Risk Factors Summary
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 userData.smoking ? "bg-red-100" : "bg-green-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={userData.smoking ? "text-red-500" : "text-green-500"}
//                 size={20}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-700">
//                 Smoking Status
//               </p>
//               <p
//                 className={`text-sm ${
//                   userData.smoking ? "text-red-500" : "text-green-500"
//                 }`}
//               >
//                 {userData.smoking ? "Current Smoker" : "Non-Smoker"}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 userData.cholesterol[userData.cholesterol.length - 1].ldl > 100
//                   ? "bg-yellow-100"
//                   : "bg-green-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   userData.cholesterol[userData.cholesterol.length - 1].ldl >
//                   100
//                     ? "text-yellow-500"
//                     : "text-green-500"
//                 }
//                 size={20}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-700">
//                 LDL Cholesterol
//               </p>
//               <p
//                 className={`text-sm ${
//                   userData.cholesterol[userData.cholesterol.length - 1].ldl >
//                   100
//                     ? "text-yellow-500"
//                     : "text-green-500"
//                 }`}
//               >
//                 {userData.cholesterol[userData.cholesterol.length - 1].ldl}{" "}
//                 mg/dL
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 userData.glucose[userData.glucose.length - 1].value > 100
//                   ? "bg-yellow-100"
//                   : "bg-green-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   userData.glucose[userData.glucose.length - 1].value > 100
//                     ? "text-yellow-500"
//                     : "text-green-500"
//                 }
//                 size={20}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-700">
//                 Fasting Glucose
//               </p>
//               <p
//                 className={`text-sm ${
//                   userData.glucose[userData.glucose.length - 1].value > 100
//                     ? "text-yellow-500"
//                     : "text-green-500"
//                 }`}
//               >
//                 {userData.glucose[userData.glucose.length - 1].value} mg/dL
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 userData.medication.statins ? "bg-green-100" : "bg-yellow-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   userData.medication.statins
//                     ? "text-green-500"
//                     : "text-yellow-500"
//                 }
//                 size={20}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-700">
//                 Statin Medication
//               </p>
//               <p
//                 className={`text-sm ${
//                   userData.medication.statins
//                     ? "text-green-500"
//                     : "text-yellow-500"
//                 }`}
//               >
//                 {userData.medication.statins
//                   ? "Currently Taking"
//                   : "Not Taking"}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 userData.medication.antihypertensive
//                   ? "bg-green-100"
//                   : "bg-yellow-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   userData.medication.antihypertensive
//                     ? "text-green-500"
//                     : "text-yellow-500"
//                 }
//                 size={20}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-700">
//                 Blood Pressure Medication
//               </p>
//               <p
//                 className={`text-sm ${
//                   userData.medication.antihypertensive
//                     ? "text-green-500"
//                     : "text-yellow-500"
//                 }`}
//               >
//                 {userData.medication.antihypertensive
//                   ? "Currently Taking"
//                   : "Not Taking"}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 userData.medication.aspirin ? "bg-green-100" : "bg-gray-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   userData.medication.aspirin
//                     ? "text-green-500"
//                     : "text-gray-500"
//                 }
//                 size={20}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-700">
//                 Aspirin Therapy
//               </p>
//               <p
//                 className={`text-sm ${
//                   userData.medication.aspirin
//                     ? "text-green-500"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {userData.medication.aspirin
//                   ? "Currently Taking"
//                   : "Not Taking"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Google Fit Integration */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">
//             Google Fit Integration
//           </h2>
//           {userData.googleFitConnected ? (
//             <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
//               Connected
//             </span>
//           ) : (
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
//               Connect Google Fit
//             </button>
//           )}
//         </div>

//         {userData.googleFitConnected ? (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 z-0">
//             <div>
//               <h3 className="text-md font-medium text-gray-700 mb-3">
//                 Daily Steps
//               </h3>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={userData.googleFitData.steps}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#4CAF50" name="Steps" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             <div>
//               <h3 className="text-md font-medium text-gray-700 mb-3">
//                 Heart Rate
//               </h3>
//               <ResponsiveContainer width="100%" height={200}>
//                 <LineChart data={userData.googleFitData.heartRate}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="average"
//                     stroke="#E91E63"
//                     name="Avg BPM"
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-500">
//               Connect your Google Fit account to see your activity data here.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   AlertCircle,
//   Heart,
//   Activity,
//   Droplet,
//   Clock,
//   TrendingDown,
//   TrendingUp,
//   Calendar,
//   Clipboard,
// } from "lucide-react";
// import {
//   fetchUserHealthHistory,
//   selectCompleteHistory,
//   selectLatestAssessment,
//   selectUserData,
//   selectHealthHistoryStatus,
//   selectUserFullName,
// } from "../../features/healthSlice"; // Update the path as needed

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const status = useSelector(selectHealthHistoryStatus);
//   const userData = useSelector(selectUserData);
//   const completeHistory = useSelector(selectCompleteHistory);
//   const latestAssessment = useSelector(selectLatestAssessment);
//   const userFullName = useSelector(selectUserFullName);
//   const authUser = useSelector((state) => state.auth.user);
//   // Fetch user health data when component mounts
//   useEffect(() => {
//     if (status === "idle") {
//       // Assuming the user ID is stored somewhere (e.g., in auth state)
//       // You might need to adjust this based on your actual auth implementation
//       // const userId = localStorage.getItem("userId") || "currentUserId";
//       dispatch(fetchUserHealthHistory(authUser._id));
//     }
//   }, [status, dispatch]);
//   useEffect(() => {
//     // This will run whenever completeHistory changes (like when a new assessment is added)
//     if (completeHistory.length > 0 && status === "succeeded") {
//       // The data is already in the Redux store, so we don't need to fetch again
//       // Just ensure the component re-renders with the new data
//     }
//   }, [completeHistory, status]);
//   // Return loading state while data is being fetched
//   if (status === "loading") {
//     return (
//       <div className="p-6 bg-gray-50 rounded-lg flex justify-center items-center h-64">
//         <p className="text-gray-600">Loading health data...</p>
//       </div>
//     );
//   }

//   // Return error state if data fetching failed
//   if (status === "failed") {
//     return (
//       <div className="p-6 bg-gray-50 rounded-lg">
//         <div className="bg-red-100 p-4 rounded-lg">
//           <h2 className="text-red-800 font-medium">Error Loading Data</h2>
//           <p className="text-red-600">
//             Unable to load your health data. Please try again later.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Format the data for charts
//   const formatHistoryData = () => {
//     if (!completeHistory || completeHistory.length === 0) {
//       return {
//         riskScores: [],
//         bloodPressure: [],
//         cholesterol: [],
//         glucose: [],
//         smoking: false,
//         medication: {
//           statins: false,
//           antihypertensive: false,
//           aspirin: false,
//         },
//       };
//     }

//     // Map history data to chart-compatible format
//     const riskScores = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         month: "short",
//         year: "numeric",
//       }),
//       score: assessment.riskScore || 0,
//     }));

//     const bloodPressure = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         month: "short",
//         year: "numeric",
//       }),
//       systolic: assessment.bloodPressure?.systolic || 0,
//       diastolic: assessment.bloodPressure?.diastolic || 0,
//     }));

//     const cholesterol = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         month: "short",
//         year: "numeric",
//       }),
//       hdl: assessment.cholesterol?.hdl || 0,
//       ldl: assessment.cholesterol?.ldl || 0,
//       total: assessment.cholesterol?.total || 0,
//     }));

//     const glucose = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         month: "short",
//         year: "numeric",
//       }),
//       value: assessment.glucose || 0,
//     }));

//     // Latest assessment details
//     const latest = latestAssessment || {};
//     const smoking = latest.smokingStatus === "current";
//     const medication = {
//       statins: latest.medications?.includes("statins") || false,
//       antihypertensive:
//         latest.medications?.includes("antihypertensive") || false,
//       aspirin: latest.medications?.includes("aspirin") || false,
//     };

//     return {
//       riskScores,
//       bloodPressure,
//       cholesterol,
//       glucose,
//       smoking,
//       medication,
//     };
//   };

//   // Get the formatted data
//   const healthData = formatHistoryData();

//   // Prepare Google Fit data if available
//   // Note: This is a placeholder. You might need to adjust based on your actual data structure
//   const googleFitData = latestAssessment?.googleFitData || {
//     connected: false,
//     steps: [],
//     heartRate: [],
//     activeMinutes: [],
//   };

//   // Calculate risk trend
//   const calculateRiskTrend = () => {
//     if (healthData.riskScores.length < 2) {
//       return { trend: "stable", difference: 0 };
//     }

//     const latestRisk =
//       healthData.riskScores[healthData.riskScores.length - 1].score;
//     const previousRisk =
//       healthData.riskScores[healthData.riskScores.length - 2].score;

//     const trend =
//       latestRisk < previousRisk
//         ? "down"
//         : latestRisk > previousRisk
//         ? "up"
//         : "stable";

//     const difference = Math.abs(latestRisk - previousRisk).toFixed(1);

//     return { trend, difference };
//   };

//   const riskTrendData = calculateRiskTrend();
//   const lastAssessmentDate = latestAssessment
//     ? new Date(latestAssessment.date).toLocaleDateString()
//     : "N/A";
//   const latestRiskScore =
//     healthData.riskScores.length > 0
//       ? healthData.riskScores[healthData.riskScores.length - 1].score
//       : 0;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import {
  AlertCircle,
  Heart,
  Activity,
  Droplet,
  Clock,
  TrendingDown,
  TrendingUp,
  Calendar,
  Clipboard,
} from "lucide-react";
import {
  fetchUserHealthHistory,
  selectCompleteHistory,
  selectLatestAssessment,
  selectUserData,
  selectHealthHistoryStatus,
  selectUserFullName,
} from "../../features/healthSlice";
import {
  selectIsAuthenticated,
  selectAuthUser,
} from "../../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  // Get authentication and user data first
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authUser = useSelector(selectAuthUser);

  // Health data selectors
  const status = useSelector(selectHealthHistoryStatus);
  const userData = useSelector(selectUserData);
  const completeHistory = useSelector(selectCompleteHistory);
  const latestAssessment = useSelector(selectLatestAssessment);
  const userFullName = useSelector(selectUserFullName);
  console.log(latestAssessment)

  // Fetch user health data when component mounts
  useEffect(() => {
    // Only fetch data if:
    // 1. The user is authenticated
    // 2. We have a valid user ID
    // 3. The health data hasn't been loaded yet
    if (status === "idle" && isAuthenticated && authUser?._id) {
      dispatch(fetchUserHealthHistory(authUser._id));
    }
  }, [status, dispatch, isAuthenticated, authUser]);

  // Handle updates to health data
  useEffect(() => {
    // This will run whenever completeHistory changes (like when a new assessment is added)
    if (completeHistory.length > 0 && status === "succeeded") {
      // The data is already in the Redux store, so we don't need to fetch again
      // Just ensure the component re-renders with the new data
    }
  }, [completeHistory, status]);

  // Show authentication required message if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-yellow-800 font-medium">
            Authentication Required
          </h2>
          <p className="text-yellow-600">
            Please log in to view your health dashboard.
          </p>
        </div>
      </div>
    );
  }

  // Return loading state while data is being fetched
  if (status === "loading") {
    return (
      <div className="p-6 bg-gray-50 rounded-lg flex justify-center items-center h-64">
        <p className="text-gray-600">Loading health data...</p>
      </div>
    );
  }

  // Return error state if data fetching failed
  if (status === "failed") {
    return (
      <div className="p-6 bg-gray-50 rounded-lg">
        <div className="bg-red-100 p-4 rounded-lg">
          <h2 className="text-red-800 font-medium">Error Loading Data</h2>
          <p className="text-red-600">
            Unable to load your health data. Please try again later.
          </p>
          <button
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => {
              if (authUser?._id) {
                dispatch(fetchUserHealthHistory(authUser._id));
              }
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Handle empty data case
  if (!completeHistory || completeHistory.length === 0) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="text-blue-800 font-medium">
            No Health Data Available
          </h2>
          <p className="text-blue-600">
            You haven't added any health assessments yet. Complete your first
            assessment to see your dashboard.
          </p>
        </div>
      </div>
    );
  }

  // Format the data for charts
  const formatHistoryData = () => {
    if (!completeHistory || completeHistory.length === 0) {
      return {
        riskScores: [],
        bloodPressure: [],
        cholesterol: [],
        glucose: [],
        smoking: false,
        medication: {
          statins: false,
          antihypertensive: false,
          aspirin: false,
        },
      };
    }
    console.log(completeHistory[0].date);
    // Map history data to chart-compatible format
    const riskScores = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      score: assessment.risk_Score || 0,
    }));

    const bloodPressure = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      systolic: assessment?.sysBP || 0,
      diastolic: assessment?.diaBP || 0,
    }));
    const cholesterol = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      total: assessment?.totChol || 0,
    }));
    const glucose = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      value: assessment.glucose || 0,
    }));
    console.log(completeHistory);
    console.log(glucose);

    // Latest assessment details
    const latest = latestAssessment || {};
    const smoking = latest.is_smoking === "YES" ? true : false;
    const medication = {
      antihypertensive: latest.prevalentHyp == "YES" ? true : false,
    };

    console.log(latest);
    console.log(medication);
    return {
      riskScores,
      bloodPressure,
      cholesterol,
      glucose,
      smoking,
      medication,
    };
  };

  // Get the formatted data
  const healthData = formatHistoryData();

  // Prepare Google Fit data if available
  // Note: This is a placeholder. You might need to adjust based on your actual data structure
  const googleFitData = latestAssessment?.googleFitData || {
    connected: false,
    steps: [],
    heartRate: [],
    activeMinutes: [],
  };

  // Calculate risk trend
  const calculateRiskTrend = () => {
    if (healthData.riskScores.length < 2) {
      return { trend: "stable", difference: 0 };
    }

    const latestRisk =
      healthData.riskScores[healthData.riskScores.length - 1].score;
    const previousRisk =
      healthData.riskScores[healthData.riskScores.length - 2].score;
    const trend =
      latestRisk < previousRisk
        ? "down"
        : latestRisk > previousRisk
        ? "up"
        : "stable";

    const difference = Math.abs(latestRisk - previousRisk).toFixed(1);

    return { trend, difference };
  };

  const riskTrendData = calculateRiskTrend();
  const lastAssessmentDate = latestAssessment
    ? new Date(latestAssessment.date).toLocaleDateString()
    : "N/A";
  const latestRiskScore =
    healthData.riskScores.length > 0
      ? healthData.riskScores[healthData.riskScores.length - 1].score
      : 0;

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Health Risk Dashboard
        </h1>
        <div className="flex items-center text-gray-600">
          <Clock className="mr-2" size={16} />
          <span>Last assessment: {lastAssessmentDate}</span>
        </div>
      </div>

      {/* Risk Score Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-500 text-sm uppercase font-semibold">
                Current ASCVD Risk
              </h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-800">
                  {latestRiskScore.toFixed(1)}%
                </span>
                <span className="ml-2 text-sm text-gray-500">10-year risk</span>
              </div>
            </div>
            <div
              className={`p-3 rounded-full ${
                latestRiskScore < 5
                  ? "bg-green-100"
                  : latestRiskScore < 7.5
                  ? "bg-yellow-100"
                  : "bg-red-100"
              }`}
            >
              <Heart
                className={`${
                  latestRiskScore < 5
                    ? "text-green-500"
                    : latestRiskScore < 7.5
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
                size={24}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {riskTrendData.trend === "down" ? (
              <TrendingDown className="text-green-500 mr-1" size={16} />
            ) : riskTrendData.trend === "up" ? (
              <TrendingUp className="text-red-500 mr-1" size={16} />
            ) : (
              <Activity className="text-blue-500 mr-1" size={16} />
            )}
            <span
              className={`text-sm ${
                riskTrendData.trend === "down"
                  ? "text-green-500"
                  : riskTrendData.trend === "up"
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            >
              {riskTrendData.trend === "down"
                ? `${riskTrendData.difference}% decrease`
                : riskTrendData.trend === "up"
                ? `${riskTrendData.difference}% increase`
                : "No change"}{" "}
              since last assessment
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-500 text-sm uppercase font-semibold">
                Blood Pressure
              </h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-800">
                  {healthData.bloodPressure.length > 0
                    ? `${
                        healthData.bloodPressure[
                          healthData.bloodPressure.length - 1
                        ].systolic
                      }/
                       ${
                         healthData.bloodPressure[
                           healthData.bloodPressure.length - 1
                         ].diastolic
                       }`
                    : "N/A"}
                </span>
                <span className="ml-2 text-sm text-gray-500">mmHg</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <Droplet className="text-blue-500" size={24} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-600">
              {healthData.bloodPressure.length > 0 &&
              (healthData.bloodPressure[healthData.bloodPressure.length - 1]
                .systolic > 130 ||
                healthData.bloodPressure[healthData.bloodPressure.length - 1]
                  .diastolic > 80)
                ? "Above optimal range"
                : "Within optimal range"}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-gray-500 text-sm uppercase font-semibold">
                Cholesterol
              </h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-800">
                  {healthData.cholesterol.length > 0
                    ? healthData.cholesterol[healthData.cholesterol.length - 1]
                        .total
                    : "N/A"}
                </span>
                <span className="ml-2 text-sm text-gray-500">mg/dL</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-purple-100">
              <Clipboard className="text-purple-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            ASCVD Risk History
          </h2>

          {healthData.riskScores.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={healthData.riskScores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#8884d8"
                  name="Risk Score %"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center h-64 text-gray-500">
              No risk score data available
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Blood Pressure History
          </h2>
          {healthData.bloodPressure.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={healthData.bloodPressure}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="#ff7300"
                  name="Systolic"
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#387908"
                  name="Diastolic"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center h-64 text-gray-500">
              No blood pressure data available
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Cholestrol History
          </h2>

          {healthData.cholesterol.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={healthData.cholesterol}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ReferenceLine
                  y={200}
                  stroke="red"
                  strokeDasharray="3 3"
                  label={{
                    value: "",
                    position: "left",
                    fill: "red",
                  }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#8884d8"
                  name="Total Cholesrtrol"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center h-64 text-gray-500">
              No risk score data available
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Glucose History
          </h2>

          {healthData.glucose.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={healthData.glucose}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ReferenceLine
                  y={90}
                  stroke="red"
                  strokeDasharray="3 3"
                  label={{
                    value: "",
                    position: "left",
                    fill: "red",
                  }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  name="Glucose"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center h-64 text-gray-500">
              No risk score data available
            </div>
          )}
        </div>
      </div>

      {/* Risk Factors */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 z-0">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Risk Factors Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div
              className={`p-2 rounded-full ${
                healthData.smoking ? "bg-red-100" : "bg-green-100"
              } mr-3`}
            >
              <AlertCircle
                className={
                  healthData.smoking ? "text-red-500" : "text-green-500"
                }
                size={20}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                Smoking Status
              </p>
              <p
                className={`text-sm ${
                  healthData.smoking ? "text-red-500" : "text-green-500"
                }`}
              >
                {healthData.smoking ? "Current Smoker" : "Non-Smoker"}
              </p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div
              className={`p-2 rounded-full ${
                healthData.glucose.length > 0 &&
                healthData.glucose[healthData.glucose.length - 1].value > 100
                  ? "bg-yellow-100"
                  : "bg-green-100"
              } mr-3`}
            >
              <AlertCircle
                className={
                  healthData.glucose.length > 0 &&
                  healthData.glucose[healthData.glucose.length - 1].value > 100
                    ? "text-yellow-500"
                    : "text-green-500"
                }
                size={20}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                Fasting Glucose
              </p>
              <p
                className={`text-sm ${
                  healthData.glucose.length > 0 &&
                  healthData.glucose[healthData.glucose.length - 1].value > 100
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {healthData.glucose.length > 0
                  ? `${
                      healthData.glucose[healthData.glucose.length - 1].value
                    } mg/dL`
                  : "No data"}
              </p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div
              className={`p-2 rounded-full ${
                healthData.medication.antihypertensive
                  ? "bg-green-100"
                  : "bg-yellow-100"
              } mr-3`}
            >
              <AlertCircle
                className={
                  healthData.medication.antihypertensive
                    ? "text-green-500"
                    : "text-yellow-500"
                }
                size={20}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                Blood Pressure Medication
              </p>
              <p
                className={`text-sm ${
                  healthData.medication.antihypertensive
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {healthData.medication.antihypertensive
                  ? "Currently Taking"
                  : "Not Taking"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Fit Integration */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Google Fit Integration
          </h2>
          {googleFitData.connected ? (
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
              Connected
            </span>
          ) : (
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
              Connect Google Fit
            </button>
          )}
        </div>

        {googleFitData.connected && googleFitData.steps?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 z-0">
            <div>
              <h3 className="text-md font-medium text-gray-700 mb-3">
                Daily Steps
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={googleFitData.steps}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4CAF50" name="Steps" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="text-md font-medium text-gray-700 mb-3">
                Heart Rate
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={googleFitData.heartRate}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="average"
                    stroke="#E91E63"
                    name="Avg BPM"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {googleFitData.connected
                ? "No fitness data available for the past week."
                : "Connect your Google Fit account to see your activity data here."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
