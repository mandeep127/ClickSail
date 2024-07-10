import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import userLogo from "../../assets/user.png";
import { loginUser } from "../../store/authAPI/authApiServices";
import { Navigate } from "react-router-dom";

const UserLogin = () => {
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(username, password);

      if (response && response.code === 200) {
        localStorage.setItem("token", true);
        Navigate("/");
      } else {
        setError(response.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Failed to login. Please try again later.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Form
        className="shadow-lg p-5 bg-white border border-5 rounded-4"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <img
            src={userLogo}
            className="mb-3"
            width="50"
            height="50"
            alt="user logo"
          />
          <h2 className="mb-3">Sign In</h2>
          <p className="text-danger">{error}</p>
        </div>
        <Form.Group
          className="mb-3 d-flex align-items-center"
          controlId="formGroupLogin"
        >
          <Form.Control
            className="rounded-1 border border-3 me-2"
            type="text"
            placeholder="Email or Username"
            value={username}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <MdEmail size={25} />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex align-items-center"
          controlId="formGroupPassword"
        >
          <Form.Control
            className="rounded-1 border border-3 me-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RiLockPasswordFill size={25} />
        </Form.Group>
        <Form.Group className="mb-1 d-flex align-items-center justify-content-between">
          <Form.Check type="checkbox" label="Remember Me" />
          <Button type="submit" className="rounded-2 bg-success px-4">
            Submit
          </Button>
        </Form.Group>
        <p className="mb-1">
          <a className="text-success" href="/forgot-password">
            Forgot Password?
          </a>
        </p>
      </Form>
    </Container>
  );
};

export default UserLogin;
