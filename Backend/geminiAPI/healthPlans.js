// require("dotenv").config();
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // Test function to list available models
// async function testGeminiConnection() {
//   try {
//     console.log("Testing Gemini API connection...");
//     console.log("API Key exists:", !!process.env.GEMINI_API_KEY);

//     // Try a simple model first
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const result = await model.generateContent("Hello");
//     console.log("Gemini API is working!");
//     return true;
//   } catch (error) {
//     console.error("Gemini API test failed:", error.message);
//     return false;
//   }
// }

// async function runGemini(prompt) {
//   const modelNames = ["gemini-pro", "gemini-1.0-pro", "text-bison"];

//   for (const modelName of modelNames) {
//     try {
//       console.log(`Trying model: ${modelName}`);
//       const model = genAI.getGenerativeModel({ model: modelName });
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = response.text();
//       console.log(`Success with model: ${modelName}`);
//       return text;
//     } catch (error) {
//       console.log(`Failed with model ${modelName}:`, error.message);
//       continue; // Try next model
//     }
//   }

//   // If all models fail, return fallback
//   console.log("All Gemini models failed, using fallback response");
//   return JSON.stringify({
//     exercise:
//       "Regular physical activity is recommended. Aim for at least 150 minutes of moderate-intensity aerobic activity per week.",
//     diet: "Follow a heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins. Limit saturated fats, trans fats, and sodium.",
//   });
// }

// module.exports = { runGemini, testGeminiConnection };
//gemini.js
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { runGemini };
