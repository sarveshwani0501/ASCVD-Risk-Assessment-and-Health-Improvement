ASCVD Risk Assessment and Health Improvement Platform

This project is a full-stack web application that helps users assess their risk of Atherosclerotic Cardiovascular Disease (ASCVD) and guides them with personalized diet and exercise plans. It leverages machine learning for accurate risk prediction, provides a visual dashboard for health tracking, and includes a modern authentication system.

🚀 Features

🧠 ASCVD Risk Calculator with 90%+ accuracy using ML

📊 Visual Health Dashboard to track historical trends (BP, cholesterol, glucose, etc.)

🍽️ AI-generated Diet & Exercise Plans tailored to the user's risk level

🔐 Secure login, signup, and JWT-based authentication

📈 Risk comparison with previous assessments

👨‍⚕️ Personalized user profile and health history

🏗️ Tech Stack

Frontend: HTML, CSS, JavaScript, React.js

Backend: Node.js, Express.js

Machine Learning: Python (Jupyter Notebook), Flask API

AI Integration: Gemini API for diet/exercise recommendations

Database: MongoDB

Authentication: JWT, bcrypt, cookies

📥 Input Parameters

The following user details are collected for risk assessment:

Age

Gender

Education Level

Smoking Status & Cigarettes per Day

Diabetes Status

Previous Stroke History

Hypertensive Status

On Blood Pressure Medication

Total Cholesterol

Systolic & Diastolic BP

Glucose Level

BMI

Heart Rate


⚙️ How It Works

1. User fills out a health form.

2. Node.js backend receives the data.

3. Backend sends data to Flask ML API which returns:
ASCVD Risk Score (%)
Risk Level (Low, Borderline, Moderate, High)

4. Backend sends score + risk level to Gemini API for personalized plans. 

5. All data is stored in MongoDB and displayed on the frontend dashboard.
