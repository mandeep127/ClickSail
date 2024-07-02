import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const userName = "John Doe"; // Replace with actual user name or session data

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleShowModal = () => {
    setShowLogoutModal(true);
  };

  const handleHideModal = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For demo purposes, we can just close the modal
    setShowLogoutModal(false);
  };

  return (
    <Navbar expand="lg" className="custom-navbar py-5">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-1 fw-bold text-white">
          Click Sail<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarsClickSail" />
        <Navbar.Collapse id="navbarsClickSail">
          <Nav className="ms-auto fs-5">
            <Nav.Link as={Link} to="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="me-3">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="me-3">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="me-3">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="me-3">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="me-3">
              Contact us
            </Nav.Link>
          </Nav>
          <NavDropdown
            title={`Welcome, ${userName}`}
            id="basic-nav-dropdown"
            className="me-3 fs-5"
          >
            <NavDropdown.Item as={Link} to="/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/orders">
              Orders
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/change-password">
              Change Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleShowModal}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className="ms-3">
            <Nav.Link href="#">
              <AiOutlineUser size={20} />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Logout Confirmation Modal */}
      <Modal show={showLogoutModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logout Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            No
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default Header;