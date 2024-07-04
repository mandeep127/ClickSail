import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Mocked data (replace with actual data)
const orderId = "12345";
const totalPrice = 1000; // Assuming totalPrice is in INR (adjust as per your requirement)

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  // Function to dynamically load Razorpay script
  const loadRazorpayScript = () => {
    setLoading(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const options = {
        key: process.env.REACT_APP_RZP_API_KEY, // Replace with your actual API key
        amount: totalPrice * 100, // Amount in paisa (100 paise = 1 INR)
        currency: "INR",
        order_id: orderId,
        buttontext: "Pay with Razorpay",
        name: "A-MDarji",
        description: "Test transaction",
        theme: {
          color: "#198754",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading(false);
    };
    document.body.appendChild(script);
  };

  // Handle payment link click
  const handlePaymentClick = () => {
    loadRazorpayScript();
  };

  return (
    <Container className="py-5 text-center">
      <div id="razorpaySection" className="pt-5 pb-5 mt-5 mb-5">
        <p className="fs-4">
          Your Payment id: <b>{orderId}</b>
        </p>
        <p className="fs-6">
          Your Total Payment: Rs.<b>{totalPrice}/-</b>
        </p>

        {/* Spinner */}

        <div className="spinner-border text-success mt-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>
          {" "}
          <Link
            to="#"
            className="btn btn-success mt-5"
            onClick={handlePaymentClick}
          >
            Pay Now
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
