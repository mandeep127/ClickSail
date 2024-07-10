import React from "react";
import ProtectedRoute from "../routes/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../src/pages/admin/dashboard/Dashboard";
import List from "../../src/pages/admin/user/List";
import AddUser from "../../src/pages/admin/user/Add";
import Categorieslist from "../../src/pages/admin/categories/List";
import SubCategoriesList from "../../src/pages/admin/subcategories/List";
import ProductList from "../../src/pages/admin/products/List";
import Orders from "../../src/pages/admin/sales/Orders";
import Transactions from "../../src/pages/admin/sales/Transactions";
import EditUser from "../../src/pages/admin/user/Edit";
import AddCat from "../../src/pages/admin/categories/Add";
import EditCat from "../../src/pages/admin/categories/Edit";
import AddSubCat from "../../src/pages/admin/subcategories/Add";
import EditSubCat from "../../src/pages/admin/subcategories/Edit";
import AddProduct from "../../src/pages/admin/products/Add";
import EditProduct from "../../src/pages/admin/products/Edit";
import AdminProfile from "../../src/pages/admin/profile/AdminProfile";
import AdminChangePass from "../../src/pages/admin/profile/AdminChangePass";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/user/list" element={<List />} />
        <Route path="/admin/user/add" element={<AddUser />} />
        <Route path="/admin/categories/list" element={<Categorieslist />} />
        <Route
          path="/admin/subcategories/list"
          element={<SubCategoriesList />}
        />
        <Route path="/admin/product/list" element={<ProductList />} />
        <Route path="/admin/sales/list" element={<Orders />} />
        <Route path="/admin/transactions/list" element={<Transactions />} />
        <Route path="/admin/user/edit/:id"  element={<EditUser />} />
        <Route path="/admin/category/add" element={<AddCat />} />
        <Route path="/admin/category/edit/:id" element={<EditCat />} />
        <Route path="/admin/subcategory/add" element={<AddSubCat />} />
        <Route path="/admin/subcategory/edit/:id" element={<EditSubCat />} />
        <Route path="/admin/product/add" element={<AddProduct />} />
        <Route path="/admin/product/edit/:id" element={<EditProduct />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/profile/change_password" element={<AdminChangePass />} />

      </Routes>
    </>
  );
};

export default Routing;
