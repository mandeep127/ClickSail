import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import userLogo from "../../assets/user.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const UserLogin = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center h-100 ">
        <Form className="shadow-lg p-5 bg-white border border-5 rounded-4">
          <div className="text-center">
            <img
              src={userLogo}
              className="mb-3"
              width="50"
              height="50"
              alt="user logo"
            />
            <h2 className="mb-3">Sign In</h2>
            <p className="mb-4 ">
              <a className="text-success text-decoration-none" href="/register">
                Register a New Member
              </a>
            </p>
          </div>
          <Form.Group
            className="mb-3 d-flex align-items-center "
            controlId="formGroupEmail"
          >
            <Form.Control
              className="rounded-1 border border-3 me-2"
              type="email"
              placeholder="Email & Username"
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
            />
            <RiLockPasswordFill size={25} />
          </Form.Group>
          <Form.Group className="mb-1 d-flex align-items-center justify-content-between">
            <Form.Check type="checkbox" label="Remember Me" />

            <Button className="rounded-2 bg-success px-4">Submit</Button>
          </Form.Group>
          <p className="mb-1">
            <a className="text-success" href="/forgot-password">
              Forgot Password?
            </a>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default UserLogin;
