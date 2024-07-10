import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiUserSearchFill } from "react-icons/ri";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";
import userLogo from "../../assets/user.png";
import { useDispatch } from "react-redux";
import { Register } from "../../store/authAPI/authApiSlice";
import { Navigate } from "react-router-dom";

const UserRegister = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    pincode: "",
    role_id: "5", // Default role
    agreed: true, // Checkbox for terms agreement
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "agreed" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(Register(formData));
      console.log("register", response, "code", response.code);
      if (response && response.code === 201) {
        Navigate("/login");
      } else {
        setError(
          "Failed to registration. Please re-fill & check email/username."
        );
      }
    } catch (error) {
      console.error(error);
      setError("Failed to registration. Please try again later.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Form
        className="shadow-lg p-4 bg-white border border-5 rounded-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 text-center">
          <img
            src={userLogo}
            className="mb-3"
            width="40"
            height="40"
            alt="user logo"
          />
          <h4 className="mb-3">Register a new member</h4>
          <p className="text-danger">{error}</p>
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
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
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
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
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <FaMapMarkerAlt size={20} />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex align-items-center"
          controlId="formGroupPincode"
        >
          <Form.Control
            className="rounded-1 border border-2 me-2"
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <TbLocationFilled size={20} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupRole">
          <Form.Label>
            <strong>Select Role:</strong>
          </Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                name="role"
                label="Darji"
                value="Darji"
                checked={formData.role_id === "3"}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                name="role"
                label="Mapper"
                value="Mapper"
                checked={formData.role_id === "4"}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                name="role"
                label="User"
                value="User"
                checked={formData.role_id === "5"}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center justify-content-between">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions."
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="rounded-2 bg-success px-4 ms-2"
            disabled={!formData.agreed}
          >
            {formData.agreed ? "Submit" : "Agree to Submit"}
          </Button>
        </Form.Group>

        {/* {registerError && (
          <p className="text-danger">{registerError.message}</p>
        )} */}
      </Form>
    </Container>
  );
};

export default UserRegister;
