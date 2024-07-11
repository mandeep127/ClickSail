import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { IoListCircleSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

import {
  FaShippingFast,
  FaTimes,
  FaBan,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  salesList,
  orderProcessing,
  orderReject,
  orderShipping,
  orderAccept,
} from "../../../adminStore/salesApi/salesApiSlice";

const Orders = () => {
  // const dispatch = useDispatch();
  const { sales, loading, error } = useSelector((state) => state.sales);
  console.log(sales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(salesList());
  }, [dispatch]);

  const handleOrderProcessing = async (orderId) => {
   await dispatch(orderProcessing(orderId));
    dispatch(salesList());
  };

  const handleOrderReject = async (orderId) => {
    await dispatch(orderReject(orderId));
    dispatch(salesList());
  };

  const handleOrderShipping = async (orderId) => {
    await dispatch(orderShipping(orderId));
    dispatch(salesList());
  };

  const handleOrderAccept = async (orderId) => {
    await dispatch(orderAccept(orderId));
    dispatch(salesList());
  };

  // Function to get status icon and text based on status code
  const getStatusComponents = (order) => {
    let badgeVariant;

    switch (order.track_status) {
      case "0":
        badgeVariant = "dark";
        return (
          <Badge bg={badgeVariant} text="white">
            pending{" "}
          </Badge>
        );
        break;
      case "1":
        badgeVariant = "success";
        return (
          <Badge bg={badgeVariant} text="white">
            completed{" "}
            </Badge>
        );
        break;
      case "2":
        badgeVariant = "info";
        return (
          <Badge bg={badgeVariant} text="white">
            Processing{" "}
            </Badge>
        );
        break;
      case "3":
        badgeVariant = "warning";
        return (
          <Badge bg={badgeVariant} text="white">
            shipped{" "}
            </Badge>
        );
        break;
      default:
        badgeVariant = "danger";
        return (
          <Badge bg={badgeVariant} text="white">
            cancel{" "}
            </Badge>
        );
        break;
    }
  };

  // Function to render status badge based on status code
  const renderStatusBadge = (order) => {
    let badgeVariant, iconComponent;

    switch (order.track_status) {
      case "1":
        badgeVariant = "success";
        iconComponent = <FaShippingFast />;
        return (
          <Badge bg={badgeVariant} text="white">
            {iconComponent}
          </Badge>
        );
      case "4":
        badgeVariant = "danger";
        iconComponent = <FaTimes />;
        return (
          <Badge bg={badgeVariant} text="white">
            {iconComponent}
          </Badge>
        );
      case "2":
        return (
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => handleOrderShipping(order.id)}
              className="btn btn-primary btn-warning me-2"
            >
              <FaShippingFast />
            </Button>
            <Button
              onClick={() => handleOrderReject(order.id)}
              className="btn btn-primary btn-danger me-2"
            >
              <FaBan />
            </Button>
          </div>
        );
      case "3":
        return (
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => handleOrderAccept(order.id)}
              className="btn btn-primary btn-success me-2"
            >
              <FaCheck />
            </Button>
            <Button
              onClick={() => handleOrderReject(order.id)}
              className="btn btn-primary btn-danger me-2"
            >
              <FaBan />
            </Button>
          </div>
        );
      default:
        return (
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => handleOrderProcessing(order.id)}
              className="btn btn-primary btn-info me-2"
            >
              <FaSpinner />
            </Button>
            <Button
              onClick={() => handleOrderReject(order.id)}
              className="btn btn-primary btn-danger me-2"
            >
              <FaBan />
            </Button>
          </div>
        );
    }
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
                  {/* <th>More</th> */}
                </tr>
              </thead>
              <tbody>
                {sales?.orders?.map((sale, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{index + 1}</td>
                    <td>
                      {sale.name}/{sale.email}
                    </td>
                    <td>{sale.product_name}</td>
                    <td>{getStatusComponents(sale)}</td>
                    <td>
                      {sale.created_at
                        ? new Date(sale.created_at).toLocaleString("en-IN", {
                            timeZone: "Asia/Kolkata",
                            hour12: true,
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })
                        : "-"}
                    </td>{" "}
                    <td className="display-flex flex-column align-items-center">
                      {renderStatusBadge(sale)}{" "}
                    </td>
                    {/* <td>
                      <Link to="#" className="text-black">
                        <FaEye />
                      </Link>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Orders;
