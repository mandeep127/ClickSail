import React from "react";
import { Container, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { MdAttachEmail } from "react-icons/md";
import { PiPassword } from "react-icons/pi";
import { PiPasswordFill } from "react-icons/pi";

const ResetPassword = () => {
  return (
    <>
    <Container className="d-flex justify-content-center align-items-center h-100 ">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Reset Password</h1>
          <Form className="shadow-lg p-4">
          <FormLabel className="text-dark p-2 fw-semibold">E-Mail Address </FormLabel>
            <Form.Group className="mb-2 d-flex align-items-center" controlId="formGroupEmail">
              <Form.Control
                className="rounded-start-pill p-2 me-2"
                type="email"
                placeholder="email..."
              />
              <MdAttachEmail size={45} />      
        </Form.Group>
        <FormLabel className="text-dark p-2 fw-semibold">New Password </FormLabel>
            <Form.Group className="mb-2 d-flex align-items-center" controlId="formGroupEmail">
              <Form.Control
                className="rounded-start-pill p-2 me-2"
                type="email"
                placeholder="enter new password..."
              />
              <PiPassword size={45} /> 
        </Form.Group>
        <FormLabel className="text-dark p-2 fw-semibold">Confirm Password </FormLabel>
            <Form.Group className="mb-2 d-flex align-items-center" controlId="formGroupEmail">
              <Form.Control
                className="rounded-start-pill p-2 me-2"
                type="email"
                placeholder="re-enter password..."
              />
              <PiPasswordFill size={45} />      
        </Form.Group>
            <Button className="border border-0 rounded-top w-100 bg-success mb-2 mt-2">
          Reset Password
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>
   </>
  )
}

export default ResetPassword
