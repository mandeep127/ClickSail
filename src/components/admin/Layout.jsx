import React from "react";
import AdminHeader from "./Navbar";
import AdminSidebar from "./Sidebar";
import AdminFooter from "./Footer";
import Routing from "../../routes/Routing";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const params = useLocation();

  return (
    <div className="layout d-flex vh-100">
      <div className="sidebar">
        <AdminSidebar />
      </div>
      <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        <AdminHeader />
        <div className="main-content d-flex flex-column flex-grow-1 overflow-auto">
          <Routing />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default Layout;
