import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contact } from "../../store/homeAPI/homeApiSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const successMessage = useSelector(
    (state) => state.categories.authData.message
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    // Reset previous errors
    setErrors([]);

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrors(["All fields are required"]);
      return;
    }

    // Dispatch contact action
    dispatch(contact(formData))
      .then(() => {
        // Clear form on success
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        // Handle errors (you might want to display these in UI)
        console.error("Error submitting form:", error);
      });
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center pt-4">
        <Col md={6}>
          <h3 className="text-center">Contact Us</h3>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
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

            <Button
              className="rounded-pill btn-success bt-success mt-3 px-5 py-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
