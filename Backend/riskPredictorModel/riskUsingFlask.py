import numpy as np
import pandas as pd
import pickle
import joblib
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import SMOTE
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import warnings
from flask import Flask, request, jsonify
import os
warnings.filterwarnings('ignore')

# Initialize Flask app
app = Flask(__name__)

# Model training function - will run if model file doesn't exist
def train_model():
    print("Training new model...")
    file_path = "cardio_data.csv"
    df = pd.read_csv(file_path)

    categorical_variable = []
    continous_variable = []

    for i in df.columns:
        if i == 'id':
            pass
        elif df[i].nunique() < 5:
            categorical_variable.append(i)
        elif df[i].nunique() >= 5:
            continous_variable.append(i)
            
    df.fillna({'glucose': df['glucose'].median(),
            'education': df['education'].mode()[0],
            'BPMeds': df['BPMeds'].mode()[0],
            'totChol': df['totChol'].median(),
            'cigsPerDay': df['cigsPerDay'].median(),
            'BMI': df['BMI'].median(),
            'heartRate': df['heartRate'].median()}, inplace=True)

    df['sex'] = df['sex'].map({'F': 0, 'M': 1})

    df[continous_variable] = np.log(df[continous_variable] + 1)

    df['pulsePressure'] = df['sysBP'] - df['diaBP']
    df['pulsePressure'] = np.log(df['pulsePressure'] + 1)

    final_df = df[['age', 'education', 'sex', 'cigsPerDay', 'BPMeds',
                'prevalentStroke', 'prevalentHyp', 'diabetes', 'totChol',
                'BMI', 'heartRate', 'glucose', 'pulsePressure', 'TenYearCHD']]

    X = final_df.drop('TenYearCHD', axis=1)
    y = final_df['TenYearCHD']

    std_scaler = StandardScaler()
    X_scaled = std_scaler.fit_transform(X)

    smote = SMOTE(random_state=10)
    X_resampled, y_resampled = smote.fit_resample(X_scaled, y)

    X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=10)

    base_model = RandomForestClassifier(random_state=10)
    base_model.fit(X_train, y_train)

    model_info = {
        'model': base_model,
        'scaler': std_scaler,
        'continuous_variables': continous_variable,
        'feature_names': X.columns.tolist()
    }

    with open('chd_risk_model.pkl', 'wb') as file:
        pickle.dump(model_info, file)

    print("Model and preprocessing components saved to 'chd_risk_model.pkl'")
    return model_info

def load_model(model_path='chd_risk_model.pkl'):
    """Load the saved model and preprocessors"""
    try:
        with open(model_path, 'rb') as file:
            model_info = pickle.load(file)
        return model_info
    except FileNotFoundError:
        # If model file doesn't exist, train a new model
        return train_model()

def predict_risk(patient_data, model_info):
    """
    Predict CHD risk for a new patient
    
    Args:
        patient_data: Dictionary with patient information
        model_info: Dictionary with model and preprocessors
    
    Returns:
        risk_percentage: Percentage risk of CHD
    """
    # Convert patient_data to DataFrame
    sample_raw = pd.DataFrame(patient_data, index=[0])
    
    # Calculate pulse pressure if not provided
    if 'pulsePressure' not in sample_raw.columns and 'sysBP' in sample_raw.columns and 'diaBP' in sample_raw.columns:
        sample_raw['pulsePressure'] = sample_raw['sysBP'] - sample_raw['diaBP']
    
    # Apply log transformation to continuous variables
    for col in sample_raw.columns:
        if col in model_info['continuous_variables']:
            sample_raw[col] = np.log(sample_raw[col] + 1)

    # Ensure all required features are present
    for feature in model_info['feature_names']:
        if feature not in sample_raw.columns:
            return f"Missing required feature: {feature}", 400

    # Extract features in the correct order
    sample = sample_raw[model_info['feature_names']]
    
    # Scale the features
    sample_scaled = model_info['scaler'].transform(sample)

    # Get prediction probability
    probability = model_info['model'].predict_proba(sample_scaled)
    risk_percentage = probability[0][1] * 100
    
    return risk_percentage

# Load model when server starts
model_info = load_model()

@app.before_request
# def initialize():
#     global model_info
#     model_info = load_model()
def ensure_model_loaded():
    global model_info
    if model_info is None:
        model_info = load_model()

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint to verify API is running"""
    return jsonify({'status': 'healthy', 'message': 'CHD risk prediction API is running'})

@app.route('/predict', methods=['POST'])
def predict():
    """Endpoint to predict CHD risk from patient data"""
    # Get data from request
    if not request.json:
        return jsonify({'error': 'No data provided or invalid JSON'}), 400
    
    data = request.json
    
    # Required fields (must match model features)
    required_fields = ['age', 'education', 'sex', 'cigsPerDay', 'BPMeds',
                      'prevalentStroke', 'prevalentHyp', 'diabetes', 'totChol',
                      'BMI', 'heartRate', 'glucose', 'pulsePressure']
    
    # Check if all required fields are present
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({'error': f'Missing required fields: {", ".join(missing_fields)}'}), 400
    
    # Validate data types
    try:
        # Ensure all values are numeric
        for field in required_fields:
            data[field] = float(data[field])
    except ValueError as e:
        return jsonify({'error': f'Invalid data type: {str(e)}'}), 400
    
    try:
        # Make prediction
        risk = predict_risk(data, model_info)
        
        # Determine risk level
        if risk > 50:
            risk_level = 'High'
        elif risk > 20:
            risk_level = 'Moderate'
        else:
            risk_level = 'Low'
        
        # Return result
        return jsonify({
            'risk_percentage': float(risk),
            'risk_level': risk_level
        })
    except Exception as e:
        return jsonify({'error': f'Prediction error: {str(e)}'}), 500

# For local testing
if __name__ == '__main__':
    # Initialize model
    model_info = load_model()
    
    # Run Flask app
    port = int(os.environ.get('PORT', 6000))
    print(f"Server started at http://0.0.0.0:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)