// import { useState } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Doughnut, Line } from "react-chartjs-2";
// import userDetails from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/userDetails.json";
// import prevRisks from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/prevRisks.json";
// export default function RiskCalculator() {
//   const [isSubmit, setSubmit] = useState(false);
//   const [riskRate, setriskRate] = useState("");
//   const [formData, setFormData] = useState({
//     age: "",
//     sex: "Male",
//     race: "Other",
//     cholesterol: "",
//     hdl: "",
//     sbp: "",
//     hypertension: false,
//     diabetes: false,
//     smoking: false,
//     ethnicity: "South Asian",
//     familyHistory: false,
//     lpa: "Not Tested",
//     waistToHeight: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const calculateRisk = () => {
//     let baseRisk = 8;
//     if (formData.diabetes === "Yes") baseRisk += 3;
//     if (formData.familyHistory === "Yes") baseRisk += 2;
//     if (formData.lpa === "High") baseRisk += 2;
//     if (parseFloat(formData.waistToHeight) > 0.5) baseRisk += 1;
//     if (formData.ethnicity === "South Asian") baseRisk *= 1.5;
//     alert(`Your adjusted ASCVD Risk Score: ${baseRisk.toFixed(2)}%`);
//     setSubmit(true);
//     setriskRate(5);
//   };

//   const InputField = ({ label, name, type = "text", options, required }) => (
//     <div className="flex flex-col space-y-1.5">
//       <label className="text-sm font-medium">
//         {label}
//         {required && <span className="text-red-500 ml-1">*</span>}
//       </label>
//       {type === "select" ? (
//         <select
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           className="h-10 px-3 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           {options.map((opt) => (
//             <option key={opt}>{opt}</option>
//           ))}
//         </select>
//       ) : type === "radio" ? (
//         <div className="flex space-x-4 pt-1">
//           <label className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name={name}
//               value="Yes"
//               checked={formData[name] === "Yes"}
//               onChange={handleChange}
//               className="h-4 w-4 text-blue-500"
//             />
//             <span className="text-sm">Yes</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name={name}
//               value="No"
//               checked={formData[name] === "No"}
//               onChange={handleChange}
//               className="h-4 w-4 text-blue-500"
//             />
//             <span className="text-sm">No</span>
//           </label>
//         </div>
//       ) : (
//         <input
//           type={type}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           className="h-10 px-3 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       )}
//     </div>
//   );

//   return (
//     <div
//       className="max-w-full mx-4 sm:mx-6 md:mx-auto my-16 bg-gray-100 rounded-lg shadow-lg overflow-hidden
//     "
//     >
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
//         <h1 className="text-2xl font-bold text-white">ASCVD Risk Calculator</h1>
//         <p className="text-blue-100 mt-1">
//           Calculate your cardiovascular disease risk
//         </p>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <div className="space-y-8">
//           {/* Basic Information Section */}
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
//             <div className="grid gap-4 sm:grid-cols-3">
//               <InputField
//                 label="Age"
//                 name="age"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="Sex"
//                 name="sex"
//                 type="select"
//                 options={["Male", "Female"]}
//                 required={true}
//               />
//               <InputField
//                 label="Race"
//                 name="race"
//                 type="select"
//                 options={["White", "African American", "Other"]}
//               />
//             </div>
//           </div>

//           {/* Clinical Measurements */}
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">
//               Clinical Measurements
//             </h3>
//             <div className="grid gap-4 sm:grid-cols-3">
//               <InputField
//                 label="Total Cholesterol (mg/dL)"
//                 name="cholesterol"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="HDL Cholesterol (mg/dL)"
//                 name="hdl"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="Systolic Blood Pressure (mmHg)"
//                 name="sbp"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="Waist-to-Height Ratio"
//                 name="waistToHeight"
//                 type="number"
//               />
//             </div>
//           </div>

//           {/* Medical History */}
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">Medical History</h3>
//             <div className="grid gap-4 sm:grid-cols-2">
//               <InputField
//                 label="On Hypertension Medication?"
//                 name="hypertension"
//                 type="radio"
//                 required={true}
//               />
//               <InputField
//                 label="Have Diabetes?"
//                 name="diabetes"
//                 type="radio"
//                 required={true}
//               />
//               <InputField
//                 label="Do You Smoke?"
//                 name="smoking"
//                 type="radio"
//                 required={true}
//               />
//               <InputField
//                 label="Family History of Early Heart Disease?"
//                 name="familyHistory"
//                 type="radio"
//               />
//             </div>
//           </div>

