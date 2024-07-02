import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { RiUserFill, RiLockPasswordFill, RiMailFill } from 'react-icons/ri'; // Import icons from react-icons/ri
import { SiNamecheap } from 'react-icons/si';
import { Col,  Row } from "react-bootstrap";
import { HiUsers } from "react-icons/hi";
import { LiaCriticalRole } from "react-icons/lia";
const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user', // Default role
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., validation, API call)
    console.log('Form submitted:', formData);
    // Reset form fields after submission (optional)
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'user', // Reset to default role
    });
  };

  return (
    <Container className="p-3">
       <Row>
          <Col>
            <h1 className="p-2">
              <HiUsers /> Add User
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
      <Card className="p-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center mb-2">
              <RiUserFill size={40} className="me-2" />
              <Form.Group className="mb-3" controlId="formName" style={{ flex: 1 }}>
                <Form.Label>
                  <b>Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>
            </div>

            <div className="d-flex align-items-center mb-2">
              <SiNamecheap size={40} className="me-2" />
              <Form.Group className="mb-3" controlId="formName" style={{ flex: 1 }}>
                <Form.Label>
                  <b>Username</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={formData.usernamename}
                  onChange={handleInputChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>
            </div>

            <div className="d-flex align-items-center mb-2">
              <RiMailFill size={40} className="me-2" />
              <Form.Group className="mb-3" controlId="formEmail" style={{ flex: 1 }}>
                <Form.Label>
                  <b>Email address</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>
            </div>

            <div className="d-flex align-items-center mb-2">
              <RiLockPasswordFill size={40} className="me-2" />
              <Form.Group className="mb-3" controlId="formPassword" style={{ flex: 1 }}>
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>
            </div>

            <div className="d-flex align-items-center mb-2">
              <RiLockPasswordFill size={40} className="me-2" />
              <Form.Group className="mb-3" controlId="formConfirmPassword" style={{ flex: 1 }}>
                <Form.Label>
                  <b>Confirm Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>
            </div>

            <div className="d-flex align-items-center mb-2">
              <LiaCriticalRole size={40} className="me-2" />
              <Form.Group className="mb-3" controlId="formRole" style={{ flex: 1 }}>
                <Form.Label>
                  <b>Select Role</b>
                </Form.Label>
                <Form.Select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="rounded-pill"
                  aria-label="Select Role"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                </Form.Select>
              </Form.Group>
            </div>

            <Button variant="primary" type="submit" className="rounded-pill w-100">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
