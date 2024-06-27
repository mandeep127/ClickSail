import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";


import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const userName = 'userName';
  return (
<>
<Navbar expand="lg" className="bg-body-tertiary py-5" >
      <Container>
        <Navbar.Brand href="index.html" style={{ fontSize: '2rem', fontWeight: 'bold' }}> Click Sail<span>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarsClickSail" />
        <Navbar.Collapse id="navbarsClickSail">
          <Nav className="ms-auto fs-5">
            <Nav.Link href="index.html" className="me-3">Home</Nav.Link>
            <Nav.Link href="shop.html" className="me-3">Shop</Nav.Link>
            <Nav.Link href="about.html" className="me-3">About us</Nav.Link>
            <Nav.Link href="services.html" className="me-3">Services</Nav.Link>
            <Nav.Link href="blog.html" className="me-3">Blog</Nav.Link>
            <Nav.Link href="contact.html" className="me-3">Contact us</Nav.Link>
          </Nav>
          <NavDropdown title={`Welcome, ${userName}`} id="basic-nav-dropdown" className="me-3 fs-5">
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Orders</NavDropdown.Item>
                <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
          <Nav className="ms-3 fs-4">
            <Nav.Link href="#"><AiOutlineUser /></Nav.Link>
            <Nav.Link href="cart.html"><FaShoppingCart /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}

export default Header
