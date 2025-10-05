// import { useState, useRef, useEffect } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Line } from "react-chartjs-2";

// import Loader from "../../components/afterLogComp/Loader";
// import React from "react";
// import {
//   addHealthAssessment,
//   selectLatestAssessment,
// } from "../../features/healthSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function RiskCalculator() {
//   const [isSubmit, setSubmit] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [riskRate, setRiskRate] = useState(null);
//   const [formData, setFormData] = useState({
//     // Demographic
//     age: "",
//     sex: "M",
//     education: "10th",

//     is_smoking: "NO",
//     cigsPerDay: "",

//     bpMeds: "NO",
//     prevalentStroke: "NO",
//     prevalentHyp: "NO",
//     diabetes: "NO",

//     totChol: "",
//     sysBP: "",
//     diaBP: "",
//     bmi: "",
//     heartRate: "",
//     glucose: "",
//   });

//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.auth.user?._id);
//   const status = useSelector((state) => state.healthHistory.status);
//   const latestAssessment = useSelector(selectLatestAssessment);

//   useEffect(() => {
//     if (isLoading && status === "succeeded" && latestAssessment) {
//       setIsLoading(false);
//       setRiskRate(Number(latestAssessment.risk_Score.toFixed(2)));
//       setSubmit(true);
//     } else if (status === "failed") {
//       setIsLoading(false);
//     }
//   }, [status, latestAssessment, isLoading]);

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     if (type === "number") {
//       if (value === "" || !isNaN(Number(value))) {
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       }
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const calculateRisk = () => {
//     setIsLoading(true);
//     setSubmit(false);
//     dispatch(
//       addHealthAssessment({
//         userId,
//         assessmentData: {
//           ...formData,
//         },
//       })
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
//       <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-5">
//         <h1 className="text-2xl font-bold text-white">CVD Risk Calculator</h1>
//         <p className="text-teal-100 mt-1 text-sm">
//           Calculate your cardiovascular disease risk based on Framingham Heart
//           Study factors
//         </p>
//       </div>

//       <div className="p-6 bg-gray-50">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             calculateRisk();
//           }}
//         >
//           <div className="space-y-6">
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Demographic Information
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="age"
//                   >
//                     Age
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     id="age"
//                     type="number"
//                     name="age"
//                     required
//                     value={formData.age}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="sex"
//                   >
//                     Sex
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <select
//                     id="sex"
//                     name="sex"
//                     value={formData.sex}
//                     required
//                     onChange={handleChange}
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   >
//                     <option value="M">M</option>
//                     <option value="F">F</option>
//                   </select>
//                 </div>
//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="sex"
//                   >
//                     Education
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <select
//                     id="education"
//                     required
//                     name="education"
//                     value={formData.education}
//                     onChange={handleChange}
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   >
//                     <option value="10th">Secondary School (10th)</option>
//                     <option value="12th">Junior College (12th)</option>
//                     <option value="bachelor">Undergraduate (Bachelor's)</option>
//                     <option value="master">Postgraduate (Master's)</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Behavioral Factors
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="is_smoking"
//                     required
//                   >
//                     Current Smoker
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <div className="flex space-x-6 pt-1">
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="is_smoking-yes"
//                         name="is_smoking"
//                         value="YES"
//                         checked={formData.is_smoking === "YES"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">Yes</span>
//                     </label>
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="is_smoking-no"
//                         name="is_smoking"
//                         value="NO"
//                         checked={formData.is_smoking === "NO"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">No</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="cigsPerDay"
//                   >
//                     Cigarettes Per Day
//                   </label>
//                   <input
//                     id="cigsPerDay"
//                     type="number"
//                     name="cigsPerDay"
//                     required
//                     value={formData.cigsPerDay}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Medical History
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="bpMeds"
//                     required
//                   >
//                     On Blood Pressure Medication
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <div className="flex space-x-6 pt-1">
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="bpMeds-yes"
//                         name="bpMeds"
//                         value="YES"
//                         checked={formData.bpMeds === "YES"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">Yes</span>
//                     </label>
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="bpMeds-no"
//                         name="bpMeds"
//                         value="NO"
//                         checked={formData.bpMeds === "NO"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">No</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="prevalentStroke"
//                     required
//                   >
//                     Previous Stroke
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <div className="flex space-x-6 pt-1">
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="prevalentStroke-yes"
//                         name="prevalentStroke"
//                         value="YES"
//                         checked={formData.prevalentStroke === "YES"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">Yes</span>
//                     </label>
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="prevalentStroke-no"
//                         name="prevalentStroke"
//                         value="NO"
//                         checked={formData.prevalentStroke === "NO"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">No</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="prevalentHyp"
//                     required
//                   >
//                     Hypertensive
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <div className="flex space-x-6 pt-1">
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="prevalentHyp-yes"
//                         name="prevalentHyp"
//                         value="YES"
//                         checked={formData.prevalentHyp === "YES"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">Yes</span>
//                     </label>
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="prevalentHyp-no"
//                         name="prevalentHyp"
//                         value="NO"
//                         checked={formData.prevalentHyp === "NO"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">No</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="diabetes"
//                     required
//                   >
//                     Diabetes
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <div className="flex space-x-6 pt-1">
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="diabetes-yes"
//                         name="diabetes"
//                         value="YES"
//                         checked={formData.diabetes === "YES"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">Yes</span>
//                     </label>
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         id="diabetes-no"
//                         name="diabetes"
//                         value="NO"
//                         checked={formData.diabetes === "NO"}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//                       />
//                       <span className="text-sm text-gray-700">No</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Current Medical Measurements
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-3">
//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="totChol"
//                   >
//                     Total Cholesterol (mg/dL)
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     id="totChol"
//                     type="number"
//                     name="totChol"
//                     required
//                     value={formData.totChol}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="sysBP"
//                   >
//                     Systolic BP (mmHg)
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     id="sysBP"
//                     type="number"
//                     name="sysBP"
//                     required
//                     value={formData.sysBP}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="diaBP"
//                   >
//                     Diastolic BP (mmHg)
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     id="diaBP"
//                     type="number"
//                     name="diaBP"
//                     required
//                     value={formData.diaBP}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="bmi"
//                   >
//                     BMI
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     id="bmi"
//                     type="number"
//                     name="bmi"
//                     required
//                     value={formData.bmi}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="heartRate"
//                   >
//                     Heart Rate (bpm)
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     id="heartRate"
//                     type="number"
//                     name="heartRate"
//                     required
//                     value={formData.heartRate}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-2">
//                   <label
//                     className="text-sm font-medium text-gray-700"
//                     htmlFor="glucose"
//                   >
//                     Glucose (mg/dL)
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>
//                   <input
//                     id="glucose"
//                     type="number"
//                     name="glucose"
//                     required
//                     value={formData.glucose}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                                transition-colors duration-200"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 flex justify-center">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`px-8 py-3 rounded-lg font-medium shadow-md focus:outline-none focus:ring-2
//                        focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200
//                        ${
//                          isLoading
//                            ? "bg-gray-400 text-white cursor-not-allowed"
//                            : "bg-teal-600 text-white hover:bg-teal-700"
//                        }`}
//             >
//               {isLoading ? "Calculating..." : "Calculate Risk Score"}
//             </button>
//           </div>
//         </form>
//       </div>

//       {isLoading && (
//         <div className="my-8 flex justify-center items-center px-6">
//           <div className="border w-full px-4 py-5 flex flex-col items-center rounded-lg bg-gray-50 border-gray-200">
//             <Loader />
//             <span className="text-xl font-medium text-gray-700">
//               Calculating your risk score
//             </span>

//             <p className="mt-2 text-sm text-gray-500">
//               Please wait while we process your health data
//             </p>
//           </div>
//         </div>
//       )}

//       {isSubmit && riskRate && !isLoading && (
//         <div>
//           <div className="my-8 flex justify-center items-center px-6">
//             <div
//               className={`border w-full px-4 py-5 flex justify-between items-center rounded-lg ${
//                 riskRate < 10
//                   ? "bg-green-50 border-green-200 text-green-800"
//                   : riskRate < 20
//                   ? "bg-yellow-50 border-yellow-200 text-yellow-800"
//                   : "bg-red-50 border-red-200 text-red-800"
//               }`}
//             >
//               <div>
//                 <h2 className="text-2xl font-semibold">
//                   CVD Risk Score: {riskRate}%
//                 </h2>
//                 <p className="mt-1 text-sm">
//                   {riskRate < 10
//                     ? "Low risk: Continue healthy lifestyle habits"
//                     : riskRate < 20
//                     ? "Moderate risk: Consider lifestyle modifications"
//                     : "High risk: Consult healthcare provider"}
//                 </p>
//               </div>
//               <div
//                 className={`w-20 h-20 rounded-full flex items-center justify-center ${
//                   riskRate < 10
//                     ? "bg-green-500"
//                     : riskRate < 20
//                     ? "bg-yellow-500"
//                     : "bg-red-500"
//                 }`}
//               >
//                 <span className="text-2xl font-bold text-white">
//                   {riskRate}%
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }










