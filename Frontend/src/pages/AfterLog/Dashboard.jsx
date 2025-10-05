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
//   ReferenceLine,
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
// } from "../../features/healthSlice";
// import {
//   selectIsAuthenticated,
//   selectAuthUser,
// } from "../../features/authSlice";

// const Dashboard = () => {
//   const dispatch = useDispatch();

//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const authUser = useSelector(selectAuthUser);

//   const status = useSelector(selectHealthHistoryStatus);
//   const userData = useSelector(selectUserData);
//   const completeHistory = useSelector(selectCompleteHistory);
//   const latestAssessment = useSelector(selectLatestAssessment);
//   const userFullName = useSelector(selectUserFullName);
//   console.log(latestAssessment);

//   useEffect(() => {
//     if (status === "idle" && isAuthenticated && authUser?._id) {
//       dispatch(fetchUserHealthHistory(authUser._id));
//     }
//   }, [status, dispatch, isAuthenticated, authUser]);

//   useEffect(() => {
//     if (completeHistory.length > 0 && status === "succeeded") {
//     }
//   }, [completeHistory, status]);

//   if (!isAuthenticated) {
//     return (
//       <div className="p-6 bg-gray-50 rounded-lg">
//         <div className="bg-yellow-100 p-4 rounded-lg">
//           <h2 className="text-yellow-800 font-medium">
//             Authentication Required
//           </h2>
//           <p className="text-yellow-600">
//             Please log in to view your health dashboard.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (status === "loading") {
//     return (
//       <div className="p-6 bg-gray-50 rounded-lg flex justify-center items-center h-64">
//         <p className="text-gray-600">Loading health data...</p>
//       </div>
//     );
//   }