//           {/* Additional Risk Factors */}
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">
//               Additional Risk Factors
//             </h3>
//             <div className="grid gap-4 sm:grid-cols-2">
//               <InputField
//                 label="Ethnicity"
//                 name="ethnicity"
//                 type="select"
//                 options={["South Asian", "Other"]}
//               />
//               <InputField
//                 label="Lipoprotein(a)"
//                 name="lpa"
//                 type="select"
//                 options={["Not Tested", "High", "Normal"]}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center">
//           <button
//             onClick={calculateRisk}
//             className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold
//                      shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2
//                      focus:ring-blue-500"
//           >
//             Calculate Risk Score
//           </button>
//         </div>
//       </div>
//       {isSubmit && (
//         <div>
//           <div className="my-16 flex justify-center items-center">
//             <div
//               className={`bg-red-500 border border-red-200 w-full mx-2 px-2 h-16 flex justify-start items-center rounded-lg ${
//                 riskRate < 5
//                   ? "bg-green-400"
//                   : riskRate < 20
//                   ? "bg-yellow-400"
//                   : "bg-red-600"
//               }`}
//             >
//               <h2 className="text-2xl">{riskRate}</h2>
//             </div>
//           </div>
//           <div className="my-16 flex justify-center items-center">
//             <Bar
//               data={{
//                 labels: userDetails.patients.map(
//                   (data) => `Patient ${data.id}`
//                 ),
//                 datasets: [
//                   {
//                     label: "Blood Pressure",
//                     data: userDetails.patients.map((data) => data.cholesterol),
//                   },
//                 ],
//               }}
//             />
//           </div>
//           <div className="my-16 flex justify-center items-center">
//             <Line
//               data={{
//                 labels: prevRisks.userData.map((data) => `${data.time}`),
//                 datasets: [
//                   {
//                     label: "Risk Rate",
//                     data: prevRisks.userData.map((data) => data.risk_rate),
//                   },
//                 ],
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect, useCallback } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Doughnut, Line } from "react-chartjs-2";
// import userDetails from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/userDetails.json";
// import prevRisks from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/prevRisks.json";
// export default function RiskCalculator() {
//   const [isSubmit, setSubmit] = useState(false);
//   const [riskRate, setriskRate] = useState("");
//   const [formData, setFormData] = useState({
//     age: "",
//     sex: "Male",
//     race: "Other",
//     cholesterol: "",
//     hdl: "",
//     sbp: "",
//     hypertension: false,
//     diabetes: false,
//     smoking: false,
//     ethnicity: "South Asian",
//     familyHistory: false,
//     lpa: "Not Tested",
//     waistToHeight: "",
//   });

//   const handleChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   });

//   const calculateRisk = () => {
//     let baseRisk = 8;
//     if (formData.diabetes === "Yes") baseRisk += 3;
//     if (formData.familyHistory === "Yes") baseRisk += 2;
//     if (formData.lpa === "High") baseRisk += 2;
//     if (parseFloat(formData.waistToHeight) > 0.5) baseRisk += 1;
//     if (formData.ethnicity === "South Asian") baseRisk *= 1.5;
//     alert(`Your adjusted ASCVD Risk Score: ${baseRisk.toFixed(2)}%`);
//     setSubmit(true);
//     setriskRate(5);
//   };

//   const InputField = ({ label, name, type = "text", options, required }) => (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm font-medium text-gray-700">
//         {label}
//         {required && <span className="text-red-500 ml-1">*</span>}
//       </label>
//       {type === "select" ? (
//         <select
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                      transition-colors duration-200"
//         >
//           {options.map((opt) => (
//             <option key={opt}>{opt}</option>
//           ))}
//         </select>
//       ) : type === "radio" ? (
//         <div className="flex space-x-6 pt-1">
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               name={name}
//               value="Yes"
//               checked={formData[name] === "Yes"}
//               onChange={handleChange}
//               className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//             />
//             <span className="text-sm text-gray-700">Yes</span>
//           </label>
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               name={name}
//               value="No"
//               checked={formData[name] === "No"}
//               onChange={handleChange}
//               className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//             />
//             <span className="text-sm text-gray-700">No</span>
//           </label>
//         </div>
//       ) : (
//         <input
//           type={type}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                      transition-colors duration-200"
//         />
//       )}
//     </div>
//   );

//   return (
//     <div className="max-w-6xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-5">
//         <h1 className="text-2xl font-bold text-white">ASCVD Risk Calculator</h1>
//         <p className="text-teal-100 mt-1 text-sm">
//           Calculate your cardiovascular disease risk and take control of your
//           heart health
//         </p>
//       </div>

//       {/* Content */}
//       <div className="p-6 bg-gray-50">
//         <div className="space-y-6">
//           {/* Basic Information Section */}
//           <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//             <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//               Basic Information
//             </h3>
//             <div className="grid gap-5 sm:grid-cols-3">
//               <InputField
//                 label="Age"
//                 name="age"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="Sex"
//                 name="sex"
//                 type="select"
//                 options={["Male", "Female"]}
//                 required={true}
//               />
//               <InputField
//                 label="Race"
//                 name="race"
//                 type="select"
//                 options={["White", "African American", "Other"]}
//               />
//             </div>
//           </div>

//           {/* Clinical Measurements */}
//           <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//             <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//               Clinical Measurements
//             </h3>
//             <div className="grid gap-5 sm:grid-cols-3">
//               <InputField
//                 label="Total Cholesterol (mg/dL)"
//                 name="cholesterol"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="HDL Cholesterol (mg/dL)"
//                 name="hdl"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="Systolic Blood Pressure (mmHg)"
//                 name="sbp"
//                 type="number"
//                 required={true}
//               />
//               <InputField
//                 label="Waist-to-Height Ratio"
//                 name="waistToHeight"
//                 type="number"
//               />
//             </div>
//           </div>

//           {/* Medical History */}
//           <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//             <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//               Medical History
//             </h3>
//             <div className="grid gap-5 sm:grid-cols-2">
//               <InputField
//                 label="On Hypertension Medication?"
//                 name="hypertension"
//                 type="radio"
//                 required={true}
//               />
//               <InputField
//                 label="Have Diabetes?"
//                 name="diabetes"
//                 type="radio"
//                 required={true}
//               />
//               <InputField
//                 label="Do You Smoke?"
//                 name="smoking"
//                 type="radio"
//                 required={true}
//               />
//               <InputField
//                 label="Family History of Early Heart Disease?"
//                 name="familyHistory"
//                 type="radio"
//               />
//             </div>
//           </div>