// import { useState, useRef, useEffect } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Line } from "react-chartjs-2";
// import React from "react";
// import {
//   addHealthAssessment,
//   selectLatestAssessment,
// } from "../../features/healthSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function RiskCalculator() {
//   const [isSubmit, setSubmit] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [riskRate, setRiskRate] = useState(null);
//   const [formData, setFormData] = useState({
//     age: "",
//     sex: "M",
//     education: "10th",
//     is_smoking: "NO",
//     cigsPerDay: "",
//     bpMeds: "NO",
//     prevalentStroke: "NO",
//     prevalentHyp: "NO",
//     diabetes: "NO",
//     totChol: "",
//     sysBP: "",
//     diaBP: "",
//     bmi: "",
//     heartRate: "",
//     glucose: "",
//   });

//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.auth.user?._id);
//   const status = useSelector((state) => state.healthHistory.status);
//   const latestAssessment = useSelector(selectLatestAssessment);

//   useEffect(() => {
//     if (isLoading && status === "succeeded" && latestAssessment) {
//       setIsLoading(false);
//       setRiskRate(Number(latestAssessment.risk_Score.toFixed(2)));
//       setSubmit(true);
//     } else if (status === "failed") {
//       setIsLoading(false);
//     }
//   }, [status, latestAssessment, isLoading]);

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     if (type === "number") {
//       if (value === "" || !isNaN(Number(value))) {
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       }
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const calculateRisk = () => {
//     setIsLoading(true);
//     setSubmit(false);
//     dispatch(
//       addHealthAssessment({
//         userId,
//         assessmentData: {
//           ...formData,
//         },
//       })
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-4 shadow-lg">
//             <svg
//               className="w-8 h-8 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//               />
//             </svg>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-3">
//             CVD Risk Assessment
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Calculate your cardiovascular disease risk based on Framingham Heart
//             Study factors
//           </p>
//         </div>

//         {/* Form Container */}
//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden backdrop-blur-lg bg-opacity-90">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               calculateRisk();
//             }}
//             className="p-8 space-y-8"
//           >
//             {/* Demographic Information */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
//                   <svg
//                     className="w-5 h-5 text-blue-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Demographic Information
//                 </h3>
//               </div>

//               <div className="grid gap-6 md:grid-cols-3">
//                 <div className="space-y-2">
//                   <label
//                     className="block text-sm font-medium text-gray-700"
//                     htmlFor="age"
//                   >
//                     Age <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="age"
//                     type="number"
//                     name="age"
//                     required
//                     value={formData.age}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     placeholder="Enter your age"
//                     className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900
//                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
//                                transition-all duration-200 placeholder-gray-400"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     className="block text-sm font-medium text-gray-700"
//                     htmlFor="sex"
//                   >
//                     Sex <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="sex"
//                     name="sex"
//                     value={formData.sex}
//                     required
//                     onChange={handleChange}
//                     className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900
//                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
//                                transition-all duration-200"
//                   >
//                     <option value="M">Male</option>
//                     <option value="F">Female</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     className="block text-sm font-medium text-gray-700"
//                     htmlFor="education"
//                   >
//                     Education <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="education"
//                     required
//                     name="education"
//                     value={formData.education}
//                     onChange={handleChange}
//                     className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900
//                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
//                                transition-all duration-200"
//                   >
//                     <option value="10th">Secondary School (10th)</option>
//                     <option value="12th">Junior College (12th)</option>
//                     <option value="bachelor">Undergraduate (Bachelor's)</option>
//                     <option value="master">Postgraduate (Master's)</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-gray-200"></div>

//             {/* Behavioral Factors */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
//                   <svg
//                     className="w-5 h-5 text-purple-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Behavioral Factors
//                 </h3>
//               </div>

//               <div className="grid gap-6 md:grid-cols-2">
//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Current Smoker <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex space-x-4">
//                     <label className="flex-1">
//                       <input
//                         type="radio"
//                         name="is_smoking"
//                         value="YES"
//                         checked={formData.is_smoking === "YES"}
//                         onChange={handleChange}
//                         className="peer sr-only"
//                       />
//                       <div
//                         className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
//                                     peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
//                                     cursor-pointer transition-all duration-200 font-medium"
//                       >
//                         Yes
//                       </div>
//                     </label>
//                     <label className="flex-1">
//                       <input
//                         type="radio"
//                         name="is_smoking"
//                         value="NO"
//                         checked={formData.is_smoking === "NO"}
//                         onChange={handleChange}
//                         className="peer sr-only"
//                       />
//                       <div
//                         className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
//                                     peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
//                                     cursor-pointer transition-all duration-200 font-medium"
//                       >
//                         No
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     className="block text-sm font-medium text-gray-700"
//                     htmlFor="cigsPerDay"
//                   >
//                     Cigarettes Per Day <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="cigsPerDay"
//                     type="number"
//                     name="cigsPerDay"
//                     required
//                     value={formData.cigsPerDay}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     placeholder="0"
//                     className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900
//                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
//                                transition-all duration-200 placeholder-gray-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-gray-200"></div>

//             {/* Medical History */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
//                   <svg
//                     className="w-5 h-5 text-pink-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Medical History
//                 </h3>
//               </div>

//               <div className="grid gap-6 md:grid-cols-2">
//                 {[
//                   { name: "bpMeds", label: "On Blood Pressure Medication" },
//                   { name: "prevalentStroke", label: "Previous Stroke" },
//                   { name: "prevalentHyp", label: "Hypertensive" },
//                   { name: "diabetes", label: "Diabetes" },
//                 ].map((field) => (
//                   <div key={field.name} className="space-y-3">
//                     <label className="block text-sm font-medium text-gray-700">
//                       {field.label} <span className="text-red-500">*</span>
//                     </label>
//                     <div className="flex space-x-4">
//                       <label className="flex-1">
//                         <input
//                           type="radio"
//                           name={field.name}
//                           value="YES"
//                           checked={formData[field.name] === "YES"}
//                           onChange={handleChange}
//                           className="peer sr-only"
//                         />
//                         <div
//                           className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
//                                       peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
//                                       cursor-pointer transition-all duration-200 font-medium"
//                         >
//                           Yes
//                         </div>
//                       </label>
//                       <label className="flex-1">
//                         <input
//                           type="radio"
//                           name={field.name}
//                           value="NO"
//                           checked={formData[field.name] === "NO"}
//                           onChange={handleChange}
//                           className="peer sr-only"
//                         />
//                         <div
//                           className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
//                                       peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
//                                       cursor-pointer transition-all duration-200 font-medium"
//                         >
//                           No
//                         </div>
//                       </label>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="border-t border-gray-200"></div>

//             {/* Current Medical Measurements */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
//                   <svg
//                     className="w-5 h-5 text-teal-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Current Medical Measurements
//                 </h3>
//               </div>

//               <div className="grid gap-6 md:grid-cols-3">
//                 {[
//                   {
//                     name: "totChol",
//                     label: "Total Cholesterol",
//                     unit: "mg/dL",
//                   },
//                   { name: "sysBP", label: "Systolic BP", unit: "mmHg" },
//                   { name: "diaBP", label: "Diastolic BP", unit: "mmHg" },
//                   { name: "bmi", label: "BMI", unit: "" },
//                   { name: "heartRate", label: "Heart Rate", unit: "bpm" },
//                   { name: "glucose", label: "Glucose", unit: "mg/dL" },
//                 ].map((field) => (
//                   <div key={field.name} className="space-y-2">
//                     <label
//                       className="block text-sm font-medium text-gray-700"
//                       htmlFor={field.name}
//                     >
//                       {field.label}{" "}
//                       {field.unit && (
//                         <span className="text-gray-500">({field.unit})</span>
//                       )}
//                       <span className="text-red-500"> *</span>
//                     </label>
//                     <input
//                       id={field.name}
//                       type="number"
//                       name={field.name}
//                       required
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       autoComplete="off"
//                       placeholder="0"
//                       className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900
//                                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
//                                  transition-all duration-200 placeholder-gray-400"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-6">
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full h-14 rounded-xl font-semibold text-lg shadow-lg
//                          transition-all duration-300 transform
//                          ${
//                            isLoading
//                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
//                          }`}
//               >
//                 {isLoading ? (
//                   <span className="flex items-center justify-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
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
//                     Calculating...
//                   </span>
//                 ) : (
//                   "Calculate Risk Score"
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Loading State */}
//         {isLoading && (
//           <div className="mt-8 bg-white rounded-3xl shadow-xl p-10">
//             <div className="flex flex-col items-center justify-center space-y-6">
//               <div className="relative">
//                 <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
//                 <div className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <svg
//                     className="w-8 h-8 text-blue-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//                   Analyzing Your Health Data
//                 </h3>
//                 <p className="text-gray-600">
//                   Please wait while we calculate your cardiovascular risk score
//                 </p>
//               </div>
//               <div className="flex space-x-2">
//                 <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
//                 <div
//                   className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
//                   style={{ animationDelay: "0.1s" }}
//                 ></div>
//                 <div
//                   className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
//                   style={{ animationDelay: "0.2s" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Results */}
//         {isSubmit && riskRate !== null && !isLoading && (
//           <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden">
//             <div
//               className={`p-8 ${
//                 riskRate < 10
//                   ? "bg-gradient-to-br from-green-50 to-emerald-50"
//                   : riskRate < 20
//                   ? "bg-gradient-to-br from-yellow-50 to-amber-50"
//                   : "bg-gradient-to-br from-red-50 to-rose-50"
//               }`}
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex-1">
//                   <div className="flex items-center space-x-3 mb-3">
//                     <div
//                       className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
//                         riskRate < 10
//                           ? "bg-green-500"
//                           : riskRate < 20
//                           ? "bg-yellow-500"
//                           : "bg-red-500"
//                       }`}
//                     >
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         {riskRate < 10 ? (
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         ) : riskRate < 20 ? (
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                           />
//                         ) : (
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         )}
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">
//                         Your CVD Risk Score
//                       </p>
//                       <h2 className="text-4xl font-bold text-gray-900">
//                         {riskRate}%
//                       </h2>
//                     </div>
//                   </div>
//                   <p
//                     className={`text-base font-medium ${
//                       riskRate < 10
//                         ? "text-green-800"
//                         : riskRate < 20
//                         ? "text-yellow-800"
//                         : "text-red-800"
//                     }`}
//                   >
//                     {riskRate < 10
//                       ? "✓ Low risk: Continue healthy lifestyle habits"
//                       : riskRate < 20
//                       ? "⚠ Moderate risk: Consider lifestyle modifications"
//                       : "⚠ High risk: Consult healthcare provider immediately"}
//                   </p>
//                 </div>

