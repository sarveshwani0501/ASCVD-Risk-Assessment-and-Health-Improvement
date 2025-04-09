const HealthHistory = require("../models/userHealth");
const User = require("../models/user");
const { getPrompt1, getPrompt2 } = require("../geminiAPI/prompt");
const { runGemini } = require("../geminiAPI/healthPlans");
const axios = require("axios");
// Get user health history
exports.getUserHealthHistory = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Verify user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find health history and populate user data
    let healthHistory = await HealthHistory.findOne({ user: userId }).populate(
      "user",
      "firstName lastName email"
    );
    console.log(healthHistory);
    // If no health history exists yet, return empty assessments
    if (!healthHistory) {
      return res.status(200).json({
        user: userExists,
        assessments: [],
      });
    }

    res.status(200).json({
      user: healthHistory.user,
      assessments: healthHistory.assessments,
    });
  } catch (error) {
    console.error("Error fetching health history:", error);
    res.status(500).json({ message: "Server error retrieving health history" });
  }
};

//

function extractJsonFromMarkdown(text) {
  // Check if the response is wrapped in markdown code blocks
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (jsonMatch && jsonMatch[1]) {
    return jsonMatch[1].trim();
  }
  // If no markdown formatting, return the original text
  return text;
}

//
function refine(assessmentData) {
  const systolic = assessmentData.sysBP;
  const diastolic = assessmentData.diaBP;
  const pulsepressure = systolic - diastolic;
  const bmi = assessmentData.bmi;
  const heartRt = assessmentData.heartRate;
  const glu = assessmentData.glucose;
  const totalCholestrol = assessmentData.totChol;
  const cigs = assessmentData.cigsPerDay;
  const age = assessmentData.age;
  let educationData;
  if (assessmentData.education === "10th") {
    educationData = 1;
  } else if (assessmentData.education === "12th") {
    educationData = 2;
  } else if (assessmentData.education === "bachelor") {
    educationData = 3;
  } else {
    educationData = 4;
  }
  const sex = assessmentData.sex === "M" ? 1 : 0;
  const prevalentHp = assessmentData.prevalentHyp === "YES" ? 1 : 0;
  const prevalentStr = assessmentData.prevalentStroke === "YES" ? 1 : 0;
  const bpMed = assessmentData.bpMeds === "YES" ? 1 : 0;
  const diabete = assessmentData.diabetes === "YES" ? 1 : 0;

  const refinedData = {
    age: age,
    education: educationData,
    sex: sex,
    cigsPerDay: cigs,
    BPMeds: bpMed,
    prevalentStroke: prevalentStr,
    prevalentHyp: prevalentHp,
    diabetes: diabete,
    totChol: totalCholestrol,
    BMI: bmi,
    heartRate: heartRt,
    glucose: glu,
    pulsePressure: pulsepressure,
  };
  return refinedData;
}

//

