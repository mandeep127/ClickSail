import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaComment,
  FaUserCircle,
  FaExpandArrowsAlt,
} from "react-icons/fa"; // Importing icons from react-icons/fa

const AdminHeader = () => {
  const navigate=useNavigate()
  return (
    <Navbar expand="lg" className="main-header navbar navbar-expand border-bottom ">
      {/* Left navbar links */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/admin/user/queries">
            <FaBars />
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/dashboard">
              <FaHome /> <strong>Home</strong> 
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/user/queries">
              user{" "}
              <sup>
                <FaComment />
              </sup>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* Right navbar links */}
      <Navbar.Collapse className="justify-content-end me-4 ">
        <Nav>
        
          
          <NavDropdown
            title={
              <FaUserCircle style={{ fontSize: "30px", color: "#702632" }} />
            }
           className="me-3" id="basic-nav-dropdown"
          >
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Orders</NavDropdown.Item>
                <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{localStorage.clear()
                  navigate('/admin/login')
                }}> Logout</NavDropdown.Item>
              </NavDropdown>
          <Nav.Link href="#">
            <FaExpandArrowsAlt />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminHeader;
