import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { IoListCircleSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Pagination from "./../../../components/admin/Pagination"; // Import your Pagination component
import {
  IoMdTime,
  IoMdCheckmarkCircleOutline,
  IoMdRefresh,
  IoMdAirplane,
  IoMdClose,
} from "react-icons/io";
import {
  FaShippingFast,
  FaTimes,
  FaBan,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const [count, setCount] = useState(1); // Initialize count variable for numbering users in the table

  // Dummy data for table (replace with actual data)
  const transactions = [
    {
      id: 1,
      orderId: "1",
      date: "22/june/24",
      amount: "4322",
      status: "0",
    },
    {
      id: 2,
      orderId: "1",
      date: "22/june/24",
      amount: "4322",
      status: "0",
    },
    {
      id: 3,
      orderId: "1",
      date: "22/june/24",
      amount: "4322",
      status: "0",
    },
    {
      id: 4,
      orderId: "4",
      date: "22/june/24",
      amount: "4382",
      status: "1",
    },
    {
      id: 1,
      orderId: "5",
      date: "22/june/24",
      amount: "442",
      status: "0",
    },
    {
      id: 6,
      orderId: "15",
      date: "27/june/24",
      amount: "452",
      status: "0",
    },
  ];

  // Pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentOrders = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Calculate starting count for current page
  const startingCount = indexOfFirstTransaction + 1;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCount((pageNumber - 1) * transactionsPerPage + 1);
  };

  // Previous page button
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCount(count - transactionsPerPage);
    }
  };

  // Next page button
  const nextPage = () => {
    if (currentPage < Math.ceil(transactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
      setCount(count + transactionsPerPage);
    }
  };

  // Function to get status icon and text based on status code
  const getStatusComponents = (status) => {
    let statusIcon, statusText;

    switch (status) {
      case "0":
        statusIcon = <IoMdTime/>;
        statusText = "Pending";
        break;
      case "1":
        statusIcon = <IoMdCheckmarkCircleOutline />;
        statusText = "Completed";
        break;
      default:
        statusIcon = <IoMdClose />;
        statusText = "unauthorized";
        break;
    }

    return { statusIcon, statusText };
  };

  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Row>
          <Col>
            <h1 className="p-2">
              <IoListCircleSharp /> Transactions
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center">
          <Col className="d-flex justify-content-end">
            <Button className="bg-danger border-0 d-flex justify-content-center">
              <IoMdArrowRoundBack className="me-1 sm-1" />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table striped bordered rounded hover className="px-2 py-1 mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Transaction ID</th>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((transaction, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{count + index}</td>
                    <td>{transaction.id}</td>
                    <td>{transaction.orderId}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>

                    <td> 
                      {getStatusComponents(transaction.status).statusIcon}{' '}
                      {getStatusComponents(transaction.status).statusText}
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
              totalPages={Math.ceil(transactions.length / transactionsPerPage)}
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

export default Transactions;
