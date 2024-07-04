// ChangePasswordForm.js

import React, { useState } from "react";
import { Form, Container, Row, Col, Alert } from "react-bootstrap";
import { BsFillExclamationTriangleFill } from "react-icons/bs"; // Example icon from react-icons
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data (basic example)
    const newErrors = [];
    if (
      !formData.current_password ||
      !formData.new_password ||
      !formData.new_password_confirmation
    ) {
      newErrors.push("All fields are required");
    }
    if (formData.new_password !== formData.new_password_confirmation) {
      newErrors.push("New password and confirm password do not match");
    }
    setErrors(newErrors);

    // Simulate API call or further processing here
    if (newErrors.length === 0) {
      // Simulate success for demo purposes
      setSuccessMessage("Password updated successfully");
      setFormData({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center pt-4 pb-5">
        <Col md={6}>
          <h3 className="text-center mt-5">Change Password</h3>
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
            <Form.Group className="mb-3" controlId="current_password">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                name="current_password"
                value={formData.current_password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="new_password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                name="new_password"
                value={formData.new_password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="new_password_confirmation">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                name="new_password_confirmation"
                value={formData.new_password_confirmation}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Link
              to="/dashboard"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Update Password
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
