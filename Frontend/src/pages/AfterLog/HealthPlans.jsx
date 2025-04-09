// import React, { useState } from "react";
// import { Flame, Utensils, HeartPulse, Clock, Star } from "lucide-react";
// import { selectLatestAssessment } from "../../features/healthSlice";
// import { useSelector } from "react-redux";
// const HealthPlans = () => {
//   const [activeTab, setActiveTab] = useState("diet");
//   const latestAssessment = useSelector(selectLatestAssessment);
//   const healthPlans = {
//     diet: {
//       title: "Heart-Healthy Nutrition Guide",
//       description:
//         "A comprehensive approach to supporting cardiovascular health through nutrition.",
//       keyPrinciples: [
//         "Emphasize whole foods and plant-based options",
//         "Reduce saturated and trans fats",
//         "Increase fiber and nutrient-rich foods",
//         "Limit processed and high-sodium foods",
//       ],
//       sampleMealPlan: [
//         {
//           name: "Breakfast",
//           options: [
//             "Oatmeal with berries and nuts",
//             "Whole grain toast with avocado",
//             "Greek yogurt with chia seeds",
//           ],
//         },
//         {
//           name: "Lunch",
//           options: [
//             "Grilled chicken salad with mixed greens",
//             "Quinoa bowl with roasted vegetables",
//             "Salmon with brown rice and steamed broccoli",
//           ],
//         },
//         {
//           name: "Dinner",
//           options: [
//             "Baked fish with sweet potato",
//             "Vegetable stir-fry with tofu",
//             "Lean turkey with roasted vegetables",
//           ],
//         },
//       ],
//       healthySnacks: [
//         "Fresh fruits",
//         "Nuts and seeds",
//         "Vegetable sticks with hummus",
//         "Greek yogurt",
//       ],
//     },
//     exercise: {
//       title: "Cardiovascular Health Exercise Plan",
//       description:
//         "A balanced approach to improving heart health through regular physical activity.",
//       weeklyGuidelines: [
//         "Aim for 150 minutes of moderate aerobic activity per week",
//         "Include strength training 2-3 times per week",
//         "Focus on consistent, sustainable exercise",
//         "Listen to your body and progress gradually",
//       ],
//       exerciseTypes: [
//         {
//           name: "Cardiovascular Exercise",
//           options: [
//             "Brisk walking",
//             "Swimming",
//             "Cycling",
//             "Jogging",
//             "Dancing",
//           ],
//         },
//         {
//           name: "Strength Training",
//           options: [
//             "Bodyweight exercises",
//             "Resistance band workouts",
//             "Light weight training",
//             "Yoga",
//             "Pilates",
//           ],
//         },
//       ],
//       safetyTips: [
//         "Always warm up before exercising",
//         "Stay hydrated",
//         "Wear appropriate footwear",
//         "Start slowly and increase intensity gradually",
//       ],
//     },
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-teal-50 p-4 flex items-center">
//           <HeartPulse className="text-teal-600 mr-3" size={32} />
//           <h2 className="text-xl font-bold text-teal-800">
//             Cardiovascular Health and Wellness Guide
//           </h2>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b">
//           {["diet", "exercise"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-1 py-4 flex items-center justify-center space-x-2
//                 ${
//                   activeTab === tab
//                     ? "bg-teal-100 text-teal-800 font-bold"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//             >
//               {tab === "diet" ? <Utensils /> : <Flame />}
//               <span className="capitalize">{tab} Guide</span>
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           {activeTab === "diet" ? (
//             <div>
//               <h3 className="text-2xl font-bold text-teal-800 mb-4">
//                 {healthPlans.diet.title}
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 {healthPlans.diet.description}
//               </p>

//               {/* Key Principles */}
//               <div className="mb-6">
//                 <h4 className="font-semibold text-lg mb-3 text-teal-700">
//                   Key Nutritional Principles
//                 </h4>
//                 <ul className="space-y-2 pl-4">
//                   {healthPlans.diet.keyPrinciples.map((principle, index) => (
//                     <li key={index} className="flex items-center">
//                       <Star className="text-teal-500 mr-2" size={16} />
//                       {principle}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Meal Options */}
//               <div className="grid md:grid-cols-3 gap-4">
//                 {healthPlans.diet.sampleMealPlan.map((meal, index) => (
//                   <div key={index} className="bg-teal-50 p-4 rounded-lg">
//                     <h4 className="text-lg font-semibold mb-3 text-teal-800">
//                       {meal.name}
//                     </h4>
//                     <ul className="space-y-2">
//                       {meal.options.map((option, i) => (
//                         <li key={i} className="flex items-center space-x-2">
//                           <Star size={16} className="text-teal-500" />
//                           <span>{option}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>

//               {/* Healthy Snacks */}
//               <div className="mt-6">
//                 <h4 className="font-semibold text-lg mb-3 text-teal-700">
//                   Healthy Snack Options
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {healthPlans.diet.healthySnacks.map((snack, index) => (
//                     <span
//                       key={index}
//                       className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
//                     >
//                       {snack}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h3 className="text-2xl font-bold text-teal-800 mb-4">
//                 {healthPlans.exercise.title}
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 {healthPlans.exercise.description}
//               </p>

//               {/* Weekly Guidelines */}
//               <div className="mb-6">
//                 <h4 className="font-semibold text-lg mb-3 text-teal-700">
//                   Weekly Exercise Guidelines
//                 </h4>
//                 <ul className="space-y-2 pl-4">
//                   {healthPlans.exercise.weeklyGuidelines.map(
//                     (guideline, index) => (
//                       <li key={index} className="flex items-center">
//                         <Star className="text-teal-500 mr-2" size={16} />
//                         {guideline}
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>

//               {/* Exercise Types */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 {healthPlans.exercise.exerciseTypes.map((type, index) => (
//                   <div key={index} className="bg-teal-50 p-4 rounded-lg">
//                     <h4 className="text-lg font-semibold mb-3 text-teal-800">
//                       {type.name}
//                     </h4>
//                     <ul className="space-y-2">
//                       {type.options.map((option, i) => (
//                         <li key={i} className="flex items-center space-x-2">
//                           <Flame size={16} className="text-teal-500" />
//                           <span>{option}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>

//               {/* Safety Tips */}
//               <div className="mt-6">
//                 <h4 className="font-semibold text-lg mb-3 text-teal-700">
//                   Exercise Safety Tips
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {healthPlans.exercise.safetyTips.map((tip, index) => (
//                     <span
//                       key={index}
//                       className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
//                     >
//                       {tip}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Disclaimer */}
//       <div className="mt-6 text-center text-sm text-gray-600">
//         <p>
//           Disclaimer: This is a general health guide. Always consult with a
//           healthcare professional before starting any new diet or exercise
//           program.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HealthPlans;

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
//   const { dietPlan, exercisePlan} = latestAssessment || {};
//   console.log(dietPlan);
//   // Weekday labels for diet plan
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

//   console.log(latestAssessment);

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//         {/* Header with Risk Score */}
//         <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 text-white">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <HeartPulse className="text-white mr-3" size={36} />
//               <h2 className="text-2xl font-bold">
//                 Your Personalized Health Plan
//               </h2>
//             </div>
//             {dietPlan?.userProfile?.ascvdRisk && (
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

//         {/* Tabs */}
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

//         {/* Content */}
//         <div className="p-6">
//           {activeTab === "diet" && dietPlan && (
//             <div>
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-teal-800 mb-2">
//                   Personalized Nutrition Plan
//                 </h3>
//                 <p className="text-gray-600">
//                   Based on your health assessment, we've created a customized
//                   nutrition plan to support your cardiovascular health.
//                 </p>
//               </div>

//               {/* Weekly Meal Plan Navigation */}
//               <div className="mb-8">
//                 <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                   <Calendar className="mr-2" /> Weekly Meal Plan
//                 </h4>

//                 <div className="bg-teal-50 rounded-lg p-4">
//                   {/* Meal Plan Tabs */}
//                   <div className="flex overflow-x-auto pb-2 mb-4 scrollbar-hide">
//                     {weekdays.map((day) => (
//                       <button
//                         key={day}
//                         onClick={() => setActiveDay(day)}
//                         className="px-4 py-2 rounded-lg mr-2 whitespace-nowrap bg-teal-100 text-teal-800 hover:bg-teal-200"
//                       >
//                         {weekdayLabels[day]}
//                       </button>
//                     ))}
//                   </div>

//                   {/* Sample Daily Plan Display */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {weekdays.map((day) => (
//                       <div key={day} className="bg-white rounded-lg shadow p-4">
//                         <h5 className="font-bold text-teal-800 mb-3 border-b pb-2">
//                           {weekdayLabels[day]}
//                         </h5>

//                         <div className="space-y-3">
//                           {Object.entries(dietPlan.dailyMeals[day]).map(
//                             ([mealType, meal]) => (
//                               <div key={mealType} className="flex items-start">
//                                 {mealType === "snacks" ? (
//                                   <Apple
//                                     className="text-green-500 mr-3 mt-1"
//                                     size={16}
//                                   />
//                                 ) : (
//                                   <Utensils
//                                     className="text-teal-500 mr-3 mt-1"
//                                     size={16}
//                                   />
//                                 )}
//                                 <div>
//                                   <span className="font-medium capitalize">
//                                     {mealType}:{" "}
//                                   </span>
//                                   {Array.isArray(meal) ? (
//                                     <span>{meal.join(", ")}</span>
//                                   ) : (
//                                     <span>{meal}</span>
//                                   )}
//                                 </div>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Macronutrient Breakdown */}
//               <div className="mb-8">
//                 <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                   <BarChart3 className="mr-2" /> Macronutrient Breakdown
//                 </h4>

//                 <div className="grid md:grid-cols-3 gap-4">
//                   {Object.entries(dietPlan.macronutrientBreakdown).map(
//                     ([macro, value]) => (
//                       <div
//                         key={macro}
//                         className="bg-teal-50 rounded-lg p-4 flex flex-col items-center text-center"
//                       >
//                         <div className="bg-teal-100 p-3 rounded-full mb-3">
//                           {macro === "protein" && (
//                             <Award className="text-teal-700" size={24} />
//                           )}
//                           {macro === "carbohydrates" && (
//                             <BarChart3 className="text-teal-700" size={24} />
//                           )}
//                           {macro === "fats" && (
//                             <Utensils className="text-teal-700" size={24} />
//                           )}
//                         </div>
//                         <h5 className="font-semibold capitalize text-teal-800 mb-1">
//                           {macro}
//                         </h5>
//                         <p className="text-gray-700">{value}</p>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Dietary Recommendations */}
//               <div className="mb-6">
//                 <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                   <CheckCircle className="mr-2" /> Key Dietary Recommendations
//                 </h4>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   {Object.entries(dietPlan.dietaryRecommendations).map(
//                     ([key, recommendation]) => (
//                       <div key={key} className="bg-white shadow rounded-lg p-4">
//                         <h5 className="font-semibold text-teal-800 mb-2 flex items-center">
//                           <Info className="text-teal-500 mr-2" size={16} />
//                           {key
//                             .replace(/([A-Z])/g, " $1")
//                             .replace(/^./, function (str) {
//                               return str.toUpperCase();
//                             })}
//                         </h5>
//                         <p className="text-gray-700">{recommendation}</p>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Weekly Summary */}
//               <div className="bg-teal-50 rounded-lg p-4 mt-6">
//                 <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
//                   <AlertCircle className="mr-2" size={20} /> Weekly Summary
//                 </h4>

//                 <ul className="space-y-2">
//                   {Object.entries(dietPlan.weeklySummary).map(
//                     ([key, value]) => (
//                       <li key={key} className="flex items-start">
//                         <Star className="text-teal-500 mr-2 mt-1" size={16} />
//                         <div>
//                           <span className="font-medium capitalize">
//                             {key.replace(/([A-Z])/g, " $1")}:{" "}
//                           </span>
//                           <span className="text-gray-700">{value}</span>
//                         </div>
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>
//             </div>
//           )}

//           {activeTab === "exercise" && exercisePlan && (
//             <div>
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-teal-800 mb-2">
//                   Personalized Exercise Plan
//                 </h3>
//                 <p className="text-gray-600">
//                   Based on your health assessment, we've created a customized
//                   exercise plan to improve your cardiovascular health.
//                 </p>
//               </div>

//               {/* Aerobic Exercises */}
//               <div className="mb-8">
//                 <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                   <Flame className="mr-2" /> Aerobic Exercises
//                 </h4>

//                 <div className="grid md:grid-cols-3 gap-4">
//                   {exercisePlan.aerobicExercises.map((exercise, index) => (
//                     <div
//                       key={index}
//                       className="bg-teal-50 rounded-lg p-4 shadow-sm"
//                     >
//                       <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
//                         <Flame className="text-teal-700" size={24} />
//                       </div>
//                       <h5 className="font-semibold text-teal-800 mb-2">
//                         {exercise.type}
//                       </h5>
//                       <div className="text-sm text-gray-700 space-y-1">
//                         <div className="flex items-center">
//                           <Clock className="mr-2" size={14} />
//                           <span>{exercise.duration}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Calendar className="mr-2" size={14} />
//                           <span>{exercise.frequency}</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Strength Training */}
//               <div className="mb-8">
//                 <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                   <Dumbbell className="mr-2" /> Strength Training
//                 </h4>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   {exercisePlan.strengthTrainingExercises.map(
//                     (exercise, index) => (
//                       <div
//                         key={index}
//                         className="bg-white rounded-lg p-4 shadow border border-gray-100 flex"
//                       >
//                         <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
//                           <Dumbbell className="text-teal-700" size={20} />
//                         </div>
//                         <div>
//                           <h5 className="font-semibold text-teal-800 mb-2">
//                             {exercise.type}
//                           </h5>
//                           <div className="text-sm text-gray-700 space-y-1">
//                             <div className="flex items-center">
//                               <Clock className="mr-2" size={14} />
//                               <span>{exercise.duration}</span>
//                             </div>
//                             <div className="flex items-center">
//                               <Calendar className="mr-2" size={14} />
//                               <span>{exercise.frequency}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Flexibility Exercises */}
//               <div className="mb-8">
//                 <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
//                   <Award className="mr-2" /> Flexibility Exercises
//                 </h4>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   {exercisePlan.flexibilityExercises.map((exercise, index) => (
//                     <div
//                       key={index}
//                       className="bg-teal-50 rounded-lg p-4 shadow-sm"
//                     >
//                       <h5 className="font-semibold text-teal-800 mb-2">
//                         {exercise.type}
//                       </h5>
//                       <div className="text-sm text-gray-700 space-y-1">
//                         <div className="flex items-center">
//                           <Clock className="mr-2" size={14} />
//                           <span>{exercise.duration}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Calendar className="mr-2" size={14} />
//                           <span>{exercise.frequency}</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Weekly Summary */}
//               <div className="bg-teal-100 rounded-lg p-6">
//                 <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
//                   <AlertCircle className="mr-2" size={20} /> Weekly Exercise
//                   Summary
//                 </h4>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {Object.entries(exercisePlan.weeklySummary).map(
//                     ([key, value]) =>
//                       key !== "notes" ? (
//                         <div
//                           key={key}
//                           className="bg-white rounded-lg p-4 shadow-sm"
//                         >
//                           <h5 className="font-medium capitalize text-teal-700 mb-2">
//                             {key}
//                           </h5>
//                           <p className="text-gray-700">{value}</p>
//                         </div>
//                       ) : null
//                   )}
//                 </div>

//                 {/* Notes */}
//                 <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
//                   <div className="flex">
//                     <Info className="text-yellow-600 mr-3" size={20} />
//                     <div>
//                       <h5 className="font-medium text-yellow-800 mb-1">
//                         Important Notes
//                       </h5>
//                       <p className="text-gray-700">
//                         {exercisePlan.weeklySummary.notes}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Disclaimer */}
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
} from "lucide-react";
import { selectLatestAssessment } from "../../features/healthSlice";
import { useSelector } from "react-redux";

const HealthPlans = () => {
  const [activeTab, setActiveTab] = useState("diet");
  const latestAssessment = useSelector(selectLatestAssessment);

  // Safe extraction of plan data with fallbacks
  const dietPlan = latestAssessment?.dietPlan || null;
  const exercisePlan = latestAssessment?.exercisePlan || null;
  console.log(dietPlan);
  console.log(latestAssessment);
  // Weekday labels for diet plan
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

  // Function to safely access nested properties
  const safeAccess = (obj, path, fallback = null) => {
    try {
      return path.split(".").reduce((o, key) => o?.[key], obj) ?? fallback;
    } catch (e) {
      return fallback;
    }
  };

  // Check if data is available
  const hasDietPlan = Boolean(dietPlan?.dailyMeals);
  const hasExercisePlan = Boolean(exercisePlan?.aerobicExercises);

  return (
    <div className="container px-4 py-8 max-w-6xl md:px-2 md:max-w-[100vw]">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header with Risk Score */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <HeartPulse className="text-white mr-3" size={36} />
              <h2 className="text-2xl font-bold">
                Your Personalized Health Plan
              </h2>
            </div>
            {safeAccess(dietPlan, "userProfile.ascvdRisk") && (
              <div className="bg-white text-teal-800 px-4 py-2 rounded-lg flex items-center">
                <AlertCircle className="mr-2" size={20} />
                <div>
                  <p className="text-sm font-medium">ASCVD Risk Score</p>
                  <p className="text-xl font-bold">
                    {dietPlan.userProfile.ascvdRisk}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("diet")}
            className={`flex-1 py-4 flex items-center justify-center space-x-2 
              ${
                activeTab === "diet"
                  ? "bg-teal-100 text-teal-800 font-bold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
          >
            <Utensils size={20} />
            <span className="text-lg">Nutrition Plan</span>
          </button>
          <button
            onClick={() => setActiveTab("exercise")}
            className={`flex-1 py-4 flex items-center justify-center space-x-2 
              ${
                activeTab === "exercise"
                  ? "bg-teal-100 text-teal-800 font-bold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
          >
            <Flame size={20} />
            <span className="text-lg">Exercise Plan</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "diet" && (
            <div>
              {hasDietPlan ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-800 mb-2">
                      Personalized Nutrition Plan
                    </h3>
                    <p className="text-gray-600">
                      Based on your health assessment, we've created a
                      customized nutrition plan to support your cardiovascular
                      health.
                    </p>
                  </div>

                  {/* Weekly Meal Plan Navigation */}

                  {/* Macronutrient Breakdown */}
                  {dietPlan.macronutrientBreakdown && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                        <BarChart3 className="mr-2" /> Macronutrient Breakdown
                      </h4>

                      <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(dietPlan.macronutrientBreakdown).map(
                          ([macro, value]) => (
                            <div
                              key={macro}
                              className="bg-teal-50 rounded-lg p-4 flex flex-col items-center text-center"
                            >
                              <div className="bg-teal-100 p-3 rounded-full mb-3">
                                {macro === "protein" && (
                                  <Award className="text-teal-700" size={24} />
                                )}
                                {macro === "carbohydrates" && (
                                  <BarChart3
                                    className="text-teal-700"
                                    size={24}
                                  />
                                )}
                                {macro === "fats" && (
                                  <Utensils
                                    className="text-teal-700"
                                    size={24}
                                  />
                                )}
                              </div>
                              <h5 className="font-semibold capitalize text-teal-800 mb-1">
                                {macro}
                              </h5>
                              <p className="text-gray-700">{value}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Dietary Recommendations */}
                  {dietPlan.dietaryRecommendations && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                        <CheckCircle className="mr-2" /> Key Dietary
                        Recommendations
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(dietPlan.dietaryRecommendations).map(
                          ([key, recommendation]) => (
                            <div
                              key={key}
                              className="bg-white shadow rounded-lg p-4"
                            >
                              <h5 className="font-semibold text-teal-800 mb-2 flex items-center">
                                <Info
                                  className="text-teal-500 mr-2"
                                  size={16}
                                />
                                {key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, function (str) {
                                    return str.toUpperCase();
                                  })}
                              </h5>
                              <p className="text-gray-700">{recommendation}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Weekly Summary */}
                  {dietPlan.weeklySummary && (
                    <div className="bg-teal-50 rounded-lg p-4 mt-6">
                      <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                        <AlertCircle className="mr-2" size={20} /> Weekly
                        Summary
                      </h4>

                      <ul className="space-y-2">
                        {Object.entries(dietPlan.weeklySummary).map(
                          ([key, value]) => (
                            <li key={key} className="flex items-start">
                              <Star
                                className="text-teal-500 mr-2 mt-1"
                                size={16}
                              />
                              <div>
                                <span className="font-medium capitalize">
                                  {key.replace(/([A-Z])/g, " $1")}:{" "}
                                </span>
                                <span className="text-gray-700">{value}</span>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <AlertCircle
                    className="mx-auto text-teal-500 mb-4"
                    size={48}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Diet Plan Available
                  </h3>
                  <p className="text-gray-600">
                    Your personalized diet plan hasn't been created yet.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "exercise" && (
            <div>
              {hasExercisePlan ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-800 mb-2">
                      Personalized Exercise Plan
                    </h3>
                    <p className="text-gray-600">
                      Based on your health assessment, we've created a
                      customized exercise plan to improve your cardiovascular
                      health.
                    </p>
                  </div>

                  {/* Aerobic Exercises */}
                  {exercisePlan.aerobicExercises &&
                    exercisePlan.aerobicExercises.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                          <Flame className="mr-2" /> Aerobic Exercises
                        </h4>

                        <div className="grid md:grid-cols-3 gap-4">
                          {exercisePlan.aerobicExercises.map(
                            (exercise, index) => (
                              <div
                                key={index}
                                className="bg-teal-50 rounded-lg p-4 shadow-sm"
                              >
                                <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                                  <Flame className="text-teal-700" size={24} />
                                </div>
                                <h5 className="font-semibold text-teal-800 mb-2">
                                  {exercise.type}
                                </h5>
                                <div className="text-sm text-gray-700 space-y-1">
                                  <div className="flex items-center">
                                    <Clock className="mr-2" size={14} />
                                    <span>{exercise.duration}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Calendar className="mr-2" size={14} />
                                    <span>{exercise.frequency}</span>
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
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                          <Dumbbell className="mr-2" /> Strength Training
                        </h4>

                        <div className="grid md:grid-cols-2 gap-4">
                          {exercisePlan.strengthTrainingExercises.map(
                            (exercise, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-4 shadow border border-gray-100 flex"
                              >
                                <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                  <Dumbbell
                                    className="text-teal-700"
                                    size={20}
                                  />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-teal-800 mb-2">
                                    {exercise.type}
                                  </h5>
                                  <div className="text-sm text-gray-700 space-y-1">
                                    <div className="flex items-center">
                                      <Clock className="mr-2" size={14} />
                                      <span>{exercise.duration}</span>
                                    </div>
                                    <div className="flex items-center">
                                      <Calendar className="mr-2" size={14} />
                                      <span>{exercise.frequency}</span>
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
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                          <Award className="mr-2" /> Flexibility Exercises
                        </h4>

                        <div className="grid md:grid-cols-2 gap-4">
                          {exercisePlan.flexibilityExercises.map(
                            (exercise, index) => (
                              <div
                                key={index}
                                className="bg-teal-50 rounded-lg p-4 shadow-sm"
                              >
                                <h5 className="font-semibold text-teal-800 mb-2">
                                  {exercise.type}
                                </h5>
                                <div className="text-sm text-gray-700 space-y-1">
                                  <div className="flex items-center">
                                    <Clock className="mr-2" size={14} />
                                    <span>{exercise.duration}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Calendar className="mr-2" size={14} />
                                    <span>{exercise.frequency}</span>
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
                    <div className="bg-teal-100 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                        <AlertCircle className="mr-2" size={20} /> Weekly
                        Exercise Summary
                      </h4>

                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(exercisePlan.weeklySummary || {}).map(
                          ([key, value]) =>
                            key !== "notes" ? (
                              <div
                                key={key}
                                className="bg-white rounded-lg p-4 shadow-sm"
                              >
                                <h5 className="font-medium capitalize text-teal-700 mb-2">
                                  {key}
                                </h5>
                                <p className="text-gray-700">{value}</p>
                              </div>
                            ) : null
                        )}
                      </div>

                      {/* Notes */}
                      {exercisePlan.weeklySummary?.notes && (
                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                          <div className="flex">
                            <Info className="text-yellow-600 mr-3" size={20} />
                            <div>
                              <h5 className="font-medium text-yellow-800 mb-1">
                                Important Notes
                              </h5>
                              <p className="text-gray-700">
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
                <div className="text-center py-12">
                  <AlertCircle
                    className="mx-auto text-teal-500 mb-4"
                    size={48}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Exercise Plan Available
                  </h3>
                  <p className="text-gray-600">
                    Your personalized exercise plan hasn't been created yet.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-sm text-gray-600">
        <p className="flex items-center justify-center">
          <AlertCircle className="mr-2" size={16} />
          Disclaimer: This is a personalized health guide based on your
          assessment. Always consult with your healthcare professional before
          starting any new diet or exercise program.
        </p>
      </div>
    </div>
  );
};

export default HealthPlans;
