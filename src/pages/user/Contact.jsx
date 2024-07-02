import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { BsFillExclamationTriangleFill } from "react-icons/bs"; // Example icon from react-icons
import { Link } from "react-router-dom";

const ContactForm = () => {
  // Dummy data for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    // Simulate form validation (replace with actual validation logic)
    const newErrors = [];
    if (!formData.name || !formData.email || !formData.message) {
      newErrors.push("All fields are required");
    }
    setErrors(newErrors);

    // Simulate form submission and API call
    if (newErrors.length === 0) {
      // Simulate success message
      setSuccessMessage("Message sent successfully");
      // Clear form fields (optional)
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center pt-4">
        <Col md={6}>
          <h3 className="text-center">Contact Us</h3>
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
          <Form id="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
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

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Link
              to="/success"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
