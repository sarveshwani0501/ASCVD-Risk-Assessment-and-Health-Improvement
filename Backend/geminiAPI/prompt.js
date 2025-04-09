function getPrompt1(risk_Score) {
  const prompt = `Generate an exercise plan for a user with an ASCVD risk rate of ${risk_Score}.
Return only a valid JSON object in the exact format shown below.
Do not change the structure, key names, or nesting.
Fill in each field with realistic and appropriate values based on the user's risk level.
The JSON must be strictly parsable.
Use this exact structure:
{
  "exercisePlan": {
    "userProfile": {
      "ascvdRisk": ""
    },
    "aerobicExercises": [
      {
        "type": "",
        "duration": "",
        "frequency": ""
      }
    ],
    "strengthTrainingExercises": [
      {
        "type": "",
        "duration": "",
        "frequency": ""
      }
    ],
    "flexibilityExercises": [
      {
        "type": "",
        "duration": "",
        "frequency": ""
      }
    ],
    "weeklySummary": {
      "aerobic": "",
      "strengthTraining": "",
      "flexibility": "",
      "notes": ""
    }
  }
}
`;

  return prompt;
}

function getPrompt2(risk_Score) {
  const prompt = `Generate a diet plan for a user with an ASCVD risk rate of ${risk_Score}.
Return only a valid JSON object in the exact format shown below.
Do not change the structure, key names, or nesting.
Fill in each field with realistic and appropriate values based on the user's risk level.
The JSON must be strictly parsable.
Use this exact structure:
{
  "dietPlan": {
    "userProfile": {
      "ascvdRisk": ""
    },
    "dailyMeals": {
      "breakfast": [""],
      "lunch": [""],
      "dinner": [""],
      "snacks": [""]
    },
    "macronutrientBreakdown": {
      "protein": "grams per day",
      "carbohydrates": "grams per day",
      "fats": "grams per day"
    },
    "dietaryRecommendations": [
      ""
    ],
    "weeklySummary": {
      "overview": "",
      "importantNotes": ""
    }
  }
}
`;

  return prompt;
}

module.exports = { getPrompt1, getPrompt2 };
