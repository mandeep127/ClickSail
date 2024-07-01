import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "../component/user/Welcome";
import Shop from "../pages/user/Product/Shop";
import ProductDetails from "../pages/user/Product/ProductDetails";
import ShowCart from "../pages/user/Product/ShowCart";
import Orders from "../pages/user/Order/Orders";
import OrdersDetails from "../pages/user/Order/OrderDetails";

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
      </Routes>
    </>
  );
};

export default UserRouting;
