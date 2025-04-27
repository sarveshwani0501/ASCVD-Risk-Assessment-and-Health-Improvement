// import { configureStore } from "@reduxjs/toolkit";
// import healthHistoryReducer from "../features/healthSlice";

// export const store = configureStore({
//   reducer: {
//     healthHistory: healthHistoryReducer,
//     // Add other reducers here as needed
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Disable for large data sets if needed
//     }),
// });

// export default store;

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