// Add new health assessment
exports.addHealthAssessment = async (req, res) => {
  try {
    const userId = req.params.userId;
    const assessmentData = req.body;

    // Verify user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    const refinedAssessment = refine(assessmentData);
    let risk_Score;
    try {
      const response = await axios.post(
        "http://localhost:6000/predict",
        refinedAssessment
      );
      if (response) {
        risk_Score = response.data.risk_percentage;
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        throw new Error(`API error: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        console.error("No response received");
        throw new Error("No response from prediction service");
      } else {
        console.error("Request error:", error.message);
        throw error;
      }
    }
    // const risk_Score = assessmentData.risk_Score;
    // GeminiAPI Call

    // const exercisePrompt = getPrompt1(risk_Score);

    // const resultExercise = await runGemini(exercisePrompt);
    // const exercise = JSON.parse(resultExercise);

    // const dietPrompt = getPrompt2(risk_Score);

    // const resultDiet = await runGemini(dietPrompt);

    // const diet = JSON.parse(resultDiet);

    let exercise, diet;

    try {
      // Get exercise plan
      const exercisePrompt = getPrompt1(risk_Score);
      const resultExercise = await runGemini(exercisePrompt);

      if (!resultExercise) {
        throw new Error("Empty response from Gemini API for exercise plan");
      }

      const cleanExerciseJson = extractJsonFromMarkdown(resultExercise);
      console.log("Cleaned exercise JSON:", cleanExerciseJson);

      try {
        exercise = JSON.parse(cleanExerciseJson);
        if (exercise.exercisePlan) {
          exercise = exercise.exercisePlan;
        }
      } catch (parseError) {
        console.error("Failed to parse exercise plan JSON:", parseError);
        console.error("Raw exercise response:", resultExercise);
        throw new Error("Invalid JSON format in Gemini exercise response");
      }

      // Get diet plan
      const dietPrompt = getPrompt2(risk_Score);
      const resultDiet = await runGemini(dietPrompt);

      if (!resultDiet) {
        throw new Error("Empty response from Gemini API for diet plan");
      }

      const cleanDietJson = extractJsonFromMarkdown(resultDiet);
      console.log("Cleaned diet JSON:", cleanDietJson);

      try {
        diet = JSON.parse(cleanDietJson);
        if (diet.dietPlan) {
          diet = diet.dietPlan;
        }
      } catch (parseError) {
        console.error("Failed to parse diet plan JSON:", parseError);
        console.error("Raw diet response:", resultDiet);
        throw new Error("Invalid JSON format in Gemini diet response");
      }
    } catch (geminiError) {
      console.error("Gemini API error:", geminiError);
      return res.status(500).json({
        message: "Error generating health plans from Gemini API",
        error: geminiError.message,
      });
    }

    // assessmentData["exercisePlan"] = exercise;
    // assessmentData["dietPlan"] = diet;

    assessmentData.exercisePlan = exercise;
    assessmentData.dietPlan = diet;
    assessmentData.risk_Score = risk_Score;
    // Find existing health history or create new one
    let healthHistory = await HealthHistory.findOne({ user: userId });
    if (!healthHistory) {
      healthHistory = new HealthHistory({
        user: userId,
        assessments: [assessmentData],
      });
    } else {
      // Add new assessment to existing history
      healthHistory.assessments.push(assessmentData);
    }

    await healthHistory.save();

    res.status(201).json({
      message: "Health assessment added successfully",
      assessments: healthHistory.assessments,
    });
  } catch (error) {
    console.error("Error adding health assessment:", error);
    res.status(500).json({ message: "Server error adding health assessment" });
  }
};

//Other given code

// const HealthHistory = require("../models/userHealth");
// const User = require("../models/user");
// const { getPrompt1, getPrompt2 } = require("../geminiAPI/prompt");
// const { runGemini } = require("../geminiAPI/healthPlans");

// // Get user health history
// exports.getUserHealthHistory = async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     // Verify user exists
//     const userExists = await User.findById(userId);
//     if (!userExists) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Find health history and populate user data
//     let healthHistory = await HealthHistory.findOne({ user: userId }).populate(
//       "user",
//       "firstName lastName email"
//     );
//     console.log(healthHistory);
//     // If no health history exists yet, return empty assessments
//     if (!healthHistory) {
//       return res.status(200).json({
//         user: userExists,
//         assessments: [],
//       });
//     }

//     res.status(200).json({
//       user: healthHistory.user,
//       assessments: healthHistory.assessments,
//     });
//   } catch (error) {
//     console.error("Error fetching health history:", error);
//     res.status(500).json({ message: "Server error retrieving health history" });
//   }
// };

// function extractJsonFromMarkdown(text) {
//   // Check if the response is wrapped in markdown code blocks
//   const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
//   if (jsonMatch && jsonMatch[1]) {
//     return jsonMatch[1].trim();
//   }
//   // If no markdown formatting, return the original text
//   return text;
// }

// // Add new health assessment
// exports.addHealthAssessment = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const assessmentData = req.body;

//     // Verify user exists
//     const userExists = await User.findById(userId);
//     if (!userExists) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const risk_Score = assessmentData.risk_Score;
//     let exercise, diet;

//     try {
//       // Get exercise plan
//       const exercisePrompt = getPrompt1(risk_Score);
//       const resultExercise = await runGemini(exercisePrompt);

//       if (!resultExercise) {
//         throw new Error("Empty response from Gemini API for exercise plan");
//       }

//       const cleanExerciseJson = extractJsonFromMarkdown(resultExercise);
//       console.log("Cleaned exercise JSON:", cleanExerciseJson);

//       try {
//         exercise = JSON.parse(cleanExerciseJson);

//         // Ensure exercise data structure matches schema
//         console.log("Exercise plan structure validation:");

//         if (!exercise.userProfile || !exercise.userProfile.ascvdRisk) {
//           console.warn("Missing userProfile.ascvdRisk in exercise plan");
//           exercise.userProfile = exercise.userProfile || {};
//           exercise.userProfile.ascvdRisk =
//             exercise.userProfile.ascvdRisk || risk_Score.toString();
//         }

//         if (!Array.isArray(exercise.aerobicExercises)) {
//           console.warn("aerobicExercises is not an array, fixing structure");
//           exercise.aerobicExercises = exercise.aerobicExercises || [];
//         }

//         if (!Array.isArray(exercise.strengthTrainingExercises)) {
//           console.warn(
//             "strengthTrainingExercises is not an array, fixing structure"
//           );
//           exercise.strengthTrainingExercises =
//             exercise.strengthTrainingExercises || [];
//         }

//         if (!Array.isArray(exercise.flexibilityExercises)) {
//           console.warn(
//             "flexibilityExercises is not an array, fixing structure"
//           );
//           exercise.flexibilityExercises = exercise.flexibilityExercises || [];
//         }

//         if (!exercise.weeklySummary) {
//           console.warn("Missing weeklySummary in exercise plan");
//           exercise.weeklySummary = {
//             aerobic: "",
//             strengthTraining: "",
//             flexibility: "",
//             notes: "",
//           };
//         }

//         // Handle the typo in schema - frequency vs frequecy
//         // exercise.aerobicExercises.forEach((ex) => {
//         //   if (ex.frequency && !ex.frequecy) {
//         //     ex.frequecy = ex.frequency;
//         //     delete ex.frequency;
//         //   }
//         // });

//         // exercise.strengthTrainingExercises.forEach((ex) => {
//         //   if (ex.frequency && !ex.frequecy) {
//         //     ex.frequecy = ex.frequency;
//         //     delete ex.frequency;
//         //   }
//         // });

//         // exercise.flexibilityExercises.forEach((ex) => {
//         //   if (ex.frequency && !ex.frequecy) {
//         //     ex.frequecy = ex.frequency;
//         //     delete ex.frequency;
//         //   }
//         // });
//       } catch (parseError) {
//         console.error("Failed to parse exercise plan JSON:", parseError);
//         console.error("Raw exercise response:", resultExercise);
//         throw new Error("Invalid JSON format in Gemini exercise response");
//       }

//       // Get diet plan
//       const dietPrompt = getPrompt2(risk_Score);
//       const resultDiet = await runGemini(dietPrompt);

//       if (!resultDiet) {
//         throw new Error("Empty response from Gemini API for diet plan");
//       }

//       const cleanDietJson = extractJsonFromMarkdown(resultDiet);
//       console.log("Cleaned diet JSON:", cleanDietJson);

//       try {
//         diet = JSON.parse(cleanDietJson);

//         // Ensure diet data structure matches schema
//         console.log("Diet plan structure validation:");

//         if (!diet.userProfile || !diet.userProfile.ascvdRisk) {
//           console.warn("Missing userProfile.ascvdRisk in diet plan");
//           diet.userProfile = diet.userProfile || {};
//           diet.userProfile.ascvdRisk =
//             diet.userProfile.ascvdRisk || risk_Score.toString();
//         }

//         if (!diet.dailyMeals) {
//           console.warn("Missing dailyMeals in diet plan");
//           diet.dailyMeals = {
//             breakfast: [],
//             lunch: [],
//             dinner: [],
//             snacks: [],
//           };
//         } else {
//           // Ensure all meal arrays exist
//           diet.dailyMeals.breakfast = Array.isArray(diet.dailyMeals.breakfast)
//             ? diet.dailyMeals.breakfast
//             : [];
//           diet.dailyMeals.lunch = Array.isArray(diet.dailyMeals.lunch)
//             ? diet.dailyMeals.lunch
//             : [];
//           diet.dailyMeals.dinner = Array.isArray(diet.dailyMeals.dinner)
//             ? diet.dailyMeals.dinner
//             : [];
//           diet.dailyMeals.snacks = Array.isArray(diet.dailyMeals.snacks)
//             ? diet.dailyMeals.snacks
//             : [];
//         }

//         if (!diet.macronutrientBreakdown) {
//           console.warn("Missing macronutrientBreakdown in diet plan");
//           diet.macronutrientBreakdown = {
//             protein: "",
//             carbohydrates: "",
//             fats: "",
//           };
//         }

//         if (!Array.isArray(diet.dietaryRecommendations)) {
//           console.warn(
//             "dietaryRecommendations is not an array, fixing structure"
//           );
//           diet.dietaryRecommendations = diet.dietaryRecommendations || [];
//         }

//         if (!diet.weeklySummary) {
//           console.warn("Missing weeklySummary in diet plan");
//           diet.weeklySummary = {
//             overview: "",
//             importantNotes: "",
//           };
//         }
//       } catch (parseError) {
//         console.error("Failed to parse diet plan JSON:", parseError);
//         console.error("Raw diet response:", resultDiet);
//         throw new Error("Invalid JSON format in Gemini diet response");
//       }
//     } catch (geminiError) {
//       console.error("Gemini API error:", geminiError);
//       return res.status(500).json({
//         message: "Error generating health plans from Gemini API",
//         error: geminiError.message,
//       });
//     }

//     // Log the data that will be saved
//     console.log(
//       "Exercise plan to be saved:",
//       JSON.stringify(exercise, null, 2)
//     );
//     console.log("Diet plan to be saved:", JSON.stringify(diet, null, 2));

//     assessmentData.exercisePlan = exercise;
//     assessmentData.dietPlan = diet;

//     // Find existing health history or create new one
//     let healthHistory = await HealthHistory.findOne({ user: userId });
//     if (!healthHistory) {
//       healthHistory = new HealthHistory({
//         user: userId,
//         assessments: [assessmentData],
//       });
//     } else {
//       // Add new assessment to existing history
//       healthHistory.assessments.push(assessmentData);
//     }

//     try {
//       const savedHistory = await healthHistory.save();
//       console.log("Successfully saved to database");

//       res.status(201).json({
//         message: "Health assessment added successfully",
//         assessments: savedHistory.assessments,
//       });
//     } catch (saveError) {
//       console.error("Database save error:", saveError);
//       if (saveError.name === "ValidationError") {
//         console.error("Validation errors:", saveError.errors);
//         return res.status(400).json({
//           message: "Data validation error",
//           errors: saveError.errors,
//         });
//       }
//       throw saveError;
//     }
//   } catch (error) {
//     console.error("Error adding health assessment:", error);
//     res.status(500).json({ message: "Server error adding health assessment" });
//   }
// };
