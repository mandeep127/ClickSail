import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { HiUsers } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import ConfirmationDialog from '../../../components/admin/confirmation'; 

import {
  userList,
  deleteUser,
  userStatus,
} from "../../../adminStore/userApi/userApiSlice";

import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const { userLists, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch(userList());
    }, 500);
  }, []);

  const handleStatusUser = async (userId) => {
    await dispatch(userStatus(userId));
    dispatch(userList());
  };

  //handle delete
  const handleDeleteSubCategory = async (userId) => {
    await dispatch(deleteUser(userId));
    dispatch(userList());

  };

  const openDeleteDialog = (userId) => {
    setUserIdToDelete(userId);
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const confirmDeleteSubCategory = () => {
    if (userIdToDelete) {
      handleDeleteSubCategory(userIdToDelete);
      setShowDeleteDialog(false);
    }
  };


  return (
    <>
    <Container fluid className="d-flex flex-column">
      <Row>
        <Col>
          <h1 className="p-2">
            <HiUsers /> Users List
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-between align-items-center">
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
              {userLists?.users?.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button
                      onClick={() => handleStatusUser(user.id)}
                      className={`btn ${
                        user.status === "1"
                        ? "btn-primary btn-success btn-block"
                        : "btn-primary btn-danger btn-block"
                        }`}
                        >
                      <b>{user.status === "1" ? <FaUnlock /> : <FaLock />}</b>
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
                    <Link
                      to={`/admin/user/edit/${user.id}`}
                      className="btn me-2 btn-info"
                      >
                      <FaEdit />
                    </Link>
                    <Button
                     onClick={() => openDeleteDialog(user.id)}
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
       <ConfirmationDialog
       show={showDeleteDialog}
       onClose={closeDeleteDialog}
       onConfirm={confirmDeleteSubCategory}
       message="Are you sure you want to delete this user?"
     />
     </>
  );
};

export default List;
