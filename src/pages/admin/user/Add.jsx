import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { RiUserFill, RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { SiNamecheap } from 'react-icons/si';
import { Col, Row } from 'react-bootstrap';
import { HiUsers } from 'react-icons/hi';
import { LiaCriticalRole } from 'react-icons/lia';
import { useDispatch , useSelector} from 'react-redux';
import { userList, addUser } from '../../../adminStore/userApi/userApiSlice';
import { Link, useNavigate } from 'react-router-dom';

const dummyRoles = [
  { id: 5, name: 'user' },
  { id: 1, name: 'admin' },
];

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userList());
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    dispatch(addUser(formData));

    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'user',
    });
    
    navigate("/admin/user/list");

  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1 className="p-2">
            <HiUsers /> Add User
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center mb-2">
                  <RiUserFill size={40} className="me-2" />
                  <Form.Group className="mb-3" controlId="formName" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Name</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <SiNamecheap size={40} className="me-2" />
                  <Form.Group className="mb-3" controlId="formUsername" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Username</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <RiMailFill size={40} className="me-2" />
                  <Form.Group className="mb-3" controlId="formEmail" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Email address</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <RiLockPasswordFill size={40} className="me-2" />
                  <Form.Group className="mb-3" controlId="formPassword" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Password</b>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <RiLockPasswordFill size={40} className="me-2" />
                  <Form.Group className="mb-3" controlId="formConfirmPassword" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Confirm Password</b>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <LiaCriticalRole size={40} className="me-2" />
                  <Form.Group className="mb-3" controlId="formRole" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Role</b>
                    </Form.Label>
                    <Form.Select
                      name="role_id"
                      value={formData.role_id}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      aria-label="Select Category"
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

                <Button variant="primary" type="submit" className="rounded-pill w-100">
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

export default AddUser;
