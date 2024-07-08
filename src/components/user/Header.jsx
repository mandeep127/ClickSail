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
import { useDispatch } from "react-redux";
import { Logout } from "../../store/authAPI/authApiSlice";

const Header = () => {
  const userName = "John Doe"; // Replace with actual user name or session data

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const handleShowModal = () => {
    setShowLogoutModal(true);
  };

  const handleHideModal = () => {
    setShowLogoutModal(false);
  };
  const data = {}; // Define 'data' if it's used for storing API response or data

  // Example usage:
  const handleApiResponse = () => {
    console.log(data); // Using 'data' variable
  };

  const handleLogout = () => {
    dispatch(Logout())
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      })
      .finally(() => {
        setShowLogoutModal(false);
      });
  };

  return (
    <Navbar expand="lg" className="custom-navbar py-5">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-1 fw-bold text-white">
          Click Sail<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarsClickSail" />
        <Navbar.Collapse id="navbarsClickSail">
          <Nav className="ms-auto fs-5 ">
            <Nav.Link as={Link} to="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop/all" className="me-3">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="me-3">
              About us
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
            <NavDropdown.Item as={Link} to="/profile" className="bg-white">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/orders" className="bg-white">
              Orders
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/change-password"
              className="bg-white"
            >
              Change Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleShowModal} className="bg-white">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className="ms-3">
            <Nav.Link href="/login">
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
        <Modal.Body className="h6">Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-secondary rounded-pill mt-3 px-4 py-2 me-3"
            onClick={handleHideModal}
          >
            No
          </Button>
          <Button
            className="btn-danger rounded-pill mt-3 px-4 py-2 me-3"
            onClick={handleLogout}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default Header;
