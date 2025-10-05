require("dotenv").config();
const { testGeminiConnection } = require("./healthPlans.js");

console.log("Testing Gemini API...");
testGeminiConnection().then((success) => {
  if (success) {
    console.log("✅ Gemini API is working correctly");
  } else {
    console.log("❌ Gemini API test failed");
    console.log("Please check:");
    console.log("1. Your .env file has GEMINI_API_KEY set");
    console.log("2. Your API key is valid");
    console.log("3. Your API key has access to Gemini models");
  }
  process.exit(0);
});