//   if (status === "failed") {
//     return (
//       <div className="p-6 bg-gray-50 rounded-lg">
//         <div className="bg-red-100 p-4 rounded-lg">
//           <h2 className="text-red-800 font-medium">Error Loading Data</h2>
//           <p className="text-red-600">
//             Unable to load your health data. Please try again later.
//           </p>
//           <button
//             className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//             onClick={() => {
//               if (authUser?._id) {
//                 dispatch(fetchUserHealthHistory(authUser._id));
//               }
//             }}
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!completeHistory || completeHistory.length === 0) {
//     return (
//       <div className="p-6 bg-gray-50 rounded-lg">
//         <div className="bg-blue-100 p-4 rounded-lg">
//           <h2 className="text-blue-800 font-medium">
//             No Health Data Available
//           </h2>
//           <p className="text-blue-600">
//             You haven't added any health assessments yet. Complete your first
//             assessment to see your dashboard.
//           </p>
//         </div>
//       </div>
//     );
//   }

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
//     console.log(completeHistory[0].date);

//     const riskScores = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }),
//       score: assessment.risk_Score || 0,
//     }));

//     const bloodPressure = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }),
//       systolic: assessment?.sysBP || 0,
//       diastolic: assessment?.diaBP || 0,
//     }));
//     const cholesterol = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }),
//       total: assessment?.totChol || 0,
//     }));
//     const glucose = completeHistory.map((assessment) => ({
//       date: new Date(assessment.date).toLocaleDateString("en-US", {
//         month: "short",
//         year: "numeric",
//       }),
//       value: assessment.glucose || 0,
//     }));
//     console.log(completeHistory);
//     console.log(glucose);

//     const latest = latestAssessment || {};
//     const smoking = latest.is_smoking === "YES" ? true : false;
//     const medication = {
//       antihypertensive: latest.prevalentHyp == "YES" ? true : false,
//     };

//     console.log(latest);
//     console.log(medication);
//     return {
//       riskScores,
//       bloodPressure,
//       cholesterol,
//       glucose,
//       smoking,
//       medication,
//     };
//   };

//   const healthData = formatHistoryData();

//   const googleFitData = latestAssessment?.googleFitData || {
//     connected: false,
//     steps: [],
//     heartRate: [],
//     activeMinutes: [],
//   };

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

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Health Risk Dashboard
//         </h1>
//         <div className="flex items-center text-gray-600">
//           <Clock className="mr-2" size={16} />
//           <span>Last assessment: {lastAssessmentDate}</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-gray-500 text-sm uppercase font-semibold">
//                 Current ASCVD Risk
//               </h2>
//               <div className="flex items-baseline">
//                 <span className="text-4xl font-bold text-gray-800">
//                   {latestRiskScore.toFixed(1)}%
//                 </span>
//                 <span className="ml-2 text-sm text-gray-500">10-year risk</span>
//               </div>
//             </div>
//             <div
//               className={`p-3 rounded-full ${
//                 latestRiskScore < 5
//                   ? "bg-green-100"
//                   : latestRiskScore < 7.5
//                   ? "bg-yellow-100"
//                   : "bg-red-100"
//               }`}
//             >
//               <Heart
//                 className={`${
//                   latestRiskScore < 5
//                     ? "text-green-500"
//                     : latestRiskScore < 7.5
//                     ? "text-yellow-500"
//                     : "text-red-500"
//                 }`}
//                 size={24}
//               />
//             </div>
//           </div>
//           <div className="mt-4 flex items-center">
//             {riskTrendData.trend === "down" ? (
//               <TrendingDown className="text-green-500 mr-1" size={16} />
//             ) : riskTrendData.trend === "up" ? (
//               <TrendingUp className="text-red-500 mr-1" size={16} />
//             ) : (
//               <Activity className="text-blue-500 mr-1" size={16} />
//             )}
//             <span
//               className={`text-sm ${
//                 riskTrendData.trend === "down"
//                   ? "text-green-500"
//                   : riskTrendData.trend === "up"
//                   ? "text-red-500"
//                   : "text-blue-500"
//               }`}
//             >
//               {riskTrendData.trend === "down"
//                 ? `${riskTrendData.difference}% decrease`
//                 : riskTrendData.trend === "up"
//                 ? `${riskTrendData.difference}% increase`
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
//                   {healthData.bloodPressure.length > 0
//                     ? `${
//                         healthData.bloodPressure[
//                           healthData.bloodPressure.length - 1
//                         ].systolic
//                       }/
//                        ${
//                          healthData.bloodPressure[
//                            healthData.bloodPressure.length - 1
//                          ].diastolic
//                        }`
//                     : "N/A"}
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
//               {healthData.bloodPressure.length > 0 &&
//               (healthData.bloodPressure[healthData.bloodPressure.length - 1]
//                 .systolic > 130 ||
//                 healthData.bloodPressure[healthData.bloodPressure.length - 1]
//                   .diastolic > 80)
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
//                   {healthData.cholesterol.length > 0
//                     ? healthData.cholesterol[healthData.cholesterol.length - 1]
//                         .total
//                     : "N/A"}
//                 </span>
//                 <span className="ml-2 text-sm text-gray-500">mg/dL</span>
//               </div>
//             </div>
//             <div className="p-3 rounded-full bg-purple-100">
//               <Clipboard className="text-purple-500" size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             ASCVD Risk History
//           </h2>

//           {healthData.riskScores.length > 0 ? (
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={healthData.riskScores}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="score"
//                   stroke="#8884d8"
//                   name="Risk Score %"
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="flex justify-center items-center h-64 text-gray-500">
//               No risk score data available
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             Blood Pressure History
//           </h2>
//           {healthData.bloodPressure.length > 0 ? (
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={healthData.bloodPressure}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="systolic"
//                   stroke="#ff7300"
//                   name="Systolic"
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="diastolic"
//                   stroke="#387908"
//                   name="Diastolic"
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="flex justify-center items-center h-64 text-gray-500">
//               No blood pressure data available
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             Cholestrol History
//           </h2>

//           {healthData.cholesterol.length > 0 ? (
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={healthData.cholesterol}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <ReferenceLine
//                   y={200}
//                   stroke="red"
//                   strokeDasharray="3 3"
//                   label={{
//                     value: "",
//                     position: "left",
//                     fill: "red",
//                   }}
//                 />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="total"
//                   stroke="#8884d8"
//                   name="Total Cholesrtrol"
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="flex justify-center items-center h-64 text-gray-500">
//               No risk score data available
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             Glucose History
//           </h2>

//           {healthData.glucose.length > 0 ? (
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={healthData.glucose}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <ReferenceLine
//                   y={90}
//                   stroke="red"
//                   strokeDasharray="3 3"
//                   label={{
//                     value: "",
//                     position: "left",
//                     fill: "red",
//                   }}
//                 />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#8884d8"
//                   name="Glucose"
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="flex justify-center items-center h-64 text-gray-500">
//               No risk score data available
//             </div>
//           )}
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
//                 healthData.smoking ? "bg-red-100" : "bg-green-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   healthData.smoking ? "text-red-500" : "text-green-500"
//                 }
//                 size={20}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-700">
//                 Smoking Status
//               </p>
//               <p
//                 className={`text-sm ${
//                   healthData.smoking ? "text-red-500" : "text-green-500"
//                 }`}
//               >
//                 {healthData.smoking ? "Current Smoker" : "Non-Smoker"}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 healthData.glucose.length > 0 &&
//                 healthData.glucose[healthData.glucose.length - 1].value > 100
//                   ? "bg-yellow-100"
//                   : "bg-green-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   healthData.glucose.length > 0 &&
//                   healthData.glucose[healthData.glucose.length - 1].value > 100
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
//                   healthData.glucose.length > 0 &&
//                   healthData.glucose[healthData.glucose.length - 1].value > 100
//                     ? "text-yellow-500"
//                     : "text-green-500"
//                 }`}
//               >
//                 {healthData.glucose.length > 0
//                   ? `${
//                       healthData.glucose[healthData.glucose.length - 1].value
//                     } mg/dL`
//                   : "No data"}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div
//               className={`p-2 rounded-full ${
//                 healthData.medication.antihypertensive
//                   ? "bg-green-100"
//                   : "bg-yellow-100"
//               } mr-3`}
//             >
//               <AlertCircle
//                 className={
//                   healthData.medication.antihypertensive
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
//                   healthData.medication.antihypertensive
//                     ? "text-green-500"
//                     : "text-yellow-500"
//                 }`}
//               >
//                 {healthData.medication.antihypertensive
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
//           {googleFitData.connected ? (
//             <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
//               Connected
//             </span>
//           ) : (
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
//               Connect Google Fit
//             </button>
//           )}
//         </div>

//         {googleFitData.connected && googleFitData.steps?.length > 0 ? (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 z-0">
//             <div>
//               <h3 className="text-md font-medium text-gray-700 mb-3">
//                 Daily Steps
//               </h3>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={googleFitData.steps}>
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
//                 <LineChart data={googleFitData.heartRate}>
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
//               {googleFitData.connected
//                 ? "No fitness data available for the past week."
//                 : "Connect your Google Fit account to see your activity data here."}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



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
  Area,
  AreaChart,
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
  Users,
  BarChart3,
  Zap,
  Check,
  X,
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

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authUser = useSelector(selectAuthUser);

  const status = useSelector(selectHealthHistoryStatus);
  const userData = useSelector(selectUserData);
  const completeHistory = useSelector(selectCompleteHistory);
  const latestAssessment = useSelector(selectLatestAssessment);
  const userFullName = useSelector(selectUserFullName);

  useEffect(() => {
    if (status === "idle" && isAuthenticated && authUser?._id) {
      dispatch(fetchUserHealthHistory(authUser._id));
    }
  }, [status, dispatch, isAuthenticated, authUser]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Authentication Required
          </h2>
          <p className="text-gray-600 text-center">
            Please log in to view your personalized health dashboard and track
            your cardiovascular risk.
          </p>
        </div>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
              <div className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-8 h-8 text-blue-600 animate-pulse" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Loading Health Data
              </h3>
              <p className="text-gray-600">
                Please wait while we fetch your health records
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Error Loading Data
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Unable to load your health data. Please try again later.
          </p>
          <button
            className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium
                     hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
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

  if (!completeHistory || completeHistory.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Clipboard className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
            No Health Data Available
          </h2>
          <p className="text-gray-600 text-center">
            You haven't added any health assessments yet. Complete your first
            assessment to see your dashboard.
          </p>
        </div>
      </div>
    );
  }

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

    const riskScores = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }),
      score: assessment.risk_Score || 0,
    }));

    const bloodPressure = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }),
      systolic: assessment?.sysBP || 0,
      diastolic: assessment?.diaBP || 0,
    }));

    const cholesterol = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }),
      total: assessment?.totChol || 0,
    }));

    const glucose = completeHistory.map((assessment) => ({
      date: new Date(assessment.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }),
      value: assessment.glucose || 0,
    }));

    const latest = latestAssessment || {};
    const smoking = latest.is_smoking === "YES" ? true : false;
    const medication = {
      antihypertensive: latest.prevalentHyp === "YES" ? true : false,
    };

    return {
      riskScores,
      bloodPressure,
      cholesterol,
      glucose,
      smoking,
      medication,
    };
  };

  const healthData = formatHistoryData();

  const googleFitData = latestAssessment?.googleFitData || {
    connected: false,
    steps: [],
    heartRate: [],
    activeMinutes: [],
  };

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
    ? new Date(latestAssessment.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";
  const latestRiskScore =
    healthData.riskScores.length > 0
      ? healthData.riskScores[healthData.riskScores.length - 1].score
      : 0;

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100">
          <p className="text-sm font-medium text-gray-900 mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Health Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {userFullName || "User"}! Track your
                cardiovascular health journey.
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-2xl shadow-md">
              <Clock className="text-blue-600" size={18} />
              <div>
                <p className="text-xs text-gray-500">Last Assessment</p>
                <p className="text-sm font-semibold text-gray-900">
                  {lastAssessmentDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* ASCVD Risk Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
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
                          ? "text-green-600"
                          : latestRiskScore < 7.5
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                      size={20}
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    ASCVD Risk
                  </h3>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {latestRiskScore.toFixed(1)}
                  </span>
                  <span className="text-lg text-gray-500">%</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">10-year risk</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100">
              {riskTrendData.trend === "down" ? (
                <>
                  <TrendingDown className="text-green-500" size={18} />
                  <span className="text-sm font-medium text-green-600">
                    {riskTrendData.difference}% decrease
                  </span>
                </>
              ) : riskTrendData.trend === "up" ? (
                <>
                  <TrendingUp className="text-red-500" size={18} />
                  <span className="text-sm font-medium text-red-600">
                    {riskTrendData.difference}% increase
                  </span>
                </>
              ) : (
                <>
                  <Activity className="text-blue-500" size={18} />
                  <span className="text-sm font-medium text-blue-600">
                    No change
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Blood Pressure Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Droplet className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    Blood Pressure
                  </h3>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {healthData.bloodPressure.length > 0
                      ? `${
                          healthData.bloodPressure[
                            healthData.bloodPressure.length - 1
                          ].systolic
                        }/${
                          healthData.bloodPressure[
                            healthData.bloodPressure.length - 1
                          ].diastolic
                        }`
                      : "N/A"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">mmHg</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                {healthData.bloodPressure.length > 0 &&
                (healthData.bloodPressure[healthData.bloodPressure.length - 1]
                  .systolic > 130 ||
                  healthData.bloodPressure[healthData.bloodPressure.length - 1]
                    .diastolic > 80) ? (
                  <>
                    <AlertCircle className="text-yellow-500" size={18} />
                    <span className="text-sm font-medium text-yellow-600">
                      Above optimal range
                    </span>
                  </>
                ) : (
                  <>
                    <Check className="text-green-500" size={18} />
                    <span className="text-sm font-medium text-green-600">
                      Within optimal range
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Cholesterol Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Clipboard className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    Cholesterol
                  </h3>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {healthData.cholesterol.length > 0
                      ? healthData.cholesterol[
                          healthData.cholesterol.length - 1
                        ].total
                      : "N/A"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">mg/dL total</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                {healthData.cholesterol.length > 0 &&
                healthData.cholesterol[healthData.cholesterol.length - 1]
                  .total < 200 ? (
                  <>
                    <Check className="text-green-500" size={18} />
                    <span className="text-sm font-medium text-green-600">
                      Healthy level
                    </span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="text-yellow-500" size={18} />
                    <span className="text-sm font-medium text-yellow-600">
                      Elevated level
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* ASCVD Risk History */}
          <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                ASCVD Risk Trend
              </h2>
            </div>
            {healthData.riskScores.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={healthData.riskScores}>
                  <defs>
                    <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRisk)"
                    name="Risk Score %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col justify-center items-center h-64 text-gray-400">
                <BarChart3 size={48} className="mb-3" />
                <p className="text-sm">No risk score data available</p>
              </div>
            )}
          </div>

          {/* Blood Pressure History */}
          <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                <Activity className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Blood Pressure History
              </h2>
            </div>
            {healthData.bloodPressure.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={healthData.bloodPressure}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: "10px" }} />
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="#FF6B6B"
                    strokeWidth={3}
                    dot={{ fill: "#FF6B6B", r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Systolic"
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="#4ECDC4"
                    strokeWidth={3}
                    dot={{ fill: "#4ECDC4", r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Diastolic"
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col justify-center items-center h-64 text-gray-400">
                <Activity size={48} className="mb-3" />
                <p className="text-sm">No blood pressure data available</p>
              </div>
            )}
          </div>

          {/* Cholesterol History */}
          <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Cholesterol Trend
              </h2>
            </div>
            {healthData.cholesterol.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={healthData.cholesterol}>
                  <defs>
                    <linearGradient id="colorChol" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <ReferenceLine
                    y={200}
                    stroke="#EF4444"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    label={{
                      value: "High Risk",
                      position: "insideTopRight",
                      fill: "#EF4444",
                      fontSize: 12,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#A855F7"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorChol)"
                    name="Total Cholesterol"
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col justify-center items-center h-64 text-gray-400">
                <Zap size={48} className="mb-3" />
                <p className="text-sm">No cholesterol data available</p>
              </div>
            )}
          </div>

          {/* Glucose History */}
          <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                <Droplet className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Glucose Levels
              </h2>
            </div>
            {healthData.glucose.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={healthData.glucose}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    stroke="#E5E7EB"
                  />
                  <ReferenceLine
                    y={100}
                    stroke="#F59E0B"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    label={{
                      value: "Target",
                      position: "insideTopRight",
                      fill: "#F59E0B",
                      fontSize: 12,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#14B8A6"
                    strokeWidth={3}
                    dot={{ fill: "#14B8A6", r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Glucose (mg/dL)"
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col justify-center items-center h-64 text-gray-400">
                <Droplet size={48} className="mb-3" />
                <p className="text-sm">No glucose data available</p>
              </div>
            )}
          </div>
        </div>

        {/* Risk Factors Summary */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
              <AlertCircle className="text-white" size={20} />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Risk Factors Summary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Smoking Status */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    healthData.smoking ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  {healthData.smoking ? (
                    <X className="text-red-600" size={24} />
                  ) : (
                    <Check className="text-green-600" size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Smoking Status
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      healthData.smoking ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {healthData.smoking ? "Current Smoker" : "Non-Smoker"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {healthData.smoking
                      ? "Consider cessation programs"
                      : "Keep up the good work!"}
                  </p>
                </div>
              </div>
            </div>

            {/* Glucose Level */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    healthData.glucose.length > 0 &&
                    healthData.glucose[healthData.glucose.length - 1].value >
                      100
                      ? "bg-yellow-100"
                      : "bg-green-100"
                  }`}
                >
                  {healthData.glucose.length > 0 &&
                  healthData.glucose[healthData.glucose.length - 1].value >
                    100 ? (
                    <AlertCircle className="text-yellow-600" size={24} />
                  ) : (
                    <Check className="text-green-600" size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Fasting Glucose
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      healthData.glucose.length > 0 &&
                      healthData.glucose[healthData.glucose.length - 1].value >
                        100
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {healthData.glucose.length > 0
                      ? `${
                          healthData.glucose[healthData.glucose.length - 1]
                            .value
                        } mg/dL`
                      : "No data"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {healthData.glucose.length > 0 &&
                    healthData.glucose[healthData.glucose.length - 1].value >
                      100
                      ? "Monitor blood sugar levels"
                      : "Within normal range"}
                  </p>
                </div>
              </div>
            </div>

            {/* BP Medication */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    healthData.medication.antihypertensive
                      ? "bg-blue-100"
                      : "bg-gray-200"
                  }`}
                >
                  <Clipboard
                    className={
                      healthData.medication.antihypertensive
                        ? "text-blue-600"
                        : "text-gray-500"
                    }
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    BP Medication
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      healthData.medication.antihypertensive
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {healthData.medication.antihypertensive
                      ? "Currently Taking"
                      : "Not Taking"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {healthData.medication.antihypertensive
                      ? "Continue as prescribed"
                      : "Regular monitoring advised"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Fit Integration */}
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Activity className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Fitness Tracking
              </h2>
            </div>
            {googleFitData.connected ? (
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <Check size={16} className="mr-2" />
                Connected
              </span>
            ) : (
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                Connect Google Fit
              </button>
            )}
          </div>

          {googleFitData.connected && googleFitData.steps?.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Daily Steps
                </h3>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={googleFitData.steps}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      dataKey="date"
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                      stroke="#E5E7EB"
                    />
                    <YAxis
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                      stroke="#E5E7EB"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="value"
                      fill="#10B981"
                      radius={[8, 8, 0, 0]}
                      name="Steps"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Heart Rate
                </h3>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={googleFitData.heartRate}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      dataKey="date"
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                      stroke="#E5E7EB"
                    />
                    <YAxis
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                      stroke="#E5E7EB"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="average"
                      stroke="#EC4899"
                      strokeWidth={3}
                      dot={{ fill: "#EC4899", r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Avg BPM"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
              <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-medium mb-2">
                {googleFitData.connected
                  ? "No Activity Data Yet"
                  : "Track Your Fitness Journey"}
              </p>
              <p className="text-gray-500 text-sm">
                {googleFitData.connected
                  ? "Start tracking your daily activities to see insights here"
                  : "Connect your Google Fit account to monitor your daily activity and health metrics"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
