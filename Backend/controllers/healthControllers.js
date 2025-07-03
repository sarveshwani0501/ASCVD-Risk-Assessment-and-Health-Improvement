const HealthHistory = require("../models/userHealth");
const User = require("../models/user");
const { getPrompt1, getPrompt2 } = require("../geminiAPI/prompt");
const { runGemini } = require("../geminiAPI/healthPlans");
const axios = require("axios");

exports.getUserHealthHistory = async (req, res) => {
  try {
    const userId = req.params.userId;

   
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    
    let healthHistory = await HealthHistory.findOne({ user: userId }).populate(
      "user",
      "firstName lastName email"
    );
    console.log(healthHistory);
    
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
  
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (jsonMatch && jsonMatch[1]) {
    return jsonMatch[1].trim();
  }
  
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


exports.addHealthAssessment = async (req, res) => {
  try {
    const userId = req.params.userId;
    const assessmentData = req.body;

   
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

    let exercise, diet;

    try {
      
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

    

    assessmentData.exercisePlan = exercise;
    assessmentData.dietPlan = diet;
    assessmentData.risk_Score = risk_Score;
    
    let healthHistory = await HealthHistory.findOne({ user: userId });
    if (!healthHistory) {
      healthHistory = new HealthHistory({
        user: userId,
        assessments: [assessmentData],
      });
    } else {
      
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

