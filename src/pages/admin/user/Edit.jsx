import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { RiUserFill, RiMailFill } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
import { Col, Row } from "react-bootstrap";
import { HiUsers } from "react-icons/hi";
import { LiaCriticalRole } from "react-icons/lia";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userList,
  userEditGet,
  userEditPost,
} from "../../../adminStore/userApi/userApiSlice";
import { Link, useNavigate } from 'react-router-dom';

const dummyRoles = [
  { id: 5, name: "user" },
  { id: 1, name: "admin" },
];

const EditUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      dispatch(userEditGet(id));
    }
  }, [dispatch, id]);


  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role_id: "",
  });

  useEffect(() => {
    setFormData({
      name: user?.user?.name,
      username: user?.user?.username,
      email: user?.user?.email,
      role_id: "",
    });
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userEditPost({ id, data: formData }));
    navigate("/admin/user/list");
  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1 className="p-2">
            <HiUsers /> Edit User
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center mb-3">
                  <RiUserFill size={45} className="me-2" />
                  <Form.Group controlId="formName" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Name</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-body rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <SiNamecheap size={45} className="me-2" />
                  <Form.Group controlId="formUsername" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Username</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="bg-body rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <RiMailFill size={45} className="me-2" />
                  <Form.Group controlId="formEmail" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Email address</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-body rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <LiaCriticalRole size={45} className="me-2" />
                  <Form.Group controlId="formRole" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Role</b>
                    </Form.Label>
                    <Form.Select
                      name="role_id"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="bg-body rounded-pill"
                      aria-label="Select Role"
                    >
                      <option value="">Select Role</option>
                      {dummyRoles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="rounded-pill w-100"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUser;
