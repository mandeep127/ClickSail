import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { IoListCircleSharp } from 'react-icons/io5';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Pagination from './../../../components/admin/Pagination'; // Import your Pagination component
import { IoMdTime, IoMdCheckmarkCircleOutline, IoMdRefresh, IoMdAirplane, IoMdClose } from 'react-icons/io';
import { FaShippingFast, FaTimes, FaBan, FaCheck, FaSpinner } from 'react-icons/fa';

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);
  const [count, setCount] = useState(1); // Initialize count variable for numbering users in the table

  // Dummy data for table (replace with actual data)
  const orders = [
    {
      id: 1,
      name: 'XYZ / XYZ@mail.com',
      product: 'product1',
      status: '0',
      orderDate: '22/june/24',
    },
    {
      id: 2,
      name: 'XYZ / XYZ@mail.com',
      product: 'product1',
      status: '1',
      orderDate: '22/june/24',
    },
    {
      id: 3,
      name: 'XYZ / XYZ@mail.com',
      product: 'product1',
      status: '2',
      orderDate: '22/june/24',
    },
    {
      id: 4,
      name: 'XYZ / XYZ@mail.com',
      product: 'product1',
      status: '3',
      orderDate: '22/june/24',
    },
    {
      id: 5,
      name: 'XYZ / XYZ@mail.com',
      product: 'product1',
      status: '0',
      orderDate: '22/june/24',
    },
    {
      id: 6,
      name: 'XYZ / XYZ@mail.com',
      product: 'product1',
      status: '1',
      orderDate: '22/june/24',
    },
  ];

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Calculate starting count for current page
  const startingCount = indexOfFirstOrder + 1;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCount((pageNumber - 1) * ordersPerPage + 1);
  };

  // Previous page button
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCount(count - ordersPerPage);
    }
  };

  // Next page button
  const nextPage = () => {
    if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
      setCurrentPage(currentPage + 1);
      setCount(count + ordersPerPage);
    }
  };

  // Function to get status icon and text based on status code
  const getStatusComponents = (status) => {
    let statusIcon, statusText;

    switch (status) {
      case '0':
        statusIcon = <IoMdTime />;
        statusText = 'Pending';
        break;
      case '1':
        statusIcon = <IoMdCheckmarkCircleOutline />;
        statusText = 'Completed';
        break;
      case '2':
        statusIcon = <IoMdRefresh />;
        statusText = 'Processing';
        break;
      case '3':
        statusIcon = <IoMdAirplane />;
        statusText = 'Shipped';
        break;
      default:
        statusIcon = <IoMdClose />;
        statusText = 'Cancelled';
        break;
    }

    return { statusIcon, statusText };
  };

  // Function to render status badge based on status code
  const renderStatusBadge = (order) => {
    let badgeVariant, iconComponent;

    switch (order.status) {
      case '1':
        badgeVariant = 'success';
        iconComponent = <FaShippingFast />;
        break;
      case '4':
        badgeVariant = 'danger';
        iconComponent = <FaTimes />;
        break;
      case '2':
        return (
          <div style={{ display: 'flex' }}>
            <Link
              to={`changeOrderStatus/shipping/${order.id}`}
              className="btn btn-primary btn-warning me-2"
            >
              <FaShippingFast />
            </Link>
            <Link
              to={`changeOrderStatus/Rejected/${order.id}`}
              className="btn btn-primary btn-danger me-2"
            >
              <FaBan />
            </Link>
          </div>
        );
      case '3':
        return (
          <div style={{ display: 'flex' }}>
            <Link
              to={`changeOrderStatus/Accepted/${order.id}`}
              className="btn btn-primary btn-success me-2 "
            >
              <FaCheck />
            </Link>
            <Link
              to={`changeOrderStatus/Rejected/${order.id}`}
              className="btn btn-primary btn-danger me-2"
            >
              <FaBan />
            </Link>
          </div>
        );
      default:
        return (
          <div style={{ display: 'flex' }}>
            <Link
              to={`changeOrderStatus/Processing/${order.id}`}
              className="btn btn-primary btn-info me-2"
            >
              <FaSpinner />
            </Link>
            <Link
              to={`changeOrderStatus/Rejected/${order.id}`}
              className="btn btn-primary btn-danger me-2"
            >
              <FaBan />
            </Link>
          </div>
        );
    }

    return (
      <Badge bg={badgeVariant} className="me-2">
        {iconComponent}
      </Badge>
    );
  };

  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Row>
          <Col>
            <h1 className="p-2">
              <IoListCircleSharp /> Order List
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
                  <th>Customer / E-MAil</th>
                  <th>Product</th>
                  <th>Order Status</th>
                  <th>Order Date</th>
                  <th>Action</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'even-row' : 'odd-row'}
                  >
                    <td>{count + index}</td>
                    <td>{order.name}</td>
                    <td>{order.product}</td>
                    <td>
                      {getStatusComponents(order.status).statusIcon}{' '}
                      {getStatusComponents(order.status).statusText}
                    </td>
                    <td>{order.orderDate}</td>
                    <td className="display-flex flex-column align-items-center">
                      {renderStatusBadge(order)}{' '}
                    </td>
                    <td>
                      <Link to="#" className="text-black">
                        <FaEye />
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
              totalPages={Math.ceil(orders.length / ordersPerPage)}
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

export default Orders;
