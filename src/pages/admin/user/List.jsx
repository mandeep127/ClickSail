import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { HiUsers } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import Pagination from './../../../components/admin/Pagination'; 

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [count, setCount] = useState(1); // Initialize count variable for numbering users in the table

  // Dummy data for table (replace with actual data)
  const users = [
    {
      username: "Mark",
      email: "mark@example.com",
      status: "0",
    },
    {
      username: "John",
      email: "john@example.com",
      status: "1",
    },
    {
      username: "Jane",
      email: "jane@example.com",
      status: "0",
    },
    {
      username: "Anna",
      email: "anna@example.com",
      status: "1",
    },
    {
      username: "Peter",
      email: "peter@example.com",
      status: "0",
    },
    {
      username: "Mike",
      email: "mike@example.com",
      status: "1",
    },
    {
      username: "Emily",
      email: "emily@example.com",
      status: "1",
    },
    {
      username: "Sarah",
      email: "sarah@example.com",
      status: "0",
    },
    {
      username: "David",
      email: "david@example.com",
      status: "1",
    },
    {
      username: "Chris",
      email: "chris@example.com",
      status: "0",
    },
  ];

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate starting count for current page
  const startingCount = indexOfFirstUser + 1;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCount((pageNumber - 1) * usersPerPage + 1);
  };

  // Previous page button
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCount(count - usersPerPage);
    }
  };

  // Next page button
  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
      setCount(count + usersPerPage);
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
          <Col>
            <h6>Select Role:</h6>
            <Dropdown className="d-inline mx-2" autoClose="outside">
              <Dropdown.Toggle id="dropdown-autoclose-outside">
                Roles
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="bg-success border-0 d-flex justify-content-center">
              <FaUserPlus className="mr-1 mt-1" /> Add User
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table striped bordered rounded hover className="px-2 py-1 mt-3">
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
                {currentUsers.map((user, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{count + index}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button
                        href="#"
                        className={`btn ${
                          user.status === "1"
                            ? "btn-success btn-block"
                            : "btn-danger btn-block"
                        }`}
                      >
                        <b>{user.status === "1" ? <FaUnlock /> : <FaLock />}</b>
                      </Button>
                    </td>
                    <td className="display-flex flex-column align-items-center">
                      <Link to="#" className="btn me-2 btn-info">
                        <b>
                          <FaEdit />
                        </b>
                      </Link>
                      <Link to="#" className="btn btn-danger">
                        <b>
                          <FaTrash />
                        </b>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col>
          <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(users.length / usersPerPage)}
              prevPage={prevPage}
              nextPage={nextPage}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default List;
