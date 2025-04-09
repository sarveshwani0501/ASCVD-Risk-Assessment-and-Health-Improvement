import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../utils/axiosConfig";
const API_URL = "http://localhost:5000/api";

export const fetchUserHealthHistory = createAsyncThunk(
  "healthHistory/fetchUserHealthHistory",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/users/${userId}/health`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch health history"
      );
    }
  }
);

export const addHealthAssessment = createAsyncThunk(
  "healthHistory/addHealthAssessment",
  async ({ userId, assessmentData }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `/users/${userId}/health/assessment`,
        assessmentData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add health assessment"
      );
    }
  }
);

// Initial state for the health history slice
const initialState = {
  userData: null,
  completeHistory: [],
  latestAssessment: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create the health history slice
const healthHistorySlice = createSlice({
  name: "healthHistory",
  initialState,
  reducers: {
    // Clear health history data (e.g., on logout)
    clearHealthHistory: (state) => {
      state.userData = null;
      state.completeHistory = [];
      state.latestAssessment = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchUserHealthHistory action states
      .addCase(fetchUserHealthHistory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserHealthHistory.fulfilled, (state, action) => {
        state.status = "succeeded";

        // Store user data from the populated response
        if (action.payload.user) {
          state.userData = {
            id: action.payload.user._id,
            firstName: action.payload.user.firstName,
            lastName: action.payload.user.lastName,
            email: action.payload.user.email,
          };
        }

        // Store the complete assessment history
        if (action.payload.assessments) {
          state.completeHistory = action.payload.assessments;

          // Store the latest assessment if available
          const assessments = action.payload.assessments;
          if (assessments.length > 0) {
            state.latestAssessment = assessments[assessments.length - 1];
          }
        }
      })
      .addCase(fetchUserHealthHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch health history";
      })

      // Handle addHealthAssessment action states
      .addCase(addHealthAssessment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addHealthAssessment.fulfilled, (state, action) => {
        state.status = "succeeded";

        // Update the complete history with the new assessment
        if (action.payload.assessments) {
          state.completeHistory = action.payload.assessments;

          // Update the latest assessment
          const assessments = action.payload.assessments;
          if (assessments.length > 0) {
            state.latestAssessment = assessments[assessments.length - 1];
          }
        } else if (action.payload.assessment) {
          // If the API only returns the new assessment, add it to the array
          state.completeHistory.push(action.payload.assessment);
          state.latestAssessment = action.payload.assessment;
        }
      })
      .addCase(addHealthAssessment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to add health assessment";
      });
  },
});

// Export actions
export const { clearHealthHistory } = healthHistorySlice.actions;

// Export selectors
export const selectHealthHistoryStatus = (state) => state.healthHistory.status;
export const selectHealthHistoryError = (state) => state.healthHistory.error;
export const selectUserData = (state) => state.healthHistory.userData;
export const selectCompleteHistory = (state) =>
  state.healthHistory.completeHistory;
export const selectLatestAssessment = (state) =>
  state.healthHistory.latestAssessment;
export const selectUserFullName = (state) => {
  const user = state.healthHistory.userData;
  return user ? `${user.firstName} ${user.lastName}` : "";
};

// Export reducer
export default healthHistorySlice.reducer;
