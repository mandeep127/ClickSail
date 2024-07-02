import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/admin/auth/Login";
import ForgotPassword from "../pages/admin/auth/ForgotPassword";
import ResetPassword from "../pages/admin/auth/ResetPassword";
import UserLogin from "../pages/user/Login";
import UserRegister from "../pages/user/Register";
import UserForgotPassword from "../pages/user/ForgotPassword";
import UserResetPassword from "../pages/user/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
const AuthRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot-password" element={<UserForgotPassword />} />
        <Route path="/reset-password" element={<UserResetPassword />} />
      </Routes>
    </>
  );
};

export default AuthRouting;
