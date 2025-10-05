// import React, { useState } from "react";
// import {
//   Flame,
//   Utensils,
//   HeartPulse,
//   Clock,
//   Star,
//   Calendar,
//   CheckCircle,
//   Info,
//   AlertCircle,
//   BarChart3,
//   Award,
//   Apple,
//   Dumbbell,
// } from "lucide-react";
// import { selectLatestAssessment } from "../../features/healthSlice";
// import { useSelector } from "react-redux";

// const HealthPlans = () => {
//   const [activeTab, setActiveTab] = useState("diet");
//   const latestAssessment = useSelector(selectLatestAssessment);

//   const dietPlan = latestAssessment?.dietPlan || null;
//   const exercisePlan = latestAssessment?.exercisePlan || null;
//   console.log(dietPlan);
//   console.log(latestAssessment);

//   const weekdays = [
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//     "sunday",
//   ];
//   const weekdayLabels = {
//     monday: "Monday",
//     tuesday: "Tuesday",
//     wednesday: "Wednesday",
//     thursday: "Thursday",
//     friday: "Friday",
//     saturday: "Saturday",
//     sunday: "Sunday",
//   };

//   const safeAccess = (obj, path, fallback = null) => {
//     try {
//       return path.split(".").reduce((o, key) => o?.[key], obj) ?? fallback;
//     } catch (e) {
//       return fallback;
//     }
//   };

//   const hasDietPlan = Boolean(dietPlan?.dailyMeals);
//   const hasExercisePlan = Boolean(exercisePlan?.aerobicExercises);

//   return (
//     <div className="container px-4 py-8 max-w-6xl md:px-2 md:max-w-[100vw]">
//       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//         <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 text-white">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <HeartPulse className="text-white mr-3" size={36} />
//               <h2 className="text-2xl font-bold">
//                 Your Personalized Health Plan
//               </h2>
//             </div>
//             {safeAccess(dietPlan, "userProfile.ascvdRisk") && (
//               <div className="bg-white text-teal-800 px-4 py-2 rounded-lg flex items-center">
//                 <AlertCircle className="mr-2" size={20} />
//                 <div>
//                   <p className="text-sm font-medium">ASCVD Risk Score</p>
//                   <p className="text-xl font-bold">
//                     {dietPlan.userProfile.ascvdRisk}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex border-b">
//           <button
//             onClick={() => setActiveTab("diet")}
//             className={`flex-1 py-4 flex items-center justify-center space-x-2 
//               ${
//                 activeTab === "diet"
//                   ? "bg-teal-100 text-teal-800 font-bold"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//           >
//             <Utensils size={20} />
//             <span className="text-lg">Nutrition Plan</span>
//           </button>
//           <button
//             onClick={() => setActiveTab("exercise")}
//             className={`flex-1 py-4 flex items-center justify-center space-x-2 
//               ${
//                 activeTab === "exercise"
//                   ? "bg-teal-100 text-teal-800 font-bold"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//           >
//             <Flame size={20} />
//             <span className="text-lg">Exercise Plan</span>
//           </button>
//         </div>

//         <div className="p-6">
//           {activeTab === "diet" && (
//             <div>
//               {hasDietPlan ? (
//                 <>
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-teal-800 mb-2">
//                       Personalized Nutrition Plan
//                     </h3>
//                     <p className="text-gray-600">
//                       Based on your health assessment, we've created a
//                       customized nutrition plan to support your cardiovascular
//                       health.
//                     </p>
//                   </div>

//                   {dietPlan.macronutrientBreakdown && (
//                     <div className="mb-8">
//                       <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                         <BarChart3 className="mr-2" /> Macronutrient Breakdown
//                       </h4>

//                       <div className="grid md:grid-cols-3 gap-4">
//                         {Object.entries(dietPlan.macronutrientBreakdown).map(
//                           ([macro, value]) => (
//                             <div
//                               key={macro}
//                               className="bg-teal-50 rounded-lg p-4 flex flex-col items-center text-center"
//                             >
//                               <div className="bg-teal-100 p-3 rounded-full mb-3">
//                                 {macro === "protein" && (
//                                   <Award className="text-teal-700" size={24} />
//                                 )}
//                                 {macro === "carbohydrates" && (
//                                   <BarChart3
//                                     className="text-teal-700"
//                                     size={24}
//                                   />
//                                 )}
//                                 {macro === "fats" && (
//                                   <Utensils
//                                     className="text-teal-700"
//                                     size={24}
//                                   />
//                                 )}
//                               </div>
//                               <h5 className="font-semibold capitalize text-teal-800 mb-1">
//                                 {macro}
//                               </h5>
//                               <p className="text-gray-700">{value}</p>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {dietPlan.dietaryRecommendations && (
//                     <div className="mb-6">
//                       <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                         <CheckCircle className="mr-2" /> Key Dietary
//                         Recommendations
//                       </h4>

