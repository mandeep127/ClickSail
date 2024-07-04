import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const user = useSelector((state) => state.user);
  let location = useLocation();
  const data = localStorage.getItem("token");
  const navigate = useNavigate();
  const userType = "admin";
  useEffect(() => {
    if (!data && userType != "admin") {
      return navigate("/");
    }
  }, []);
  return children;
};

export default ProtectedRoute;
