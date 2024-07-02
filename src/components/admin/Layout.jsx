import React from "react";
import AdminHeader from "./Navbar";
import AdminSidebar from "./Sidebar";
import AdminFooter from "./Footer";
import Routing from "../../routes/Routing";
import { useLocation } from "react-router-dom";

const Layout = () => {

  const params=useLocation()

  return (
    <>
    <div className="layout d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
        <div className="sidebar">
          <AdminSidebar />
        </div>
        <div className="d-flex flex-column flex-grow-1 overflow-hidden">
          <AdminHeader />
          <div className="d-flex flex-grow-1 overflow-auto">
            <Routing />
          </div>
          <AdminFooter />
        </div>
      </div>
    </div>
    </>
  );
};

export default Layout;