//                       <div className="grid md:grid-cols-2 gap-4">
//                         {Object.entries(dietPlan.dietaryRecommendations).map(
//                           ([key, recommendation]) => (
//                             <div
//                               key={key}
//                               className="bg-white shadow rounded-lg p-4"
//                             >
//                               <h5 className="font-semibold text-teal-800 mb-2 flex items-center">
//                                 <Info
//                                   className="text-teal-500 mr-2"
//                                   size={16}
//                                 />
//                                 {key
//                                   .replace(/([A-Z])/g, " $1")
//                                   .replace(/^./, function (str) {
//                                     return str.toUpperCase();
//                                   })}
//                               </h5>
//                               <p className="text-gray-700">{recommendation}</p>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {dietPlan.weeklySummary && (
//                     <div className="bg-teal-50 rounded-lg p-4 mt-6">
//                       <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
//                         <AlertCircle className="mr-2" size={20} /> Weekly
//                         Summary
//                       </h4>

//                       <ul className="space-y-2">
//                         {Object.entries(dietPlan.weeklySummary).map(
//                           ([key, value]) => (
//                             <li key={key} className="flex items-start">
//                               <Star
//                                 className="text-teal-500 mr-2 mt-1"
//                                 size={16}
//                               />
//                               <div>
//                                 <span className="font-medium capitalize">
//                                   {key.replace(/([A-Z])/g, " $1")}:{" "}
//                                 </span>
//                                 <span className="text-gray-700">{value}</span>
//                               </div>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <div className="text-center py-12">
//                   <AlertCircle
//                     className="mx-auto text-teal-500 mb-4"
//                     size={48}
//                   />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     No Diet Plan Available
//                   </h3>
//                   <p className="text-gray-600">
//                     Your personalized diet plan hasn't been created yet.
//                   </p>
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === "exercise" && (
//             <div>
//               {hasExercisePlan ? (
//                 <>
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-teal-800 mb-2">
//                       Personalized Exercise Plan
//                     </h3>
//                     <p className="text-gray-600">
//                       Based on your health assessment, we've created a
//                       customized exercise plan to improve your cardiovascular
//                       health.
//                     </p>
//                   </div>

//                   {exercisePlan.aerobicExercises &&
//                     exercisePlan.aerobicExercises.length > 0 && (
//                       <div className="mb-8">
//                         <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                           <Flame className="mr-2" /> Aerobic Exercises
//                         </h4>

//                         <div className="grid md:grid-cols-3 gap-4">
//                           {exercisePlan.aerobicExercises.map(
//                             (exercise, index) => (
//                               <div
//                                 key={index}
//                                 className="bg-teal-50 rounded-lg p-4 shadow-sm"
//                               >
//                                 <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
//                                   <Flame className="text-teal-700" size={24} />
//                                 </div>
//                                 <h5 className="font-semibold text-teal-800 mb-2">
//                                   {exercise.type}
//                                 </h5>
//                                 <div className="text-sm text-gray-700 space-y-1">
//                                   <div className="flex items-center">
//                                     <Clock className="mr-2" size={14} />
//                                     <span>{exercise.duration}</span>
//                                   </div>
//                                   <div className="flex items-center">
//                                     <Calendar className="mr-2" size={14} />
//                                     <span>{exercise.frequency}</span>
//                                   </div>
//                                 </div>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     )}

//                   {exercisePlan.strengthTrainingExercises &&
//                     exercisePlan.strengthTrainingExercises.length > 0 && (
//                       <div className="mb-8">
//                         <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                           <Dumbbell className="mr-2" /> Strength Training
//                         </h4>

//                         <div className="grid md:grid-cols-2 gap-4">
//                           {exercisePlan.strengthTrainingExercises.map(
//                             (exercise, index) => (
//                               <div
//                                 key={index}
//                                 className="bg-white rounded-lg p-4 shadow border border-gray-100 flex"
//                               >
//                                 <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
//                                   <Dumbbell
//                                     className="text-teal-700"
//                                     size={20}
//                                   />
//                                 </div>
//                                 <div>
//                                   <h5 className="font-semibold text-teal-800 mb-2">
//                                     {exercise.type}
//                                   </h5>
//                                   <div className="text-sm text-gray-700 space-y-1">
//                                     <div className="flex items-center">
//                                       <Clock className="mr-2" size={14} />
//                                       <span>{exercise.duration}</span>
//                                     </div>
//                                     <div className="flex items-center">
//                                       <Calendar className="mr-2" size={14} />
//                                       <span>{exercise.frequency}</span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     )}

//                   {exercisePlan.flexibilityExercises &&
//                     exercisePlan.flexibilityExercises.length > 0 && (
//                       <div className="mb-8">
//                         <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                           <Award className="mr-2" /> Flexibility Exercises
//                         </h4>

//                         <div className="grid md:grid-cols-2 gap-4">
//                           {exercisePlan.flexibilityExercises.map(
//                             (exercise, index) => (
//                               <div
//                                 key={index}
//                                 className="bg-teal-50 rounded-lg p-4 shadow-sm"
//                               >
//                                 <h5 className="font-semibold text-teal-800 mb-2">
//                                   {exercise.type}
//                                 </h5>
//                                 <div className="text-sm text-gray-700 space-y-1">
//                                   <div className="flex items-center">
//                                     <Clock className="mr-2" size={14} />
//                                     <span>{exercise.duration}</span>
//                                   </div>
//                                   <div className="flex items-center">
//                                     <Calendar className="mr-2" size={14} />
//                                     <span>{exercise.frequency}</span>
//                                   </div>
//                                 </div>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     )}

//                   {exercisePlan.weeklySummary && (
//                     <div className="bg-teal-100 rounded-lg p-6">
//                       <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
//                         <AlertCircle className="mr-2" size={20} /> Weekly
//                         Exercise Summary
//                       </h4>

//                       <div className="grid md:grid-cols-2 gap-6">
//                         {Object.entries(exercisePlan.weeklySummary || {}).map(
//                           ([key, value]) =>
//                             key !== "notes" ? (
//                               <div
//                                 key={key}
//                                 className="bg-white rounded-lg p-4 shadow-sm"
//                               >
//                                 <h5 className="font-medium capitalize text-teal-700 mb-2">
//                                   {key}
//                                 </h5>
//                                 <p className="text-gray-700">{value}</p>
//                               </div>
//                             ) : null
//                         )}
//                       </div>

//                       {exercisePlan.weeklySummary?.notes && (
//                         <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
//                           <div className="flex">
//                             <Info className="text-yellow-600 mr-3" size={20} />
//                             <div>
//                               <h5 className="font-medium text-yellow-800 mb-1">
//                                 Important Notes
//                               </h5>
//                               <p className="text-gray-700">
//                                 {exercisePlan.weeklySummary.notes}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <div className="text-center py-12">
//                   <AlertCircle
//                     className="mx-auto text-teal-500 mb-4"
//                     size={48}
//                   />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     No Exercise Plan Available
//                   </h3>
//                   <p className="text-gray-600">
//                     Your personalized exercise plan hasn't been created yet.
//                   </p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-sm text-gray-600">
//         <p className="flex items-center justify-center">
//           <AlertCircle className="mr-2" size={16} />
//           Disclaimer: This is a personalized health guide based on your
//           assessment. Always consult with your healthcare professional before
//           starting any new diet or exercise program.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HealthPlans;






import React, { useState } from "react";
import {
  Flame,
  Utensils,
  HeartPulse,
  Clock,
  Star,
  Calendar,
  CheckCircle,
  Info,
  AlertCircle,
  BarChart3,
  Award,
  Apple,
  Dumbbell,
  Activity,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { selectLatestAssessment } from "../../features/healthSlice";
import { useSelector } from "react-redux";

const HealthPlans = () => {
  const [activeTab, setActiveTab] = useState("diet");
  const latestAssessment = useSelector(selectLatestAssessment);

  const dietPlan = latestAssessment?.dietPlan || null;
  const exercisePlan = latestAssessment?.exercisePlan || null;

  const weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const weekdayLabels = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };

  const safeAccess = (obj, path, fallback = null) => {
    try {
      return path.split(".").reduce((o, key) => o?.[key], obj) ?? fallback;
    } catch (e) {
      return fallback;
    }
  };

  const hasDietPlan = Boolean(dietPlan?.dailyMeals);
  const hasExercisePlan = Boolean(exercisePlan?.aerobicExercises);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <HeartPulse className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Your Health Plan
                </h1>
                <p className="text-gray-600 mt-1">
                  Personalized recommendations for better cardiovascular health
                </p>
              </div>
            </div>
            {safeAccess(dietPlan, "userProfile.ascvdRisk") && (
              <div className="bg-white rounded-2xl shadow-lg p-4 border border-blue-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
                    <Activity className="text-red-600" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                      ASCVD Risk Score
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {dietPlan.userProfile.ascvdRisk}%
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("diet")}
              className={`flex-1 py-5 flex items-center justify-center space-x-3 transition-all duration-300 relative
                ${
                  activeTab === "diet"
                    ? "text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeTab === "diet" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <Apple size={20} />
              </div>
              <span className="text-lg font-semibold">Nutrition Plan</span>
              {activeTab === "diet" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("exercise")}
              className={`flex-1 py-5 flex items-center justify-center space-x-3 transition-all duration-300 relative
                ${
                  activeTab === "exercise"
                    ? "text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeTab === "exercise" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <Dumbbell size={20} />
              </div>
              <span className="text-lg font-semibold">Exercise Plan</span>
              {activeTab === "exercise" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              )}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {activeTab === "diet" && (
            <div>
              {hasDietPlan ? (
                <>
                  {/* Diet Plan Header */}
                  <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Sparkles className="text-white" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          Personalized Nutrition Plan
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          Based on your health assessment, we've created a
                          customized nutrition plan to support your
                          cardiovascular health and overall wellness.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Macronutrient Breakdown */}
                  {dietPlan.macronutrientBreakdown && (
                    <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                          <BarChart3 className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Daily Macronutrient Goals
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.entries(dietPlan.macronutrientBreakdown).map(
                          ([macro, value]) => (
                            <div
                              key={macro}
                              className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group"
                            >
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -mr-12 -mt-12 opacity-50"></div>
                              <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                  {macro === "protein" && (
                                    <Award
                                      className="text-blue-600"
                                      size={28}
                                    />
                                  )}
                                  {macro === "carbohydrates" && (
                                    <BarChart3
                                      className="text-blue-600"
                                      size={28}
                                    />
                                  )}
                                  {macro === "fats" && (
                                    <Utensils
                                      className="text-blue-600"
                                      size={28}
                                    />
                                  )}
                                </div>
                                <h4 className="text-lg font-semibold capitalize text-gray-900 mb-2">
                                  {macro}
                                </h4>
                                <p className="text-2xl font-bold text-blue-600">
                                  {value}
                                </p>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Dietary Recommendations */}
                  {dietPlan.dietaryRecommendations && (
                    <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                          <Target className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Key Dietary Guidelines
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(dietPlan.dietaryRecommendations).map(
                          ([key, recommendation]) => (
                            <div
                              key={key}
                              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200 hover:border-teal-200 hover:shadow-md transition-all duration-300"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <CheckCircle
                                    className="text-teal-600"
                                    size={18}
                                  />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    {key
                                      .replace(/([A-Z])/g, " $1")
                                      .replace(/^./, function (str) {
                                        return str.toUpperCase();
                                      })}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {recommendation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Weekly Summary */}
                  {dietPlan.weeklySummary && (
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 border border-blue-100">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                          <Star className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Weekly Nutrition Summary
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(dietPlan.weeklySummary).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="bg-white rounded-2xl p-5 shadow-sm"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <TrendingUp
                                    className="text-blue-600"
                                    size={18}
                                  />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1 capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {value}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Apple className="text-blue-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    No Nutrition Plan Available
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Your personalized diet plan hasn't been created yet.
                    Complete your health assessment to receive customized
                    nutrition recommendations.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "exercise" && (
            <div>
              {hasExercisePlan ? (
                <>
                  {/* Exercise Plan Header */}
                  <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Flame className="text-white" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          Personalized Exercise Plan
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          Based on your health assessment, we've created a
                          customized exercise plan to improve your
                          cardiovascular health and overall fitness.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Aerobic Exercises */}
                  {exercisePlan.aerobicExercises &&
                    exercisePlan.aerobicExercises.length > 0 && (
                      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                            <Flame className="text-white" size={20} />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Aerobic Exercises
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {exercisePlan.aerobicExercises.map(
                            (exercise, index) => (
                              <div
                                key={index}
                                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                              >
                                <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                  <Activity className="text-white" size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4">
                                  {exercise.type}
                                </h4>
                                <div className="space-y-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                      <Clock
                                        className="text-red-600"
                                        size={16}
                                      />
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-600 font-medium">
                                        Duration
                                      </p>
                                      <p className="text-sm font-semibold text-gray-900">
                                        {exercise.duration}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                      <Calendar
                                        className="text-red-600"
                                        size={16}
                                      />
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-600 font-medium">
                                        Frequency
                                      </p>
                                      <p className="text-sm font-semibold text-gray-900">
                                        {exercise.frequency}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Strength Training */}
                  {exercisePlan.strengthTrainingExercises &&
                    exercisePlan.strengthTrainingExercises.length > 0 && (
                      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Dumbbell className="text-white" size={20} />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Strength Training
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {exercisePlan.strengthTrainingExercises.map(
                            (exercise, index) => (
                              <div
                                key={index}
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 hover:shadow-lg transition-all duration-300"
                              >
                                <div className="flex items-start space-x-4">
                                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Dumbbell
                                      className="text-white"
                                      size={20}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                                      {exercise.type}
                                    </h4>
                                    <div className="space-y-2">
                                      <div className="flex items-center space-x-2 text-sm">
                                        <Clock
                                          className="text-indigo-600"
                                          size={14}
                                        />
                                        <span className="text-gray-600">
                                          {exercise.duration}
                                        </span>
                                      </div>
                                      <div className="flex items-center space-x-2 text-sm">
                                        <Calendar
                                          className="text-indigo-600"
                                          size={14}
                                        />
                                        <span className="text-gray-600">
                                          {exercise.frequency}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Flexibility Exercises */}
                  {exercisePlan.flexibilityExercises &&
                    exercisePlan.flexibilityExercises.length > 0 && (
                      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                            <Award className="text-white" size={20} />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Flexibility & Recovery
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {exercisePlan.flexibilityExercises.map(
                            (exercise, index) => (
                              <div
                                key={index}
                                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300"
                              >
                                <h4 className="text-lg font-bold text-gray-900 mb-3">
                                  {exercise.type}
                                </h4>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-sm">
                                    <Clock
                                      className="text-green-600"
                                      size={14}
                                    />
                                    <span className="text-gray-600">
                                      {exercise.duration}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-sm">
                                    <Calendar
                                      className="text-green-600"
                                      size={14}
                                    />
                                    <span className="text-gray-600">
                                      {exercise.frequency}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Weekly Summary */}
                  {exercisePlan.weeklySummary && (
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 border border-blue-100">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                          <BarChart3 className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Weekly Exercise Summary
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {Object.entries(exercisePlan.weeklySummary || {}).map(
                          ([key, value]) =>
                            key !== "notes" ? (
                              <div
                                key={key}
                                className="bg-white rounded-2xl p-5 shadow-sm"
                              >
                                <h4 className="text-sm font-medium text-gray-600 mb-1 capitalize">
                                  {key}
                                </h4>
                                <p className="text-base font-semibold text-gray-900">
                                  {value}
                                </p>
                              </div>
                            ) : null
                        )}
                      </div>

                      {exercisePlan.weeklySummary?.notes && (
                        <div className="bg-white rounded-2xl p-6 border-l-4 border-yellow-400">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Info className="text-yellow-600" size={20} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Important Notes
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {exercisePlan.weeklySummary.notes}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Dumbbell className="text-orange-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    No Exercise Plan Available
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Your personalized exercise plan hasn't been created yet.
                    Complete your health assessment to receive customized
                    fitness recommendations.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Important Disclaimer
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                This is a personalized health guide based on your assessment.
                Always consult with your healthcare professional before starting
                any new diet or exercise program, especially if you have
                existing health conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPlans;
