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

const initialState = {
  userData: null,
  completeHistory: [],
  latestAssessment: null,
  status: "idle",
  error: null,
};

const healthHistorySlice = createSlice({
  name: "healthHistory",
  initialState,
  reducers: {
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

      .addCase(fetchUserHealthHistory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserHealthHistory.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.payload.user) {
          state.userData = {
            id: action.payload.user._id,
            firstName: action.payload.user.firstName,
            lastName: action.payload.user.lastName,
            email: action.payload.user.email,
          };
        }

        if (action.payload.assessments) {
          state.completeHistory = action.payload.assessments;

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

      .addCase(addHealthAssessment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addHealthAssessment.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.payload.assessments) {
          state.completeHistory = action.payload.assessments;

          const assessments = action.payload.assessments;
          if (assessments.length > 0) {
            state.latestAssessment = assessments[assessments.length - 1];
          }
        } else if (action.payload.assessment) {
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

export const { clearHealthHistory } = healthHistorySlice.actions;

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

export default healthHistorySlice.reducer;
