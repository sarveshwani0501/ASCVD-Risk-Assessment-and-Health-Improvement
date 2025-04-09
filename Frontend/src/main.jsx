import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "./components/afterLogComp/Layout.jsx";
import RiskCalculator from "./pages/AfterLog/RiskCalculator.jsx";
import HomeA from "./pages/AfterLog/HomeA.jsx";
import Dashboard from "./pages/AfterLog/Dashboard.jsx";
import HealthPlans from "./pages/AfterLog/HealthPlans.jsx";
import Profile from "./pages/AfterLog/Profile.jsx";
import HomePage from "./pages/BeforeLog/HomePage.jsx";
import LayoutB from "./components/beforeLogComp/LayoutB.jsx";
import SignUp from "./pages/BeforeLog/SignUp.jsx";
import Login from "./pages/BeforeLog/Login.jsx";
import ForgetPassword from "./pages/BeforeLog/ForgotPassword.jsx";
import ProtectedRoute from "./authentication/ProtectedRoute.jsx";
import store from "./app/store.js";
import ResetPassword from "./pages/BeforeLog/ResetPassword.jsx";
import AboutUs from "./pages/BeforeLog/AboutUs.jsx";
import ContactUs from "./pages/BeforeLog/ContactUs.jsx";
//
//

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* <Route index element={<HomeA />} /> */}
        <Route path="home" element={<HomeA />} />
        <Route path="risk" element={<RiskCalculator />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="healthTips" element={<HealthPlans />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route element={<LayoutB />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
