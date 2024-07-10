import React, { useEffect } from "react";
import Layouts from "./components/user/Layouts";
import Routing from "./routes/Routing";
import AdminLayout from "./components/admin/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/admin/auth/Login";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";
import ResetPassword from "./pages/admin/auth/ResetPassword";
import UserLogin from "./pages/user/Login";
import UserForgotPassword from "./pages/user/ForgotPassword";
import UserResetPassword from "./pages/user/ResetPassword";
import UserRegister from "./pages/user/Register";
import Checkout from "./pages/user/Payment/Checkout";
import WelcomePage from "./components/user/Welcome";
import Shop from "./pages/user/Product/Shop";
import ProductDetails from "./pages/user/Product/ProductDetails";
import ShowCart from "./pages/user/Product/ShowCart";
import Orders from "./pages/user/Order/Orders";
import OrdersDetails from "./pages/user/Order/OrderDetails";
import PaymentStatus from "./pages/user/Payment/PaymentStatus";
import Profile from "./pages/user/ProfileControl/Profile";
import ChangePassword from "./pages/user/ProfileControl/ChangePasswords";
import UpdateProfile from "./pages/user/ProfileControl/UpdateProfile";
import ContactForm from "./pages/user/Contact";
function App() {


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
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Layouts>
                <WelcomePage />
              </Layouts>
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Layouts>
                <Shop />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/ProductDetails"
          element={
            <>
              <Layouts>
                <ProductDetails />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Layouts>
                <ShowCart />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Layouts>
                <Orders />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/orders-details"
          element={
            <>
              <Layouts>
                <OrdersDetails />
              </Layouts>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Layouts>
                <Checkout />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/payment-status"
          element={
            <>
              <Layouts>
                <PaymentStatus />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Layouts>
                <Profile />
              </Layouts>
            </>
          }
        />
        <Route
          path="/change-password"
          element={
            <>
              <Layouts>
                <ChangePassword />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/update-profile"
          element={
            <>
              <Layouts>
                <UpdateProfile />{" "}
              </Layouts>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Layouts>
                <ContactForm />
              </Layouts>
            </>
          }
        />

        {/* <Route path="/" element={<Layouts />} /> */}
      </Routes>
    </>
  );
}

export default App;
