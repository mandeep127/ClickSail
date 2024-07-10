import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { HiUsers } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from "react-icons/fa";
import Table from "react-bootstrap/Table";

import {
  userList,
  deleteUser,
  userStatus,
} from "../../../adminStore/userApi/userApiSlice"; 

import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userList());
  }, []);

  const handleStatusUser = async(userId) => {
   await dispatch(userStatus(userId));
   dispatch(userList());

  };

  const handleDeleteUser = async(userId) => {
    await dispatch(deleteUser(userId));
    dispatch(userList());
  };

  return (
    <Container fluid className="d-flex flex-column">
      <Row>
        <Col>
          <h1 className="p-2">
            <HiUsers /> Users List
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-between align-items-center">
        {/* <Col>
          <h6>Select Role:</h6>
          <Dropdown className="d-inline mx-2" autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
              Roles
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col> */}
        <Col className="d-flex justify-content-end">
          <Button
            onClick={() => {
              navigate("/admin/user/add");
            }}
            className="bg-success border-0 d-flex justify-content-center"
          >
            <FaUserPlus className="mr-1 mt-1 " /> Add User
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover className="px-2 py-1 mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.users?.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button
                        onClick={() => handleStatusUser(user.id)}
                        className={`btn ${
                          user.status === "1"
                            ? "btn-primary btn-success btn-block":"btn-primary btn-danger btn-block"
                           
                        }`}
                      >
                        <b>
                          {user.status === "1" ? <FaUnlock /> : <FaLock />}
                        </b>
                      </Button>
                  </td>
                  {/* <td>
                      <Button
                        onClick={() => handleStatusSubCategory(subcategory.id)}
                        className={`btn ${
                          subcategory.status === "1"
                            ? "btn-primary btn-success btn-block"
                            : "btn-primary btn-danger btn-block"
                        }`}
                      >
                        <b>
                          {subcategory.status === "1" ? (
                            <FaUnlock />
                          ) : (
                            <FaLock />
                          )}
                        </b>
                      </Button>
                    </td> */}
                  <td className="display-flex flex-column align-items-center">
                    <Link to={`/admin/user/edit/${user.id}`} className="btn me-2 btn-info">
                      <FaEdit />
                    </Link>
                    <Button
                      onClick={() => handleDeleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default List;
