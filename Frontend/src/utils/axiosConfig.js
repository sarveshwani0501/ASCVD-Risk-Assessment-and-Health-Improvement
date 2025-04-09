import axios from "axios";

// Create an axios instance with defaults
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // This ensures cookies are sent with requests
});

// Request interceptor to handle errors or add headers
api.interceptors.request.use(
  (config) => {
    // You could add additional headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle unauthorized errors (e.g., expired token)
    if (error.response && error.response.status === 401) {
      // You could dispatch a logout action here or redirect to login
      console.log("Unauthorized: Please log in again");
      // Example: store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default api;
