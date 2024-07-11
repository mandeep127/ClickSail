import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthLogin } from "../../../adminStore/authApi/authApiSlice";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { MdEmail, MdLock } from "react-icons/md";
import adminLogo from "../../../assets/admin-logo.png";
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authCred, setAuthCred] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError({ ...error, [name]: "" });
    setAuthCred({ ...authCred, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (authCred.email && authCred.password) {
        const response = await dispatch(AuthLogin(authCred));
        const token = response.payload.data.data.token;
toast.success('logged in successfully')
        // Save token to localStorage
        localStorage.setItem("token", token);

        // Navigate to dashboard

        navigate("/admin/dashboard");
      } else {
        setError({
          email: authCred.email ? "" : "Email is required",
          password: authCred.password ? "" : "Password is required",
        });
      }
    } catch (error) {
      // Handle authentication errors
      console.error("Authentication error:", error);
      setError({ email: "Invalid credentials", password: "Invalid credentials" });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Row>
        <Col>
          <img src={adminLogo} width="350" height="350" alt="admin-logo" />
        </Col>
        <Col>
          <h1 className="text-center mb-3">Admin Login</h1>
          <Form onSubmit={handleSubmit} className="shadow-lg p-4">
            <p className="text-center text-secondary mb-3">
              Sign in to start your session
            </p>
            <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupEmail">
              <Form.Control
                className="rounded-start-pill p-2 me-2"
                type="email"
                name="email"
                placeholder="Email"
                value={authCred.email}
                onChange={handleChange}
              />
              <MdEmail size={45} />
            </Form.Group>

            {error.email && <Form.Text className="text-danger">{error.email}</Form.Text>}

            <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupPassword">
              <Form.Control
                className="rounded-start-pill p-2 me-2"
                type="password"
                name="password"
                placeholder="Password"
                value={authCred.password}
                onChange={handleChange}
              />
              <MdLock size={45} />
            </Form.Group>

            <p>{error.password && <Form.Text className="text-danger">{error.password}</Form.Text>}</p>

            <Link to="/admin/forgot-password" className="text-primary text-decoration-none">
              Forgot Password?
            </Link>

            <Button type="submit" className="border border-0 rounded-top w-100 bg-success mb-2 mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
