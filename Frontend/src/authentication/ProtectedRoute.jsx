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
    if (isAuthenticated) {
      setIsChecking(false);
      return;
    }

    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/verify",
          {
            withCredentials: true,
          }
        );

        if (response.data.isAuthenticated) {
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
        console.log("Auth verification failed:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkAuthStatus();
  }, [dispatch, isAuthenticated]);

  if (isChecking) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
