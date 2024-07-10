import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MdAttachEmail } from "react-icons/md";
import { ForgotPassword } from "../../store/authAPI/authApiSlice";

const UserForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ForgotPassword({ email }));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Forgot Password</h2>
          <Form
            className="shadow-lg p-4 bg-white border border-5 rounded-4"
            onSubmit={handleSubmit}
          >
            <FormLabel className="text-dark p-2 fw-medium">
              E-Mail Address
            </FormLabel>
            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId="formGroupEmail"
            >
              <Form.Control
                className="rounded-1 border border-2 me-2"
                type="email"
                placeholder="Enter Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MdAttachEmail size={25} />
            </Form.Group>
            <Button
              type="submit"
              className="border border-0 rounded-top w-100 bg-success mb-2 mt-2"
            >
              Click to ForgotPassword
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForgotPassword;
