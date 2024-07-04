import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "../components/user/Welcome";
import Shop from "../pages/user/Product/Shop";
import ProductDetails from "../pages/user/Product/ProductDetails";
import ShowCart from "../pages/user/Product/ShowCart";
import Orders from "../pages/user/Order/Orders";
import OrdersDetails from "../pages/user/Order/OrderDetails";
import Checkout from "../pages/user/Payment/Checkout";
import PaymentStatus from "../pages/user/Payment/PaymentStatus";
import Profile from "../pages/user/ProfileControl/Profile";
import ChangePassword from "../pages/user/ProfileControl/ChangePasswords";
import UpdateProfile from "../pages/user/ProfileControl/UpdateProfile";
import ContactForm from "../pages/user/Contact";
const UserRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<ShowCart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders-details" element={<OrdersDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default UserRouting;
