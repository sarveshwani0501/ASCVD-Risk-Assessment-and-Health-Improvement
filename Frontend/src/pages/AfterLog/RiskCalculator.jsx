import { useState, useRef, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

import Loader from "../../components/afterLogComp/Loader";
import React from "react";
import {
  addHealthAssessment,
  selectLatestAssessment,
} from "../../features/healthSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RiskCalculator() {
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [riskRate, setRiskRate] = useState(null);
  const [formData, setFormData] = useState({
    // Demographic
    age: "",
    sex: "M",
    education: "10th",

    is_smoking: "NO",
    cigsPerDay: "",

    bpMeds: "NO",
    prevalentStroke: "NO",
    prevalentHyp: "NO",
    diabetes: "NO",

    totChol: "",
    sysBP: "",
    diaBP: "",
    bmi: "",
    heartRate: "",
    glucose: "",
  });

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  const status = useSelector((state) => state.healthHistory.status);
  const latestAssessment = useSelector(selectLatestAssessment);

  useEffect(() => {
    if (isLoading && status === "succeeded" && latestAssessment) {
      setIsLoading(false);
      setRiskRate(Number(latestAssessment.risk_Score.toFixed(2)));
      setSubmit(true);
    } else if (status === "failed") {
      setIsLoading(false);
    }
  }, [status, latestAssessment, isLoading]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      if (value === "" || !isNaN(Number(value))) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const calculateRisk = () => {
    setIsLoading(true);
    setSubmit(false);
    dispatch(
      addHealthAssessment({
        userId,
        assessmentData: {
          ...formData,
        },
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-5">
        <h1 className="text-2xl font-bold text-white">CVD Risk Calculator</h1>
        <p className="text-teal-100 mt-1 text-sm">
          Calculate your cardiovascular disease risk based on Framingham Heart
          Study factors
        </p>
      </div>

      <div className="p-6 bg-gray-50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateRisk();
          }}
        >
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Demographic Information
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="age"
                  >
                    Age
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="sex"
                  >
                    Sex
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    value={formData.sex}
                    required
                    onChange={handleChange}
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  >
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="sex"
                  >
                    Education
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="education"
                    required
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  >
                    <option value="10th">Secondary School (10th)</option>
                    <option value="12th">Junior College (12th)</option>
                    <option value="bachelor">Undergraduate (Bachelor's)</option>
                    <option value="master">Postgraduate (Master's)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Behavioral Factors
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="is_smoking"
                    required
                  >
                    Current Smoker
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="is_smoking-yes"
                        name="is_smoking"
                        value="YES"
                        checked={formData.is_smoking === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="is_smoking-no"
                        name="is_smoking"
                        value="NO"
                        checked={formData.is_smoking === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="cigsPerDay"
                  >
                    Cigarettes Per Day
                  </label>
                  <input
                    id="cigsPerDay"
                    type="number"
                    name="cigsPerDay"
                    required
                    value={formData.cigsPerDay}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Medical History
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="bpMeds"
                    required
                  >
                    On Blood Pressure Medication
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="bpMeds-yes"
                        name="bpMeds"
                        value="YES"
                        checked={formData.bpMeds === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="bpMeds-no"
                        name="bpMeds"
                        value="NO"
                        checked={formData.bpMeds === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="prevalentStroke"
                    required
                  >
                    Previous Stroke
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentStroke-yes"
                        name="prevalentStroke"
                        value="YES"
                        checked={formData.prevalentStroke === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentStroke-no"
                        name="prevalentStroke"
                        value="NO"
                        checked={formData.prevalentStroke === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="prevalentHyp"
                    required
                  >
                    Hypertensive
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentHyp-yes"
                        name="prevalentHyp"
                        value="YES"
                        checked={formData.prevalentHyp === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="prevalentHyp-no"
                        name="prevalentHyp"
                        value="NO"
                        checked={formData.prevalentHyp === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="diabetes"
                    required
                  >
                    Diabetes
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex space-x-6 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="diabetes-yes"
                        name="diabetes"
                        value="YES"
                        checked={formData.diabetes === "YES"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        id="diabetes-no"
                        name="diabetes"
                        value="NO"
                        checked={formData.diabetes === "NO"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-teal-700 border-b border-gray-100 pb-2">
                Current Medical Measurements
              </h3>
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="totChol"
                  >
                    Total Cholesterol (mg/dL)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="totChol"
                    type="number"
                    name="totChol"
                    required
                    value={formData.totChol}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="sysBP"
                  >
                    Systolic BP (mmHg)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="sysBP"
                    type="number"
                    name="sysBP"
                    required
                    value={formData.sysBP}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="diaBP"
                  >
                    Diastolic BP (mmHg)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="diaBP"
                    type="number"
                    name="diaBP"
                    required
                    value={formData.diaBP}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="bmi"
                  >
                    BMI
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="bmi"
                    type="number"
                    name="bmi"
                    required
                    value={formData.bmi}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="heartRate"
                  >
                    Heart Rate (bpm)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="heartRate"
                    type="number"
                    name="heartRate"
                    required
                    value={formData.heartRate}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="glucose"
                  >
                    Glucose (mg/dL)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="glucose"
                    type="number"
                    name="glucose"
                    required
                    value={formData.glucose}
                    onChange={handleChange}
                    autoComplete="off"
                    className="h-10 px-3 rounded-md border border-gray-300 bg-white text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                               transition-colors duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-3 rounded-lg font-medium shadow-md focus:outline-none focus:ring-2
                       focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200
                       ${
                         isLoading
                           ? "bg-gray-400 text-white cursor-not-allowed"
                           : "bg-teal-600 text-white hover:bg-teal-700"
                       }`}
            >
              {isLoading ? "Calculating..." : "Calculate Risk Score"}
            </button>
          </div>
        </form>
      </div>

      {isLoading && (
        <div className="my-8 flex justify-center items-center px-6">
          <div className="border w-full px-4 py-5 flex flex-col items-center rounded-lg bg-gray-50 border-gray-200">
            <Loader />
            <span className="text-xl font-medium text-gray-700">
              Calculating your risk score
            </span>

            <p className="mt-2 text-sm text-gray-500">
              Please wait while we process your health data
            </p>
          </div>
        </div>
      )}

      {isSubmit && riskRate && !isLoading && (
        <div>
          <div className="my-8 flex justify-center items-center px-6">
            <div
              className={`border w-full px-4 py-5 flex justify-between items-center rounded-lg ${
                riskRate < 10
                  ? "bg-green-50 border-green-200 text-green-800"
                  : riskRate < 20
                  ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              <div>
                <h2 className="text-2xl font-semibold">
                  CVD Risk Score: {riskRate}%
                </h2>
                <p className="mt-1 text-sm">
                  {riskRate < 10
                    ? "Low risk: Continue healthy lifestyle habits"
                    : riskRate < 20
                    ? "Moderate risk: Consider lifestyle modifications"
                    : "High risk: Consult healthcare provider"}
                </p>
              </div>
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center ${
                  riskRate < 10
                    ? "bg-green-500"
                    : riskRate < 20
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                <span className="text-2xl font-bold text-white">
                  {riskRate}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
