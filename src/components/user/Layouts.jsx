import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WelcomePage from "./Welcome";
import AuthRouting from "../../routes/AuthRouting";
import UserRouting from "../../routes/UserRouting";

const Layouts = () => {
  return (
    <>
      <div className="d-flex flex-column h-100">
        <Header />
        <div className="flex-grow-1">
          <UserRouting />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
