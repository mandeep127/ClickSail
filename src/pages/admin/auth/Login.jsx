import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../../adminStore/authApi/authApiSlice";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { MdEmail, MdLock } from "react-icons/md";
import adminLogo from "../../../assets/admin-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authCred, setAuthCred] = useState({ email: "", password: "" });

  const [error, setError] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAuthCred({ ...authCred, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      
      formData.append("email", authCred.email);
      formData.append("password", authCred.password);

      await dispatch(AuthLogin(formData)).then((response) => {
     
        if (response.payload.code === 200) {
        
          localStorage.setItem("token", true);
          navigate("/admin/dashboard");
        }
      });
    } catch (error) {
      console.error("Login failed:", error);
      setError({ ...error });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
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
          <Form onSubmit={handleSubmit} className="shadow-lg p-4">
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
                name="email"
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
                name="password"
                value={authCred.password}
                onChange={handleChange}
              />
              <MdLock size={45} />
            </Form.Group>
            <Link
              to="/admin/forgot-password"
              className="text-primary text-decoration-none"
            >
              Forgot Password?
            </Link>
            <Button
              type="submit"
              className="border border-0 rounded-top w-100 bg-success mb-2 mt-3"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