//           {/* Additional Risk Factors */}
//           <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//             <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//               Additional Risk Factors
//             </h3>
//             <div className="grid gap-5 sm:grid-cols-2">
//               <InputField
//                 label="Ethnicity"
//                 name="ethnicity"
//                 type="select"
//                 options={["South Asian", "Other"]}
//               />
//               <InputField
//                 label="Lipoprotein(a)"
//                 name="lpa"
//                 type="select"
//                 options={["Not Tested", "High", "Normal"]}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center">
//           <button
//             onClick={calculateRisk}
//             className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium
//                      shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2
//                      focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
//           >
//             Calculate Risk Score
//           </button>
//         </div>
//       </div>
//       {isSubmit && (
//         <div>
//           <div className="my-8 flex justify-center items-center px-6">
//             <div
//               className={`border w-full px-4 py-5 flex justify-between items-center rounded-lg ${
//                 riskRate < 5
//                   ? "bg-green-50 border-green-200 text-green-800"
//                   : riskRate < 20
//                   ? "bg-yellow-50 border-yellow-200 text-yellow-800"
//                   : "bg-red-50 border-red-200 text-red-800"
//               }`}
//             >
//               <h2 className="text-2xl font-semibold">
//                 Your Risk Score: {riskRate}%
//               </h2>
//               <div
//                 className={`w-20 h-20 rounded-full flex items-center justify-center ${
//                   riskRate < 5
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
//           <div className="my-8 px-6">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Blood Pressure Comparison
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Bar
//                 data={{
//                   labels: userDetails.patients.map(
//                     (data) => `Patient ${data.id}`
//                   ),
//                   datasets: [
//                     {
//                       label: "Blood Pressure",
//                       data: userDetails.patients.map(
//                         (data) => data.cholesterol
//                       ),
//                       backgroundColor: "rgba(20, 184, 166, 0.6)",
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Patient Comparison",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//           <div className="my-8 px-6 mb-10">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Your Risk History
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Line
//                 data={{
//                   labels: prevRisks.userData.map((data) => `${data.time}`),
//                   datasets: [
//                     {
//                       label: "Risk Rate",
//                       data: prevRisks.userData.map((data) => data.risk_rate),
//                       borderColor: "rgba(20, 184, 166, 1)",
//                       backgroundColor: "rgba(20, 184, 166, 0.1)",
//                       tension: 0.3,
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Risk Trend Over Time",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Line } from "react-chartjs-2";
// import userDetails from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/userDetails.json";
// import prevRisks from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/prevRisks.json";

// export default function RiskCalculator() {
//   const [isSubmit, setSubmit] = useState(false);
//   const [riskRate, setriskRate] = useState("");
//   const [formData, setFormData] = useState({
//     // Demographic
//     age: "",
//     sex: "M",

//     // Behavioral
//     is_smoking: "NO",
//     cigsPerDay: "",

//     // Medical (history)
//     bpMeds: "NO",
//     prevalentStroke: "NO",
//     prevalentHyp: "NO",
//     diabetes: "NO",

