import React from "react";
import { Container, Card, Table } from "react-bootstrap";
import { AiOutlineLink } from "react-icons/ai"; // Example icon import, you can choose appropriate icons from react-icons library

const orders = [
  {
    id: 1,
    order_id: "ORD001",
    product_name: "Product A",
    price: 100,
    quantity: 2,
    total_price: 200,
    created_at: "2024-06-30T10:00:00Z", // Example ISO 8601 date string
  },
  {
    id: 2,
    order_id: "ORD002",
    product_name: "Product B",
    price: 150,
    quantity: 1,
    total_price: 150,
    created_at: "2024-06-29T15:30:00Z", // Example ISO 8601 date string
  },
  // Add more orders as needed
];

const Orders = () => {
  return (
    <Container className="pt-5 pb-5 pl-5 pr-5">
      <Card
        className="mb-4"
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <h2>
          <p>Your Placed Orders :</p>
        </h2>
        {orders.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.order_id}>
                  <td>
                    <strong>{order.order_id}</strong> [{" "}
                    {new Date(order.created_at).toLocaleDateString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      day: "numeric",
                      month: "long",
                      weekday: "short",
                    })}{" "}
                    ]
                  </td>
                  <td>{order.product_name}</td>
                  <td>Rs. {order.price}/-</td>
                  <td>{order.quantity}</td>
                  <td>Rs. {order.total_price}/-</td>
                  <td>
                    <a
                      href={`/order/details/${order.id}`}
                      style={{ color: "blue" }}
                    >
                      <AiOutlineLink /> View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No orders found.</p>
        )}
      </Card>
    </Container>
  );
};

export default Orders;
