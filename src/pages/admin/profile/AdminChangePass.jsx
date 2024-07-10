import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { GrUserAdmin } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import {useNavigate} from 'react-router-dom';

const AdminChangePass = () => {
    const navigate = useNavigate()

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password don't match.");
      return;
    }
    // Logic for password change
    console.log("Form submitted:", {
      oldPassword,
      newPassword,
      confirmPassword,
    });
    // Add logic for password change here
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="wrapper">
      <Row>
        <Col>
          <h1 className="p-2">
            <GrUserAdmin /> Admin Profile
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="d-flex flex-column align-items-center border-top border-black border-4 admin-profile rounded mt-3 px-5 py-4">
            <div className="border border-secondary border-2 rounded-circle profile-icon mb-3">
              <RiAdminFill size={70} className="p-1" />
            </div>
            <div className="text-center">
              <h4>Ram</h4>
              <p>Admin</p>
            </div>
            <div className="px-1 py-1">
              <hr className="my-1" />
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Email:</strong>
                </p>
                <p className="ms-2 text-primary">admin@mail.com</p>
              </div>
              <hr className="my-1" />
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Joining:</strong>
                </p>
                <p className="ms-2 text-primary">11-12-23</p>
              </div>
              <hr className="my-1" />
              <div className="mb-1 mt-2">
                <Button
                  variant="dark"
                  type="submit"
                  className="rounded-pill w-100"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={9}>
          <Card className="mt-4">
            <Card.Header
              className="p-2 display-flex form-inline"
              style={{ backgroundColor: "#EFEFDF" }}
            >
              <h3 style={{ color: "#080705" }}>Change Password</h3>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "#F4F4ED" }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="oldPassword" className="mb-3">
                  <Form.Label column md={3}>
                    <b>Old Password</b>
                  </Form.Label>
                  <Col md={9}>
                    <Form.Control
                      type="password"
                      placeholder="Enter old password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="newPassword" className="mb-3">
                  <Form.Label column md={3}>
                    <b>New Password</b>
                  </Form.Label>
                  <Col md={9}>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="confirmPassword"
                  className="mb-3"
                >
                  <Form.Label column md={3}>
                    <b>Confirm Password</b>
                  </Form.Label>
                  <Col md={9}>
                    <Form.Control
                      type="password"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Col md={{ span: 9, offset: 3 }}>
                    <Button variant="danger" type="submit">
                      Save Changes
                    </Button>
                    <Button
                      variant="info"
                      className="ms-2"
                      onClick={() => {
                        navigate("/admin/profile");
                      }}
                    >
                      Change Personal Info
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminChangePass;
