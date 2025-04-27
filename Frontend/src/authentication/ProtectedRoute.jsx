import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, loginUser } from "../features/authSlice";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if the user is already authenticated in the Redux store
    if (isAuthenticated) {
      setIsChecking(false);
      return;
    }

    // Check if there's an authentication session with the backend
    const checkAuthStatus = async () => {
      try {
        // You can create a separate endpoint for this or use an existing one
        const response = await axios.get(
          "http://localhost:5000/api/auth/verify",
          {
            withCredentials: true, // Important for sending cookies
          }
        );

        if (response.data.isAuthenticated) {
          // If the server confirms authentication, update Redux state
          dispatch(
            loginUser.fulfilled(
              {
                token: response.data.token,
                user: response.data.user,
              },
              "checkAuth",
              null
            )
          );
        }
      } catch (error) {
        // If verification fails, user remains unauthenticated
        console.log("Auth verification failed:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkAuthStatus();
  }, [dispatch, isAuthenticated]);

  // Show nothing while checking authentication status
  if (isChecking) {
    return null; // Or a loading spinner/indicator
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render protected content
  return children;
};

export default ProtectedRoute;
