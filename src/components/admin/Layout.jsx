import React from "react";
import Header from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Routing from "../../routes/Routing";

const Layout = () => {
  return (
    <>
    <div className="layout d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="d-flex flex-column flex-grow-1 overflow-hidden">
          <Header />
          <div className="d-flex flex-grow-1 overflow-auto">
            <Routing />
          </div>
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
};

export default Layout;
