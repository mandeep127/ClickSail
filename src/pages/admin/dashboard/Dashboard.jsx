import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaUserPlus, FaArrowCircleRight } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { GrProductHunt } from "react-icons/gr";
import { GiJerusalemCross } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";
import Table from "react-bootstrap/Table";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import Pagination from './../../../components/admin/Pagination'; 
const Dashboard = () => {
  const dashboardTiles = [
    {
      name: "Users",
      value: "2344",
      icon: <FaUserPlus size={60} />,
      link: "admin/user/list",
      color: "#490F0F",
      bgcolor: "#FB8B24",
      tilebgcolor: "#CE7018",
    },
    {
      name: "Categories",
      value: "23",
      icon: <BiSolidCategoryAlt size={60} />,
      link: "",
      color: "white",
      bgcolor: "#D90368",
      tilebgcolor: "#C1045C",
    },
    {
      name: "Product",
      value: "243",
      icon: <GrProductHunt size={60} />,
      link: "",
      color: "white",
      bgcolor: "#04A777",
      tilebgcolor: "#039569",
    },
    {
      name: "Sales",
      value: "202",
      icon: <GiJerusalemCross size={60} />,
      link: "",
      color: "black",
      bgcolor: "#FFC6D9",
      tilebgcolor: "#FF9FBF",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [count, setCount] = useState(1); // Initialize count variable for numbering users in the table

  // Dummy data for table (replace with actual data)
  const users = [
    {
      id: 1,
      username: "Mark",
      email: "mark@example.com",
      createdAt: "2023-01-01",
    },
    {
      id: 2,
      username: "John",
      email: "john@example.com",
      createdAt: "2023-02-15",
    },
    {
      id: 3,
      username: "Jane",
      email: "jane@example.com",
      createdAt: "2023-03-20",
    },
    {
      id: 4,
      username: "Anna",
      email: "anna@example.com",
      createdAt: "2023-04-10",
    },
    {
      id: 5,
      username: "Peter",
      email: "peter@example.com",
      createdAt: "2023-05-05",
    },
    {
      id: 6,
      username: "Mike",
      email: "mike@example.com",
      createdAt: "2023-06-18",
    },
    {
      id: 7,
      username: "Emily",
      email: "emily@example.com",
      createdAt: "2023-07-22",
    },
    {
      id: 8,
      username: "Sarah",
      email: "sarah@example.com",
      createdAt: "2023-08-09",
    },
    {
      id: 9,
      username: "David",
      email: "david@example.com",
      createdAt: "2023-09-14",
    },
    {
      id: 10,
      username: "Chris",
      email: "chris@example.com",
      createdAt: "2023-10-30",
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
      <Container fluid className="d-flex flex-column ">
        <Row>
          <Col>
            <h1 className="p-2">Dashboard</h1>
            <h6 className="p-1 mb-2 text-end">Home</h6>
          </Col>
        </Row>
        <Row>
          {dashboardTiles.map((dashboardTile) => (
            <Col xs lg="3">
              <div className="d-flex flex-column border-0 custom-container rounded">
                <div
                  className="dashboardTileRow d-flex flex-row border-0 justify-content-between rounded-top p-2"
                  style={{
                    backgroundColor: dashboardTile.bgcolor,
                    color: dashboardTile.color,
                  }}
                >
                  <div className="d-flex flex-column border-0 custom-sub-container rounded p-2">
                    <div className="h3">{dashboardTile.value}</div>
                    <div className="h5">{dashboardTile.name}</div>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center text-end p-2"
                    aria-
                  >
                    {dashboardTile.icon}
                  </div>
                </div>
                <div
                  className="text-center p-2 "
                  style={{
                    backgroundColor: dashboardTile.tilebgcolor,
                    color: dashboardTile.color,
                  }}
                >
                  More info <FaArrowCircleRight />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <h2 className="px-2 py-1 mt-3">Users </h2>
            <h6 className="px-2 py-1">
              <MdCalendarMonth />
              current month
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered rounded hover className="px-2 py-1 mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>E-mail</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
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

export default Dashboard;
