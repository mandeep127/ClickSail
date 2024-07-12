import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import userLogo from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../../store/authAPI/authApiSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await dispatch(Login({ username, password }));

      if (response && response.payload.success.token) {
        console.log("Token:", response.payload);
        localStorage.setItem("token", response.payload.success.token);
        localStorage.setItem("name", response.payload.data.name);
        toast.success("logged in successfully");
        navigate("/");
      } else {
        setError(response.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("logged in Failed to login. Please try again later.");
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
          <p>
            <a className="text-success text-decoration-none" href="/register">
              Register Now
            </a>
          </p>
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
            onChange={(e) => setUsername(e.target.value)}
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
