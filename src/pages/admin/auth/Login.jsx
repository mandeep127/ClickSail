import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import adminLogo from "../../../assets/admin-logo.png";
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import  { useState } from "react";

const Login = () => {
  const [authCred, setAuthCred] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email" && name === "password") {
      if (value.length != 0) {
        setAuthCred({ ...authCred, [name]: value });
      }else{
        setError({email:"Email is required",password:"Password is required"})
      }
    }
  };

  const handleSubmit = () => {
  
  };
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center h-100 ">
        <Row>
          <Col>
            <img
              src={adminLogo}
              className=""
              width="350"
              height="350"
              alt="admin-logo"
            />
          </Col>
          <Col>
            <h1 className="text-center mb-3">Admin Login</h1>
            <Form onSubmit = { handleSubmit } className="shadow-lg p-4">
              <p className="text-center text-secondary mb-3">
                Sign in to start your session
              </p>
              <Form.Group
                className="mb-3 d-flex align-items-center"
                controlId="formGroupEmail"
              >
                <Form.Control
                  className="rounded-start-pill p-2 me-2"
                  type="email"
                  placeholder="Email"
                  value={authCred.email}
                  onChange={handleChange}
                />
                <MdEmail size={45} />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex align-items-center"
                controlId="formGroupPassword"
              >
                <Form.Control
                  className="rounded-start-pill p-2 me-2"
                  type="password"
                  placeholder="Password"
                  value={authCred.password}
                  onChange={handleChange}
                />
                <TbPasswordUser size={45} />
              </Form.Group>
              <Link
                to="/admin/forgot-password"
                className="text-primary text-decoration-none"
              >
                Forgot Password?
              </Link>
              <Button className="border border-0 rounded-top w-100 bg-success mb-2 mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
