import React, { useEffect } from "react";
import Layouts from "./components/user/Layouts";
import AuthRouting from "./routes/AuthRouting";
import Routing from "./routes/Routing";
import AdminLayout from "./components/admin/Layout";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
function App() {
  const userCheck = "admin";
  const params = useLocation();

  return (
    <>
      <AuthRouting />

      {userCheck === "admin" &&
       <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }
      {!params.pathname.includes("/admin") ||
        !params.pathname.includes("/login") ||
        !params.pathname.includes("/register") ||
        !params.pathname.includes("/forget-password") ||
        (!params.pathname.includes("/reset-password") && <Layouts />)}
    </>
  );
}

export default App;
