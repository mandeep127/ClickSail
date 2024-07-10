import React, { useState } from "react";
import { Container, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { MdAttachEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../adminStore/authApi/authApiSlice"
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  email : ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  
    dispatch(forgotPassword(formData));

    setFormData({
     email: ""
    });
    navigate("admin/reset-password/{token}");


  };

  return (
   <>
    <Container className="d-flex justify-content-center align-items-center h-100 ">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Forgot Password</h1>
          <Form  onSubmit={handleSubmit} className="shadow-lg p-4">
          <FormLabel className="text-dark p-2 fw-medium">E-Mail Address </FormLabel>
            <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupEmail">
              <Form.Control
                className="rounded-start-pill p-2 me-2"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-label="Email"
                placeholder = "enter email"
              />
              <MdAttachEmail size={45} />      
        </Form.Group>
            <Button className="border border-0 rounded-top w-100 bg-success mb-2 mt-2" type="submit" >
            Send Password Reset Link
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>
   </>
  )
}

export default ForgotPassword
