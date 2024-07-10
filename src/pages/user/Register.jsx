import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import userLogo from "../../assets/user.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RiUserSearchFill } from "react-icons/ri";

const UserRegister = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Form className="shadow-lg p-4 bg-white border border-5 rounded-4">
          <div className="mb-3 text-center">
            <img
              src={userLogo}
              className="mb-3"
              width="40"
              height="40"
              alt="user logo"
            />
            <h4 className="mb-3">Register a new member</h4>
            <p>
              <a className="text-success text-decoration-none" href="/login">
                I already have a membership
              </a>
            </p>
          </div>
          <Row>
            <Form.Group
              as={Col}
              md="6"
              className="mb-3 d-flex align-items-center"
              controlId="formGroupName"
            >
              <Form.Control
                className="rounded-1 border border-2 me-2"
                type="text"
                placeholder="Full name"
              />
              <FaUser size={20} />
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              className="mb-3 d-flex align-items-center"
              controlId="formGroupUsername"
            >
              <Form.Control
                className="rounded-1 border border-2 me-2"
                type="text"
                placeholder="Username"
              />
              <RiUserSearchFill size={20} />
            </Form.Group>
          </Row>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formGroupEmail"
          >
            <Form.Control
              className="rounded-1 border border-2 me-2"
              type="email"
              placeholder="Email"
            />
            <MdEmail size={20} />
          </Form.Group>

          <Row>
            <Form.Group
              as={Col}
              md="6"
              className="mb-3 d-flex align-items-center"
              controlId="formGroupPassword"
            >
              <Form.Control
                className="rounded-1 border border-2 me-2"
                type="password"
                placeholder="Password"
              />
              <RiLockPasswordFill size={20} />
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              className="mb-3 d-flex align-items-center"
              controlId="formGroupConfirmPassword"
            >
              <Form.Control
                className="rounded-1 border border-2 me-2"
                type="password"
                placeholder="Confirm Password"
              />
              <RiLockPasswordFill size={20} />
            </Form.Group>
          </Row>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formGroupAddress"
          >
            <Form.Control
              className="rounded-1 border border-2 me-2"
              as="textarea"
              rows={3}
              placeholder="Address"
            />
            <FaLocationDot size={20} />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formGroupPincode"
          >
            <Form.Control
              className="rounded-1 border border-2 me-2"
              type="text"
              placeholder="Pincode"
            />
            <FaLocationCrosshairs size={20} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupRole">
            <Form.Label>
              <strong>Select Role:</strong>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check type="radio" name="role" label="Darji" />
              </Col>
              <Col>
                <Form.Check type="radio" name="role" label="Mapper" />
              </Col>
              <Col>
                <Form.Check type="radio" name="role" label="User" />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions."
            />
            <Button className=" rounded-2 bg-success px-4 ms-2">Submit</Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default UserRegister;