//     // Medical (current)
//     totChol: "",
//     sysBP: "",
//     diaBP: "",
//     bmi: "",
//     heartRate: "",
//     glucose: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     // For number inputs, properly handle numeric values without causing focus loss
//     if (type === "number") {
//       // Only update state if it's empty or a valid number
//       // Don't convert to number here, keep as string in state
//       if (value === "" || !isNaN(Number(value))) {
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value, // Keep as string to maintain input control
//         }));
//       }
//     } else {
//       // For non-numeric inputs
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const calculateRisk = () => {
//     // Simple risk calculation algorithm
//     // This would need to be replaced with the actual ASCVD algorithm
//     let baseRisk = 5; // Base risk

//     // Demographic factors
//     if (parseInt(formData.age) > 55) baseRisk += 2;
//     if (formData.sex === "M") baseRisk += 1;

//     // Behavioral factors
//     if (formData.is_smoking === "YES") baseRisk += 2;
//     if (parseInt(formData.cigsPerDay) > 10)
//       baseRisk += parseFloat((parseInt(formData.cigsPerDay) / 10).toFixed(1));

//     // Medical history
//     if (formData.bpMeds === "YES") baseRisk += 1;
//     if (formData.prevalentStroke === "YES") baseRisk += 3;
//     if (formData.prevalentHyp === "YES") baseRisk += 2;
//     if (formData.diabetes === "YES") baseRisk += 2;

//     // Current medical factors
//     if (parseInt(formData.totChol) > 200) baseRisk += 1.5;
//     if (parseInt(formData.sysBP) > 140) baseRisk += 2;
//     if (parseInt(formData.diaBP) > 90) baseRisk += 1;
//     if (parseFloat(formData.bmi) > 30) baseRisk += 1;
//     if (parseInt(formData.heartRate) > 100) baseRisk += 0.5;
//     if (parseInt(formData.glucose) > 120) baseRisk += 1;

//     alert(`Your calculated CVD Risk Score: ${baseRisk.toFixed(2)}%`);
//     setSubmit(true);
//     setriskRate(baseRisk.toFixed(1));
//   };

//   const InputField = ({ label, name, type = "text", options, required }) => (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm font-medium text-gray-700" htmlFor={name}>
//         {label}
//         {required && <span className="text-red-500 ml-1">*</span>}
//       </label>
//       {type === "select" ? (
//         <select
//           id={name}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                      transition-colors duration-200"
//         >
//           {options.map((opt) => (
//             <option key={opt} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </select>
//       ) : type === "radio" ? (
//         <div className="flex space-x-6 pt-1">
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               id={`${name}-yes`}
//               name={name}
//               value="YES"
//               checked={formData[name] === "YES"}
//               onChange={handleChange}
//               className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//             />
//             <span className="text-sm text-gray-700">Yes</span>
//           </label>
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               id={`${name}-no`}
//               name={name}
//               value="NO"
//               checked={formData[name] === "NO"}
//               onChange={handleChange}
//               className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//             />
//             <span className="text-sm text-gray-700">No</span>
//           </label>
//         </div>
//       ) : (
//         <input
//           id={name}
//           type={type}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           autoComplete="off"
//           className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                      transition-colors duration-200"
//         />
//       )}
//     </div>
//   );

//   return (
//     <div className="max-w-6xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-5">
//         <h1 className="text-2xl font-bold text-white">CVD Risk Calculator</h1>
//         <p className="text-teal-100 mt-1 text-sm">
//           Calculate your cardiovascular disease risk based on Framingham Heart
//           Study factors
//         </p>
//       </div>

//       {/* Content */}
//       <div className="p-6 bg-gray-50">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             calculateRisk();
//           }}
//         >
//           <div className="space-y-6">
//             {/* Demographic Information */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Demographic Information
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="Age"
//                   name="age"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Sex"
//                   name="sex"
//                   type="select"
//                   options={["M", "F"]}
//                   required={true}
//                 />
//               </div>
//             </div>

//             {/* Behavioral Factors */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Behavioral Factors
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="Current Smoker"
//                   name="is_smoking"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Cigarettes Per Day"
//                   name="cigsPerDay"
//                   type="number"
//                   required={false}
//                 />
//               </div>
//             </div>

//             {/* Medical History */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Medical History
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="On Blood Pressure Medication"
//                   name="bpMeds"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Previous Stroke"
//                   name="prevalentStroke"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Hypertensive"
//                   name="prevalentHyp"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Diabetes"
//                   name="diabetes"
//                   type="radio"
//                   required={true}
//                 />
//               </div>
//             </div>

//             {/* Current Medical Measurements */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Current Medical Measurements
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-3">
//                 <InputField
//                   label="Total Cholesterol (mg/dL)"
//                   name="totChol"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Systolic BP (mmHg)"
//                   name="sysBP"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Diastolic BP (mmHg)"
//                   name="diaBP"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="BMI"
//                   name="bmi"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Heart Rate (bpm)"
//                   name="heartRate"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Glucose (mg/dL)"
//                   name="glucose"
//                   type="number"
//                   required={true}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 flex justify-center">
//             <button
//               type="submit"
//               className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium
//                        shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2
//                        focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
//             >
//               Calculate Risk Score
//             </button>
//           </div>
//         </form>
//       </div>

//       {isSubmit && (
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

//           <div className="my-8 px-6">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Risk Factors Comparison
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Bar
//                 data={{
//                   labels: userDetails.patients.map(
//                     (data) => `Patient ${data.id}`
//                   ),
//                   datasets: [
//                     {
//                       label: "Cholesterol",
//                       data: userDetails.patients.map(
//                         (data) => data.cholesterol
//                       ),
//                       backgroundColor: "rgba(20, 184, 166, 0.6)",
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Patient Comparison",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>

//           <div className="my-8 px-6 mb-10">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Your Risk History
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Line
//                 data={{
//                   labels: prevRisks.userData.map((data) => `${data.time}`),
//                   datasets: [
//                     {
//                       label: "Risk Rate",
//                       data: prevRisks.userData.map((data) => data.risk_rate),
//                       borderColor: "rgba(20, 184, 166, 1)",
//                       backgroundColor: "rgba(20, 184, 166, 0.1)",
//                       tension: 0.3,
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Risk Trend Over Time",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Line } from "react-chartjs-2";
// import userDetails from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/userDetails.json";
// import prevRisks from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/prevRisks.json";

// export default function RiskCalculator() {
//   const [isSubmit, setSubmit] = useState(false);
//   const [riskRate, setriskRate] = useState("");
//   const [formData, setFormData] = useState({
//     // Demographic
//     age: "",
//     sex: "M",

//     // Behavioral
//     is_smoking: "NO",
//     cigsPerDay: "",

//     // Medical (history)
//     bpMeds: "NO",
//     prevalentStroke: "NO",
//     prevalentHyp: "NO",
//     diabetes: "NO",

//     // Medical (current)
//     totChol: "",
//     sysBP: "",
//     diaBP: "",
//     bmi: "",
//     heartRate: "",
//     glucose: "",
//   });

//   // The key issue is likely that parsing the value as a number in handleChange
//   // is causing problems. Let's make a very simple change handler that accepts all input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const calculateRisk = () => {
//     // Simple risk calculation algorithm
//     // This would need to be replaced with the actual ASCVD algorithm
//     let baseRisk = 5; // Base risk

//     // When calculating, NOW we can parse as numbers
//     // Demographic factors
//     if (Number(formData.age) > 55) baseRisk += 2;
//     if (formData.sex === "M") baseRisk += 1;

//     // Behavioral factors
//     if (formData.is_smoking === "YES") baseRisk += 2;
//     if (Number(formData.cigsPerDay) > 10)
//       baseRisk += parseFloat((Number(formData.cigsPerDay) / 10).toFixed(1));

//     // Medical history
//     if (formData.bpMeds === "YES") baseRisk += 1;
//     if (formData.prevalentStroke === "YES") baseRisk += 3;
//     if (formData.prevalentHyp === "YES") baseRisk += 2;
//     if (formData.diabetes === "YES") baseRisk += 2;

//     // Current medical factors
//     if (Number(formData.totChol) > 200) baseRisk += 1.5;
//     if (Number(formData.sysBP) > 140) baseRisk += 2;
//     if (Number(formData.diaBP) > 90) baseRisk += 1;
//     if (Number(formData.bmi) > 30) baseRisk += 1;
//     if (Number(formData.heartRate) > 100) baseRisk += 0.5;
//     if (Number(formData.glucose) > 120) baseRisk += 1;

//     alert(`Your calculated CVD Risk Score: ${baseRisk.toFixed(2)}%`);
//     setSubmit(true);
//     setriskRate(baseRisk.toFixed(1));
//   };

//   // Modified InputField component
//   const InputField = ({ label, name, type = "text", options, required }) => {
//     // For number inputs, handle input cleaning on the blur event
//     const handleBlur = (e) => {
//       if (type === "number") {
//         // Clean up invalid number inputs when focus leaves the field
//         const value = e.target.value;
//         if (value && isNaN(Number(value))) {
//           setFormData((prev) => ({
//             ...prev,
//             [name]: "",
//           }));
//         }
//       }
//     };

//     return (
//       <div className="flex flex-col space-y-2">
//         <label className="text-sm font-medium text-gray-700" htmlFor={name}>
//           {label}
//           {required && <span className="text-red-500 ml-1">*</span>}
//         </label>
//         {type === "select" ? (
//           <select
//             id={name}
//             name={name}
//             value={formData[name]}
//             onChange={handleChange}
//             className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                       transition-colors duration-200"
//           >
//             {options.map((opt) => (
//               <option key={opt} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         ) : type === "radio" ? (
//           <div className="flex space-x-6 pt-1">
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 id={`${name}-yes`}
//                 name={name}
//                 value="YES"
//                 checked={formData[name] === "YES"}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//               />
//               <span className="text-sm text-gray-700">Yes</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 id={`${name}-no`}
//                 name={name}
//                 value="NO"
//                 checked={formData[name] === "NO"}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//               />
//               <span className="text-sm text-gray-700">No</span>
//             </label>
//           </div>
//         ) : (
//           <input
//             id={name}
//             type={type === "number" ? "text" : type} // Use text input for numbers to avoid browser constraints
//             inputMode={type === "number" ? "numeric" : "text"} // Provide numeric keyboard on mobile
//             name={name}
//             value={formData[name]}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             autoComplete="off"
//             className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                       transition-colors duration-200"
//           />
//         )}
//       </div>
//     );
//   };

//   // The rest of the component remains unchanged
//   return (
//     <div className="max-w-6xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-5">
//         <h1 className="text-2xl font-bold text-white">CVD Risk Calculator</h1>
//         <p className="text-teal-100 mt-1 text-sm">
//           Calculate your cardiovascular disease risk based on Framingham Heart
//           Study factors
//         </p>
//       </div>

//       {/* Content */}
//       <div className="p-6 bg-gray-50">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             calculateRisk();
//           }}
//         >
//           <div className="space-y-6">
//             {/* Demographic Information */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Demographic Information
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="Age"
//                   name="age"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Sex"
//                   name="sex"
//                   type="select"
//                   options={["M", "F"]}
//                   required={true}
//                 />
//               </div>
//             </div>

//             {/* Behavioral Factors */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Behavioral Factors
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="Current Smoker"
//                   name="is_smoking"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Cigarettes Per Day"
//                   name="cigsPerDay"
//                   type="number"
//                   required={false}
//                 />
//               </div>
//             </div>

//             {/* Medical History */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Medical History
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="On Blood Pressure Medication"
//                   name="bpMeds"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Previous Stroke"
//                   name="prevalentStroke"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Hypertensive"
//                   name="prevalentHyp"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Diabetes"
//                   name="diabetes"
//                   type="radio"
//                   required={true}
//                 />
//               </div>
//             </div>

//             {/* Current Medical Measurements */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Current Medical Measurements
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-3">
//                 <InputField
//                   label="Total Cholesterol (mg/dL)"
//                   name="totChol"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Systolic BP (mmHg)"
//                   name="sysBP"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Diastolic BP (mmHg)"
//                   name="diaBP"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="BMI"
//                   name="bmi"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Heart Rate (bpm)"
//                   name="heartRate"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Glucose (mg/dL)"
//                   name="glucose"
//                   type="number"
//                   required={true}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 flex justify-center">
//             <button
//               type="submit"
//               className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium
//                        shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2
//                        focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
//             >
//               Calculate Risk Score
//             </button>
//           </div>
//         </form>
//       </div>

//       {isSubmit && (
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

//           <div className="my-8 px-6">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Risk Factors Comparison
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Bar
//                 data={{
//                   labels: userDetails.patients.map(
//                     (data) => `Patient ${data.id}`
//                   ),
//                   datasets: [
//                     {
//                       label: "Cholesterol",
//                       data: userDetails.patients.map(
//                         (data) => data.cholesterol
//                       ),
//                       backgroundColor: "rgba(20, 184, 166, 0.6)",
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Patient Comparison",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>

//           <div className="my-8 px-6 mb-10">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Your Risk History
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Line
//                 data={{
//                   labels: prevRisks.userData.map((data) => `${data.time}`),
//                   datasets: [
//                     {
//                       label: "Risk Rate",
//                       data: prevRisks.userData.map((data) => data.risk_rate),
//                       borderColor: "rgba(20, 184, 166, 1)",
//                       backgroundColor: "rgba(20, 184, 166, 0.1)",
//                       tension: 0.3,
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Risk Trend Over Time",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useRef } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Line } from "react-chartjs-2";
// import userDetails from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/userDetails.json";
// import prevRisks from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/prevRisks.json";
// import React from "react";
// export default function RiskCalculator() {
//   const [isSubmit, setSubmit] = useState(false);
//   const [riskRate, setriskRate] = useState("");
//   const [formData, setFormData] = useState({
//     // Demographic
//     age: "",
//     sex: "M",

//     // Behavioral
//     is_smoking: "NO",
//     cigsPerDay: "",

//     // Medical (history)
//     bpMeds: "NO",
//     prevalentStroke: "NO",
//     prevalentHyp: "NO",
//     diabetes: "NO",

//     // Medical (current)
//     totChol: "",
//     sysBP: "",
//     diaBP: "",
//     bmi: "",
//     heartRate: "",
//     glucose: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     // For number inputs, we'll still validate but in a way that doesn't break focus
//     if (type === "number") {
//       // Only update if it's empty or a valid number
//       if (value === "" || !isNaN(Number(value))) {
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       }
//     } else {
//       // For non-numeric inputs
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const calculateRisk = () => {
//     // Simple risk calculation algorithm
//     // This would need to be replaced with the actual ASCVD algorithm
//     let baseRisk = 5; // Base risk

//     // Demographic factors
//     if (parseInt(formData.age) > 55) baseRisk += 2;
//     if (formData.sex === "M") baseRisk += 1;

//     // Behavioral factors
//     if (formData.is_smoking === "YES") baseRisk += 2;
//     if (parseInt(formData.cigsPerDay) > 10)
//       baseRisk += parseFloat((parseInt(formData.cigsPerDay) / 10).toFixed(1));

//     // Medical history
//     if (formData.bpMeds === "YES") baseRisk += 1;
//     if (formData.prevalentStroke === "YES") baseRisk += 3;
//     if (formData.prevalentHyp === "YES") baseRisk += 2;
//     if (formData.diabetes === "YES") baseRisk += 2;

//     // Current medical factors
//     if (parseInt(formData.totChol) > 200) baseRisk += 1.5;
//     if (parseInt(formData.sysBP) > 140) baseRisk += 2;
//     if (parseInt(formData.diaBP) > 90) baseRisk += 1;
//     if (parseFloat(formData.bmi) > 30) baseRisk += 1;
//     if (parseInt(formData.heartRate) > 100) baseRisk += 0.5;
//     if (parseInt(formData.glucose) > 120) baseRisk += 1;

//     alert(`Your calculated CVD Risk Score: ${baseRisk.toFixed(2)}%`);
//     setSubmit(true);
//     setriskRate(baseRisk.toFixed(1));
//   };

//   // Using a memo pattern for the input field to prevent unnecessary re-renders
//   const InputField = React.memo(
//     ({ label, name, type = "text", options, required }) => (
//       <div className="flex flex-col space-y-2">
//         <label className="text-sm font-medium text-gray-700" htmlFor={name}>
//           {label}
//           {required && <span className="text-red-500 ml-1">*</span>}
//         </label>
//         {type === "select" ? (
//           <select
//             id={name}
//             name={name}
//             value={formData[name]}
//             onChange={handleChange}
//             className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                      transition-colors duration-200"
//           >
//             {options.map((opt) => (
//               <option key={opt} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         ) : type === "radio" ? (
//           <div className="flex space-x-6 pt-1">
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 id={`${name}-yes`}
//                 name={name}
//                 value="YES"
//                 checked={formData[name] === "YES"}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//               />
//               <span className="text-sm text-gray-700">Yes</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 id={`${name}-no`}
//                 name={name}
//                 value="NO"
//                 checked={formData[name] === "NO"}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
//               />
//               <span className="text-sm text-gray-700">No</span>
//             </label>
//           </div>
//         ) : (
//           <input
//             id={name}
//             type={type}
//             name={name}
//             value={formData[name]}
//             onChange={handleChange}
//             autoComplete="off"
//             className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
//                      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
//                      transition-colors duration-200"
//           />
//         )}
//       </div>
//     )
//   );

//   return (
//     <div className="max-w-6xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-5">
//         <h1 className="text-2xl font-bold text-white">CVD Risk Calculator</h1>
//         <p className="text-teal-100 mt-1 text-sm">
//           Calculate your cardiovascular disease risk based on Framingham Heart
//           Study factors
//         </p>
//       </div>

//       {/* Content */}
//       <div className="p-6 bg-gray-50">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             calculateRisk();
//           }}
//         >
//           <div className="space-y-6">
//             {/* Demographic Information */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Demographic Information
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="Age"
//                   name="age"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Sex"
//                   name="sex"
//                   type="select"
//                   options={["M", "F"]}
//                   required={true}
//                 />
//               </div>
//             </div>

//             {/* Behavioral Factors */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Behavioral Factors
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="Current Smoker"
//                   name="is_smoking"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Cigarettes Per Day"
//                   name="cigsPerDay"
//                   type="number"
//                   required={false}
//                 />
//               </div>
//             </div>

//             {/* Medical History */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Medical History
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <InputField
//                   label="On Blood Pressure Medication"
//                   name="bpMeds"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Previous Stroke"
//                   name="prevalentStroke"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Hypertensive"
//                   name="prevalentHyp"
//                   type="radio"
//                   required={true}
//                 />
//                 <InputField
//                   label="Diabetes"
//                   name="diabetes"
//                   type="radio"
//                   required={true}
//                 />
//               </div>
//             </div>

//             {/* Current Medical Measurements */}
//             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
//                 Current Medical Measurements
//               </h3>
//               <div className="grid gap-5 sm:grid-cols-3">
//                 <InputField
//                   label="Total Cholesterol (mg/dL)"
//                   name="totChol"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Systolic BP (mmHg)"
//                   name="sysBP"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Diastolic BP (mmHg)"
//                   name="diaBP"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="BMI"
//                   name="bmi"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Heart Rate (bpm)"
//                   name="heartRate"
//                   type="number"
//                   required={true}
//                 />
//                 <InputField
//                   label="Glucose (mg/dL)"
//                   name="glucose"
//                   type="number"
//                   required={true}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 flex justify-center">
//             <button
//               type="submit"
//               className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium
//                        shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2
//                        focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200"
//             >
//               Calculate Risk Score
//             </button>
//           </div>
//         </form>
//       </div>

//       {isSubmit && (
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

//           <div className="my-8 px-6">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Risk Factors Comparison
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Bar
//                 data={{
//                   labels: userDetails.patients.map(
//                     (data) => `Patient ${data.id}`
//                   ),
//                   datasets: [
//                     {
//                       label: "Cholesterol",
//                       data: userDetails.patients.map(
//                         (data) => data.cholesterol
//                       ),
//                       backgroundColor: "rgba(20, 184, 166, 0.6)",
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Patient Comparison",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>

//           <div className="my-8 px-6 mb-10">
//             <h3 className="text-lg font-semibold mb-3 text-gray-700">
//               Your Risk History
//             </h3>
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <Line
//                 data={{
//                   labels: prevRisks.userData.map((data) => `${data.time}`),
//                   datasets: [
//                     {
//                       label: "Risk Rate",
//                       data: prevRisks.userData.map((data) => data.risk_rate),
//                       borderColor: "rgba(20, 184, 166, 1)",
//                       backgroundColor: "rgba(20, 184, 166, 0.1)",
//                       tension: 0.3,
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: {
//                       position: "top",
//                     },
//                     title: {
//                       display: true,
//                       text: "Risk Trend Over Time",
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import userDetails from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/userDetails.json";
import prevRisks from "D:/Projects/ASCVD Risk Assessment/Frontend/src/Data/prevRisks.json";
import Loader from "../../components/afterLogComp/Loader";
import React from "react";
import {
  addHealthAssessment,
  selectLatestAssessment,
} from "../../features/healthSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RiskCalculator() {
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [riskRate, setRiskRate] = useState(null);
  const [formData, setFormData] = useState({
    // Demographic
    age: "",
    sex: "M",
    education: "10th",

    is_smoking: "NO",
    cigsPerDay: "",

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

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      // Only update if it's empty or a valid number
      if (value === "" || !isNaN(Number(value))) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      // For non-numeric inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const calculateRisk = () => {
    // Simple risk calculation algorithm
    // This would need to be replaced with the actual ASCVD algorithm
    // let baseRisk = 5; // Base risk

    // // Demographic factors
    // if (parseInt(formData.age) > 55) baseRisk += 2;
    // if (formData.sex === "M") baseRisk += 1;

    // // Behavioral factors
    // if (formData.is_smoking === "YES") baseRisk += 2;
    // if (parseInt(formData.cigsPerDay) > 10)
    //   baseRisk += parseFloat((parseInt(formData.cigsPerDay) / 10).toFixed(1));

    // // Medical history
    // if (formData.bpMeds === "YES") baseRisk += 1;
    // if (formData.prevalentStroke === "YES") baseRisk += 3;
    // if (formData.prevalentHyp === "YES") baseRisk += 2;
    // if (formData.diabetes === "YES") baseRisk += 2;

    // // Current medical factors
    // if (parseInt(formData.totChol) > 200) baseRisk += 1.5;
    // if (parseInt(formData.sysBP) > 140) baseRisk += 2;
    // if (parseInt(formData.diaBP) > 90) baseRisk += 1;
    // if (parseFloat(formData.bmi) > 30) baseRisk += 1;
    // if (parseInt(formData.heartRate) > 100) baseRisk += 0.5;
    // if (parseInt(formData.glucose) > 120) baseRisk += 1;

    // alert(`Your calculated CVD Risk Score: ${baseRisk.toFixed(2)}%`);
    // setSubmit(true);
    // setriskRate(baseRisk.toFixed(1));
    // formData.risk_Score = baseRisk;
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

  return (
    <div className="max-w-6xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-5">
        <h1 className="text-2xl font-bold text-white">CVD Risk Calculator</h1>
        <p className="text-teal-100 mt-1 text-sm">
          Calculate your cardiovascular disease risk based on Framingham Heart
          Study factors
        </p>
      </div>

      {/* Content */}
      <div className="p-6 bg-gray-50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateRisk();
          }}
        >
          <div className="space-y-6">
            {/* Demographic Information */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Demographic Information
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Age Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="age"
                  >
                    Age
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                {/* Sex Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="sex"
                  >
                    Sex
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    value={formData.sex}
                    required
                    onChange={handleChange}
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  >
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="sex"
                  >
                    Education
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="education"
                    required
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  >
                    <option value="10th">Secondary School (10th)</option>
                    <option value="12th">Junior College (12th)</option>
                    <option value="bachelor">Undergraduate (Bachelor's)</option>
                    <option value="master">Postgraduate (Master's)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Behavioral Factors */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Behavioral Factors
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Smoking Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="is_smoking"
                    required
                  >
                    Current Smoker
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="is_smoking-yes"
                        name="is_smoking"
                        value="YES"
                        checked={formData.is_smoking === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="is_smoking-no"
                        name="is_smoking"
                        value="NO"
                        checked={formData.is_smoking === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Cigarettes Per Day Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="cigsPerDay"
                  >
                    Cigarettes Per Day
                  </label>
                  <input
                    id="cigsPerDay"
                    type="number"
                    name="cigsPerDay"
                    required
                    value={formData.cigsPerDay}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Medical History
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* BP Meds Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="bpMeds"
                    required
                  >
                    On Blood Pressure Medication
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="bpMeds-yes"
                        name="bpMeds"
                        value="YES"
                        checked={formData.bpMeds === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="bpMeds-no"
                        name="bpMeds"
                        value="NO"
                        checked={formData.bpMeds === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Previous Stroke Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="prevalentStroke"
                    required
                  >
                    Previous Stroke
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentStroke-yes"
                        name="prevalentStroke"
                        value="YES"
                        checked={formData.prevalentStroke === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentStroke-no"
                        name="prevalentStroke"
                        value="NO"
                        checked={formData.prevalentStroke === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Hypertensive Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="prevalentHyp"
                    required
                  >
                    Hypertensive
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentHyp-yes"
                        name="prevalentHyp"
                        value="YES"
                        checked={formData.prevalentHyp === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentHyp-no"
                        name="prevalentHyp"
                        value="NO"
                        checked={formData.prevalentHyp === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Diabetes Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="diabetes"
                    required
                  >
                    Diabetes
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="diabetes-yes"
                        name="diabetes"
                        value="YES"
                        checked={formData.diabetes === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="diabetes-no"
                        name="diabetes"
                        value="NO"
                        checked={formData.diabetes === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Medical Measurements */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Current Medical Measurements
              </h3>
              <div className="grid gap-5 sm:grid-cols-3">
                {/* Total Cholesterol Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="totChol"
                  >
                    Total Cholesterol (mg/dL)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="totChol"
                    type="number"
                    name="totChol"
                    required
                    value={formData.totChol}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                {/* Systolic BP Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="sysBP"
                  >
                    Systolic BP (mmHg)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="sysBP"
                    type="number"
                    name="sysBP"
                    required
                    value={formData.sysBP}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                {/* Diastolic BP Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="diaBP"
                  >
                    Diastolic BP (mmHg)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="diaBP"
                    type="number"
                    name="diaBP"
                    required
                    value={formData.diaBP}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                {/* BMI Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="bmi"
                  >
                    BMI
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="bmi"
                    type="number"
                    name="bmi"
                    required
                    value={formData.bmi}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                {/* Heart Rate Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="heartRate"
                  >
                    Heart Rate (bpm)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="heartRate"
                    type="number"
                    name="heartRate"
                    required
                    value={formData.heartRate}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                {/* Glucose Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="glucose"
                  >
                    Glucose (mg/dL)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="glucose"
                    type="number"
                    name="glucose"
                    required
                    value={formData.glucose}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-3 rounded-lg font-medium shadow-md focus:outline-none focus:ring-2
                       focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200
                       ${
                         isLoading
                           ? "bg-gray-400 text-white cursor-not-allowed"
                           : "bg-teal-600 text-white hover:bg-teal-700"
                       }`}
            >
              {isLoading ? "Calculating..." : "Calculate Risk Score"}
            </button>
          </div>
        </form>
      </div>

      {isLoading && (
        <div className="my-8 flex justify-center items-center px-6">
          <div className="border w-full px-4 py-5 flex flex-col items-center rounded-lg bg-gray-50 border-gray-200">
            {/* <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mb-4"></div> */}
            <Loader />
            <span className="text-xl font-medium text-gray-700">
              Calculating your risk score
            </span>

            <p className="mt-2 text-sm text-gray-500">
              Please wait while we process your health data
            </p>
          </div>
        </div>
      )}

      {isSubmit && riskRate && !isLoading && (
        <div>
          <div className="my-8 flex justify-center items-center px-6">
            <div
              className={`border w-full px-4 py-5 flex justify-between items-center rounded-lg ${
                riskRate < 10
                  ? "bg-green-50 border-green-200 text-green-800"
                  : riskRate < 20
                  ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              <div>
                <h2 className="text-2xl font-semibold">
                  CVD Risk Score: {riskRate}%
                </h2>
                <p className="mt-1 text-sm">
                  {riskRate < 10
                    ? "Low risk: Continue healthy lifestyle habits"
                    : riskRate < 20
                    ? "Moderate risk: Consider lifestyle modifications"
                    : "High risk: Consult healthcare provider"}
                </p>
              </div>
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center ${
                  riskRate < 10
                    ? "bg-green-500"
                    : riskRate < 20
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                <span className="text-2xl font-bold text-white">
                  {riskRate}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