//                 <div className="hidden md:block">
//                   <div
//                     className={`w-32 h-32 rounded-full flex items-center justify-center shadow-lg ${
//                       riskRate < 10
//                         ? "bg-gradient-to-br from-green-400 to-green-600"
//                         : riskRate < 20
//                         ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
//                         : "bg-gradient-to-br from-red-400 to-red-600"
//                     }`}
//                   >
//                     <div className="text-center">
//                       <div className="text-3xl font-bold text-white">
//                         {riskRate}%
//                       </div>
//                       <div className="text-xs text-white opacity-90">RISK</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white bg-opacity-60 rounded-2xl p-6 backdrop-blur-sm">
//                 <h4 className="font-semibold text-gray-900 mb-3">
//                   Recommendations:
//                 </h4>
//                 <ul className="space-y-2 text-sm text-gray-700">
//                   {riskRate < 10 ? (
//                     <>
//                       <li className="flex items-start">
//                         <span className="text-green-600 mr-2">•</span>
//                         Maintain regular physical activity and balanced diet
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-600 mr-2">•</span>
//                         Continue routine health check-ups
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-600 mr-2">•</span>
//                         Monitor blood pressure and cholesterol levels annually
//                       </li>
//                     </>
//                   ) : riskRate < 20 ? (
//                     <>
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Increase physical activity to 150 minutes per week
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Consider dietary changes and stress management
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-yellow-600 mr-2">•</span>
//                         Schedule a consultation with your healthcare provider
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li className="flex items-start">
//                         <span className="text-red-600 mr-2">•</span>
//                         Consult with a healthcare provider immediately
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-red-600 mr-2">•</span>
//                         Implement lifestyle changes under medical supervision
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-red-600 mr-2">•</span>
//                         Regular monitoring and possible medication may be needed
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import React from "react";
import {
  addHealthAssessment,
  selectLatestAssessment,
} from "../../features/healthSlice";
import { useDispatch, useSelector } from "react-redux";
import { AlertCircle } from "lucide-react";

