// const mongoose = require("mongoose");
// const User = require("./user");

// // Exercise Schema -->

// const ExerciseSchema = new mongoose.Schema(
//   {
//     type: String,
//     duration: String,
//     frequecy: String,
//   },
//   { _id: false }
// );

// const ExercisePlanSchema = new mongoose.Schema(
//   {
//     userProfile: {
//       ascvdRisk: String,
//     },
//     aerobicExercises: [ExerciseSchema],
//     strengthTrainingExercises: [ExerciseSchema],
//     flexibilityExercises: [ExerciseSchema],
//     weeklySummary: {
//       aerobic: String,
//       strengthTraining: String,
//       flexibility: String,
//       notes: String,
//     },
//   },
//   { _id: false }
// );

// // Diet Schema --->

// const MacronutrientSchema = new mongoose.Schema(
//   {
//     protein: String,
//     carbohydrates: String,
//     fats: String,
//   },
//   { _id: false }
// );

// const DailyMealsSchema = new mongoose.Schema(
//   {
//     breakfast: [String],
//     lunch: [String],
//     dinner: [String],
//     snacks: [String],
//   },
//   { _id: false }
// );

// const WeeklySummarySchema = new mongoose.Schema(
//   {
//     overview: String,
//     importantNotes: String,
//   },
//   { _id: false }
// );

// const DietPlanSchema = new mongoose.Schema(
//   {
//     userProfile: {
//       ascvdRisk: String,
//     },
//     dailyMeals: DailyMealsSchema,
//     macronutrientBreakdown: MacronutrientSchema,
//     dietaryRecommendations: [String],
//     weeklySummary: WeeklySummarySchema,
//   },
//   { _id: false }
// );

// // Complete Health Schema -->

// const healthHistorySchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     assessments: [
//       {
//         age: {
//           type: String,
//           required: true,
//         },
//         sex: {
//           type: String,
//           required: true,
//         },
//         education: {
//           type: String,
//           required: true,
//         },
//         is_smoking: {
//           type: String,
//           required: true,
//         },
//         cigsPerDay: {
//           type: Number,
//           required: true,
//         },
//         bpMeds: {
//           type: String,
//           required: true,
//         },
//         prevalentStroke: {
//           type: String,
//           required: true,
//         },
//         prevalentHyp: {
//           type: String,
//           required: true,
//         },
//         diabetes: {
//           type: String,
//           required: true,
//         },
//         totChol: {
//           type: Number,
//           required: true,
//         },
//         sysBP: {
//           type: Number,
//           required: true,
//         },
//         diaBP: {
//           type: Number,
//           required: true,
//         },
//         bmi: {
//           type: Number,
//           required: true,
//         },
//         heartRate: {
//           type: Number,
//           required: true,
//         },
//         glucose: {
//           type: Number,
//           required: true,
//         },
//         risk_Score: {
//           type: Number,
//           required: true,
//         },
//         date: {
//           type: Date,
//           default: Date.now,
//         },
//         exercisePlan: ExercisePlanSchema,
//         dietPlan: DietPlanSchema,
//       },
//     ],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("HealthHistory", healthHistorySchema);
