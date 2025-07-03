import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import healthHistoryReducer from "../features/healthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    healthHistory: healthHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["auth/loginUser/fulfilled"],
        ignoredPaths: ["auth.user"],
      },
    }),
});

export default store;
