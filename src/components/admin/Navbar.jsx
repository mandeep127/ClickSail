import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaComment,
  FaUserCircle,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AuthLogout } from "../../adminStore/authApi/authApiSlice";
import "./Admin.css";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(AuthLogout());
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <Navbar expand="lg" className="main-header navbar navbar-expand border-bottom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ms-3">
          <Nav.Link as={Link} to="/admin/dashboard">
            <FaHome size={30} /> <strong className="mt-2 ms-2">Home</strong>
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/admin/user/queries">
            User{" "}
            <sup>
              <FaComment />
            </sup>
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>

      <NavDropdown
        title={
          <FaUserCircle style={{ fontSize: "30px", color: "#702632" }} />
        }
        className="custom-dropdown"
        id="basic-nav-dropdown"
        alignRight={false} // Align dropdown menu to the left
        style={{ marginLeft: 'auto', marginRight: '1rem' }} // Adjust margins
      >
        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#">Orders</NavDropdown.Item>
        <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
      <div  style={{ marginLeft: 'auto', marginRight: '4rem' }}>
       <strong className="mt-1">Joe</strong>
      </div>
    </Navbar>
  );
};

export default AdminHeader;
