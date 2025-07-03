# 🩺 ASCVD Risk Assessment Platform

This full-stack web application allows users to assess their **10-year risk of coronary heart disease (CHD)** using health metrics and a trained ML model.

---

## 📁 Project Structure

```
root/
├── Backend/
│   ├── index.js
│   ├── package.json
│   └── riskPredictorModel/
│       ├── riskUsingFlask.py
│       └── cardio_data.csv
├── Frontend/
│   ├── src/
│   └── package.json
└── README.md
```

---

## ⚙️ Prerequisites

- **Node.js** (v18+ recommended)
- **Python** (v3.8+ recommended)
- **MongoDB** running locally or remotely
- **pip** for installing Python packages

---

## 🚀 Setup Instructions

### 1️⃣ Backend (Node.js + Express)

```bash
cd Backend
npm install
npm start
```

Runs at: `http://localhost:5000`

---

### 2️⃣ Frontend (React + Vite)

```bash
cd Frontend
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

### 3️⃣ ML Model (Flask + Random Forest)

#### 📍 File: `Backend/riskPredictorModel/riskUsingFlask.py`

Install Python libraries:

```bash
pip install flask pandas numpy scikit-learn imbalanced-learn joblib
```

Or with `requirements.txt`:

```bash
pip install -r requirements.txt
```

Run the Flask server:

```bash
cd Backend/riskPredictorModel
python riskUsingFlask.py
```

Runs at: `http://localhost:6000`

---

## 🔁 Flask API Endpoints

### ✅ `GET /health`

Check if the Flask server is running.

```bash
curl http://localhost:6000/health
```

---

### 🔮 `POST /predict`

Predict 10-year CHD risk using patient data.

#### 📤 Sample JSON Input:

```json
{
  "age": 55,
  "education": 2,
  "sex": 1,
  "cigsPerDay": 10,
  "BPMeds": 0,
  "prevalentStroke": 0,
  "prevalentHyp": 1,
  "diabetes": 0,
  "totChol": 250,
  "BMI": 28,
  "heartRate": 70,
  "glucose": 85,
  "pulsePressure": 40
}
```

Response format:

```json
{
  "risk_percentage": 36.54,
  "risk_level": "Moderate"
}
```

---

## 🔌 Running All Servers Together

| Service         | Command                    | Directory                     |
| --------------- | -------------------------- | ----------------------------- |
| React Frontend  | `npm run dev`              | `Frontend/`                   |
| Node Backend    | `npm start`                | `Backend/`                    |
| Flask Model API | `python riskUsingFlask.py` | `Backend/riskPredictorModel/` |

---

## 🧠 Tech Stack

- **Frontend**: React, Vite, Redux, TailwindCSS, Chart.js, Recharts
- **Backend**: Node.js, Express, MongoDB, JWT, Bcrypt
- **ML Model**: Python, Flask, RandomForest, SMOTE, Scikit-learn

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE) © 2025 Sarvesh Wani.

---
