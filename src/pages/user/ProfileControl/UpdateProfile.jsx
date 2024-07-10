// UpdateProfileForm.js

import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  // Dummy data for user (replace with actual data fetching logic if needed)
  const [user, setUser] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
  });

  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form validation (replace with actual validation logic)
    const newErrors = [];
    if (!formData.name || !formData.username || !formData.email) {
      newErrors.push("All fields are required");
    }
    setErrors(newErrors);

    // Simulate update profile (replace with actual API call)
    if (newErrors.length === 0) {
      // Simulate success message
      setSuccessMessage("Profile updated successfully");
      // Update user data (optional)
      setUser({
        ...user,
        name: formData.name,
        username: formData.username,
        email: formData.email,
      });
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center pt-4">
        <Col md={6}>
          <h3 className="text-center">Update Profile</h3>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errors.length > 0 && (
            <Alert variant="danger">
              {errors.map((error, index) => (
                <p key={index}>
                  <BsFillExclamationTriangleFill /> {error}
                </p>
              ))}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Link
              to="/dashboard"
              className="btn btn-primary "
              onClick={handleSubmit}
            >
              Update Profile
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProfile;