// Validation ranges based on medical standards
const VALIDATION_RANGES = {
  age: { min: 18, max: 120, label: "Age" },
  cigsPerDay: { min: 0, max: 100, label: "Cigarettes per day" },
  totChol: { min: 100, max: 400, label: "Total Cholesterol" },
  sysBP: { min: 70, max: 250, label: "Systolic BP" },
  diaBP: { min: 40, max: 150, label: "Diastolic BP" },
  bmi: { min: 10, max: 60, label: "BMI" },
  heartRate: { min: 30, max: 220, label: "Heart Rate" },
  glucose: { min: 40, max: 600, label: "Glucose" },
};

export default function RiskCalculator() {
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [riskRate, setRiskRate] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    age: "",
    sex: "M",
    education: "10th",
    is_smoking: "NO",
    cigsPerDay: "0",
    bpMeds: "NO",
    prevalentStroke: "NO",
    prevalentHyp: "NO",
    diabetes: "NO",
    totChol: "",
    sysBP: "",
    diaBP: "",
    bmi: "",
    heartRate: "",
    glucose: "",
  });

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  const status = useSelector((state) => state.healthHistory.status);
  const latestAssessment = useSelector(selectLatestAssessment);

  useEffect(() => {
    if (isLoading && status === "succeeded" && latestAssessment) {
      setIsLoading(false);
      setRiskRate(Number(latestAssessment.risk_Score.toFixed(2)));
      setSubmit(true);
    } else if (status === "failed") {
      setIsLoading(false);
    }
  }, [status, latestAssessment, isLoading]);

  // Validate individual field
  const validateField = (name, value) => {
    const range = VALIDATION_RANGES[name];

    if (!range) return null;

    const numValue = parseFloat(value);

    if (value === "" || value === null) {
      return `${range.label} is required`;
    }

    if (isNaN(numValue)) {
      return `${range.label} must be a valid number`;
    }

    if (numValue < range.min) {
      return `${range.label} must be at least ${range.min}`;
    }

    if (numValue > range.max) {
      return `${range.label} must not exceed ${range.max}`;
    }

    // Additional validation for blood pressure
    if (name === "diaBP" && formData.sysBP) {
      const systolic = parseFloat(formData.sysBP);
      if (!isNaN(systolic) && numValue >= systolic) {
        return "Diastolic BP must be lower than Systolic BP";
      }
    }

    if (name === "sysBP" && formData.diaBP) {
      const diastolic = parseFloat(formData.diaBP);
      if (!isNaN(diastolic) && numValue <= diastolic) {
        return "Systolic BP must be higher than Diastolic BP";
      }
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle smoking status change
    if (name === "is_smoking") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        cigsPerDay: value === "NO" ? "0" : prevData.cigsPerDay,
      }));

      // Clear cigarettes error when switching to NO
      if (value === "NO") {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.cigsPerDay;
          return newErrors;
        });
      }
      return;
    }

    if (type === "number") {
      if (value === "" || !isNaN(Number(value))) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

        // Validate on change
        const error = validateField(name, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate all fields with ranges
    Object.keys(VALIDATION_RANGES).forEach((field) => {
      // Skip cigarettes validation if not smoking
      if (field === "cigsPerDay" && formData.is_smoking === "NO") {
        return;
      }

      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRisk = () => {
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector(".border-red-300");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsLoading(true);
    setSubmit(false);
    dispatch(
      addHealthAssessment({
        userId,
        assessmentData: {
          ...formData,
        },
      })
    );
  };

  const getInputClassName = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const baseClass =
      "w-full h-12 px-4 rounded-xl border-2 bg-gray-50 text-gray-900 focus:outline-none transition-all duration-200 placeholder-gray-400";

    if (hasError) {
      return `${baseClass} border-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent`;
    }

    return `${baseClass} border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            CVD Risk Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your cardiovascular disease risk based on Framingham Heart
            Study factors
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden backdrop-blur-lg bg-opacity-90">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateRisk();
            }}
            className="p-8 space-y-8"
          >
            {/* Demographic Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Demographic Information
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="age"
                  >
                    Age <span className="text-red-500">*</span>
                    <span className="text-xs text-gray-500 ml-2">(18-120)</span>
                  </label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={() => handleBlur("age")}
                    autoComplete="off"
                    placeholder="Enter your age"
                    className={getInputClassName("age")}
                  />
                  {touched.age && errors.age && (
                    <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.age}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="sex"
                  >
                    Sex <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    value={formData.sex}
                    required
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-200"
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="education"
                  >
                    Education <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="education"
                    required
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-200"
                  >
                    <option value="10th">Secondary School (10th)</option>
                    <option value="12th">Junior College (12th)</option>
                    <option value="bachelor">Undergraduate (Bachelor's)</option>
                    <option value="master">Postgraduate (Master's)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Behavioral Factors */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Behavioral Factors
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Current Smoker <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex-1">
                      <input
                        type="radio"
                        name="is_smoking"
                        value="YES"
                        checked={formData.is_smoking === "YES"}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <div
                        className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
                                    peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
                                    cursor-pointer transition-all duration-200 font-medium"
                      >
                        Yes
                      </div>
                    </label>
                    <label className="flex-1">
                      <input
                        type="radio"
                        name="is_smoking"
                        value="NO"
                        checked={formData.is_smoking === "NO"}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <div
                        className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
                                    peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
                                    cursor-pointer transition-all duration-200 font-medium"
                      >
                        No
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="cigsPerDay"
                  >
                    Cigarettes Per Day
                    {formData.is_smoking === "YES" && (
                      <span className="text-red-500"> *</span>
                    )}
                    <span className="text-xs text-gray-500 ml-2">(0-100)</span>
                  </label>
                  <input
                    id="cigsPerDay"
                    type="number"
                    name="cigsPerDay"
                    required={formData.is_smoking === "YES"}
                    disabled={formData.is_smoking === "NO"}
                    value={formData.cigsPerDay}
                    onChange={handleChange}
                    onBlur={() => handleBlur("cigsPerDay")}
                    autoComplete="off"
                    placeholder="0"
                    className={`${getInputClassName("cigsPerDay")} ${
                      formData.is_smoking === "NO"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  />
                  {touched.cigsPerDay &&
                    errors.cigsPerDay &&
                    formData.is_smoking === "YES" && (
                      <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.cigsPerDay}</span>
                      </div>
                    )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Medical History */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Medical History
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { name: "bpMeds", label: "On Blood Pressure Medication" },
                  { name: "prevalentStroke", label: "Previous Stroke" },
                  { name: "prevalentHyp", label: "Hypertensive" },
                  { name: "diabetes", label: "Diabetes" },
                ].map((field) => (
                  <div key={field.name} className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex-1">
                        <input
                          type="radio"
                          name={field.name}
                          value="YES"
                          checked={formData[field.name] === "YES"}
                          onChange={handleChange}
                          className="peer sr-only"
                        />
                        <div
                          className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
                                      peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
                                      cursor-pointer transition-all duration-200 font-medium"
                        >
                          Yes
                        </div>
                      </label>
                      <label className="flex-1">
                        <input
                          type="radio"
                          name={field.name}
                          value="NO"
                          checked={formData[field.name] === "NO"}
                          onChange={handleChange}
                          className="peer sr-only"
                        />
                        <div
                          className="h-12 flex items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50
                                      peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700
                                      cursor-pointer transition-all duration-200 font-medium"
                        >
                          No
                        </div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Current Medical Measurements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Current Medical Measurements
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    name: "totChol",
                    label: "Total Cholesterol",
                    unit: "mg/dL",
                    range: "100-400",
                  },
                  {
                    name: "sysBP",
                    label: "Systolic BP",
                    unit: "mmHg",
                    range: "70-250",
                  },
                  {
                    name: "diaBP",
                    label: "Diastolic BP",
                    unit: "mmHg",
                    range: "40-150",
                  },
                  { name: "bmi", label: "BMI", unit: "", range: "10-60" },
                  {
                    name: "heartRate",
                    label: "Heart Rate",
                    unit: "bpm",
                    range: "30-220",
                  },
                  {
                    name: "glucose",
                    label: "Glucose",
                    unit: "mg/dL",
                    range: "40-600",
                  },
                ].map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor={field.name}
                    >
                      {field.label}{" "}
                      {field.unit && (
                        <span className="text-gray-500">({field.unit})</span>
                      )}
                      <span className="text-red-500"> *</span>
                      <span className="text-xs text-gray-500 ml-2">
                        ({field.range})
                      </span>
                    </label>
                    <input
                      id={field.name}
                      type="number"
                      step="0.01"
                      name={field.name}
                      required
                      value={formData[field.name]}
                      onChange={handleChange}
                      onBlur={() => handleBlur(field.name)}
                      autoComplete="off"
                      placeholder="0"
                      className={getInputClassName(field.name)}
                    />
                    {touched[field.name] && errors[field.name] && (
                      <div className="flex items-center space-x-1 text-red-600 text-xs mt-1">
                        <AlertCircle size={12} />
                        <span>{errors[field.name]}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full h-14 rounded-xl font-semibold text-lg shadow-lg
                         transition-all duration-300 transform
                         ${
                           isLoading
                             ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                             : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                         }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
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
                    Calculating...
                  </span>
                ) : (
                  "Calculate Risk Score"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="mt-8 bg-white rounded-3xl shadow-xl p-10">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
                <div className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Analyzing Your Health Data
                </h3>
                <p className="text-gray-600">
                  Please wait while we calculate your cardiovascular risk score
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {isSubmit && riskRate !== null && !isLoading && (
          <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div
              className={`p-8 ${
                riskRate < 10
                  ? "bg-gradient-to-br from-green-50 to-emerald-50"
                  : riskRate < 20
                  ? "bg-gradient-to-br from-yellow-50 to-amber-50"
                  : "bg-gradient-to-br from-red-50 to-rose-50"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        riskRate < 10
                          ? "bg-green-500"
                          : riskRate < 20
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {riskRate < 10 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        ) : riskRate < 20 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        )}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Your CVD Risk Score
                      </p>
                      <h2 className="text-4xl font-bold text-gray-900">
                        {riskRate}%
                      </h2>
                    </div>
                  </div>
                  <p
                    className={`text-base font-medium ${
                      riskRate < 10
                        ? "text-green-800"
                        : riskRate < 20
                        ? "text-yellow-800"
                        : "text-red-800"
                    }`}
                  >
                    {riskRate < 10
                      ? "✓ Low risk: Continue healthy lifestyle habits"
                      : riskRate < 20
                      ? "⚠ Moderate risk: Consider lifestyle modifications"
                      : "⚠ High risk: Consult healthcare provider immediately"}
                  </p>
                </div>

                <div className="hidden md:block">
                  <div
                    className={`w-32 h-32 rounded-full flex items-center justify-center shadow-lg ${
                      riskRate < 10
                        ? "bg-gradient-to-br from-green-400 to-green-600"
                        : riskRate < 20
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                        : "bg-gradient-to-br from-red-400 to-red-600"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        {riskRate}%
                      </div>
                      <div className="text-xs text-white opacity-90">RISK</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-60 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Recommendations:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {riskRate < 10 ? (
                    <>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Maintain regular physical activity and balanced diet
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Continue routine health check-ups
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Monitor blood pressure and cholesterol levels annually
                      </li>
                    </>
                  ) : riskRate < 20 ? (
                    <>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        Increase physical activity to 150 minutes per week
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        Consider dietary changes and stress management
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        Schedule a consultation with your healthcare provider
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Consult with a healthcare provider immediately
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Implement lifestyle changes under medical supervision
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Regular monitoring and possible medication may be needed
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
