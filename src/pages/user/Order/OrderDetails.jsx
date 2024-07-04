import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaExclamationTriangle, FaCheck } from "react-icons/fa"; // Example icon imports
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import Img from "../../../assets/T-Shirt-25.jpg";

const OrdersDetails = () => {
  const orders = [
    {
      id: 1,
      order_id: "ORD001",
      product_name: "Product A",
      price: 100,
      quantity: 2,
      total_price: 200,
      created_at: "2024-06-30T10:00:00Z",
      razorpay_payment_id: "PAY001",
      track_status: 2, // Example track status (adjust as per your actual data)
      product_image: Img, // Example product image URL
      name: "John Doe",
      phone: "1234567890",
      user_address: "123 Main St",
      pincode: "123456",
      useraddress: "456 Elm St",
      userpincode: "789012",
    },
    {
      id: 2,
      order_id: "ORD002",
      product_name: "Product B",
      price: 150,
      quantity: 1,
      total_price: 150,
      created_at: "2024-06-29T15:30:00Z",
      razorpay_payment_id: null,
      track_status: 2,
      product_image: "/path/to/image2.jpg",
      name: "Jane Doe",
      phone: "9876543210",
      user_address: "456 Elm St",
      pincode: "789012",
      useraddress: "789 Oak St",
      userpincode: "345678",
    },
    // Add more orders as needed
  ];

  // Function to add days to a date
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Your Orders</h2>
      {orders.map((order) => (
        <Card
          key={order.order_id}
          className="mb-4"
          style={{
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "30px",
          }}
        >
          <div
            className="card-header"
            style={{
              backgroundColor: "#f8f9fa",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              padding: "15px",
            }}
          >
            <Row>
              <Col md={6}>
                <p className="mb-0">
                  <strong>Order ID:</strong> #{order.order_id}
                </p>
                <p className="mb-0">
                  <strong>Order placed on:</strong>{" "}
                  {new Date(order.created_at).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
              </Col>
              <Col md={6} className="text-md-right">
                <p className="mb-0">
                  <strong>Payment Status:</strong>{" "}
                  {order.razorpay_payment_id === null ? (
                    <span style={{ color: "red" }}>
                      Payment failed{" "}
                      <FaExclamationTriangle style={{ color: "red" }} />
                    </span>
                  ) : (
                    <span style={{ color: "green" }}>
                      Paid <FaCheck style={{ color: "green" }} />
                    </span>
                  )}
                </p>
                <p className="mb-0">
                  <strong>Total Price:</strong> Rs.{order.total_price}/-
                </p>
              </Col>
            </Row>
          </div>
          <div className="card-body" style={{ paddingLeft: "30px" }}>
            <Row>
              <Col md={4}>
                {order.product_image && (
                  <a href={`/product/details/${order.id}`}>
                    <img
                      src={order.product_image}
                      className="img-fluid rounded"
                      alt="Product"
                      style={{ maxWidth: "100px" }}
                    />
                  </a>
                )}
              </Col>
              <Col md={8}>
                <h5 className="card-title">{order.product_name}</h5>
                <p className="card-text">
                  <strong>Quantity:</strong> {order.quantity}
                </p>
              </Col>
            </Row>
          </div>
          <div
            className="card-footer"
            style={{
              backgroundColor: "#f8f9fa",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              padding: "15px",
            }}
          >
            <Row>
              <Col md={6}>
                <p className="mb-0">
                  <strong>Order Status:</strong>{" "}
                  {order.track_status === -1 ? (
                    <span className="text-danger">Cancelled</span>
                  ) : order.track_status === 0 ? (
                    <span className="text-warning">Pending</span>
                  ) : order.track_status === 1 ? (
                    <span className="text-info">Processing</span>
                  ) : order.track_status === 2 ? (
                    <span className="text-success">Shipped</span>
                  ) : order.track_status === 3 ? (
                    <span className="text-primary">Delivered</span>
                  ) : (
                    <span className="text-muted">Unknown</span>
                  )}
                </p>
                <p className="mb-0">
                  <strong>Razorpay Order ID:</strong> {order.razorpay_id}
                </p>
                <p className="mb-0">
                  <strong>Payment ID:</strong> {order.razorpay_payment_id}
                </p>
              </Col>
              <Col md={6} className="text-md-right">
                <a
                  href={`/order/tracking/${order.order_id}`}
                  className="btn btn-primary"
                >
                  Track Order
                </a>
                {order.track_status !== -1 && (
                  <p className="mt-3">
                    <strong>Estimated Delivery Date:</strong>{" "}
                    {addDays(new Date(order.created_at), 7).toLocaleString(
                      "en-IN",
                      {
                        timeZone: "Asia/Kolkata",
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      }
                    )}
                  </p>
                )}
              </Col>
            </Row>
          </div>
          <div
            className="card-footer"
            style={{
              backgroundColor: "#f8f9fa",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              padding: "15px",
            }}
          >
            <h6>
              <strong style={{ color: "black" }}>Delivery Address:</strong>
            </h6>
            <p className="mb-0">
              <strong>{order.name}</strong> | <strong>{order.phone}</strong>
            </p>
            <p className="mb-0">
              {order.user_address} - {order.pincode}
            </p>
          </div>
          <div className="card-footer">
            <h6>
              <strong style={{ color: "black" }}>User Details:</strong>
            </h6>
            <p className="mb-0">
              <strong>Name:</strong> {order.name}
            </p>
            <p className="mb-0">
              <strong>Email:</strong> {order.email}
            </p>
            <p className="mb-0">
              {order.useraddress} - {order.userpincode}
            </p>
          </div>
          <div
            className="card-footer text-center"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <h6 style={{ fontSize: "14px" }}>
              <strong style={{ color: "gray" }}>Update send to </strong>
            </h6>
            <p className="mb-0 fs-6 text-secondary">
              <MdOutlinePermPhoneMsg size={15} />
              {order.phone}
            </p>
          </div>
          <div
            className="card-footer text-center"
            style={{ paddingTop: "12px" }}
          >
            <p className="mb-0" style={{ fontSize: "10px" }}>
              Order ID: #{order.order_id}
            </p>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default OrdersDetails;
