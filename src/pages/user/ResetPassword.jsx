import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { RiLockPasswordFill } from "react-icons/ri";
import { ResetPassword } from "../../store/authAPI/authApiSlice";
import { toast } from "react-toastify";

const UserResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Get the dispatch function
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log("Password", token);

    try {
      // Dispatch the ResetPassword action
      const response = await dispatch(
        ResetPassword({
          password,
          password_confirmation: confirmPassword,
          token: token,
        })
      );

      console.log("Password reset successful", response.payload.code);
      if (response.payload.code === 200) {
        toast.success("Password reset successful");
        navigate("/login");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error resetting password:", error);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center h-100 ">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Reset Password</h2>
            <Form
              onSubmit={handleResetPassword}
              className="shadow-lg p-4 bg-white border border-5 rounded-4"
            >
              <FormLabel className="text-dark p-2 fw-medium">
                Password
              </FormLabel>
              <Form.Group
                className="mb-3 d-flex align-items-center"
                controlId="formGroupPassword"
              >
                <Form.Control
                  className="rounded-1 border border-2 me-2"
                  type="password"
                  placeholder="Enter New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLockPasswordFill size={20} />
              </Form.Group>
              <FormLabel className="text-dark p-2 fw-medium">
                Confirm Password
              </FormLabel>
              <Form.Group
                className="mb-3 d-flex align-items-center"
                controlId="formGroupConfirmPassword"
              >
                <Form.Control
                  className="rounded-1 border border-2 me-2"
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <RiLockPasswordFill size={20} />
              </Form.Group>
              <Button
                type="submit"
                className="border border-0 rounded-top w-100 bg-success mb-2 mt-2"
              >
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserResetPassword;
