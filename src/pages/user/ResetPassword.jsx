import React from "react";
import { Container, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiLockPasswordFill } from "react-icons/ri";

const UserResetPassword = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center h-100 ">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Reset Password</h2>
            <Form className="shadow-lg p-4 bg-white border border-5 rounded-4">
              {/* <FormLabel className="text-dark p-2 fw-medium">E-Mail Address </FormLabel>
            <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupEmail">
              <Form.Control
                className="rounded-1 border border-2 me-2"
                type="email"
                placeholder="Enter Your E-mail"
              />
              <MdAttachEmail size={25} />      
        </Form.Group> */}

              <FormLabel className="text-dark p-2 fw-medium">
                Password{" "}
              </FormLabel>
              <Form.Group
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
              <FormLabel className="text-dark p-2 fw-medium">
                Confirm Password{" "}
              </FormLabel>
              <Form.Group
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
              <Button className="border border-0 rounded-top w-100 bg-success mb-2 mt-2">
                Send Password Reset Link
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserResetPassword;
