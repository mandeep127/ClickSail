import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  RazorpayCallback,
  PaymentStatus,
  CheckoutPage,
} from "../../../store/productAPI/productApiSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { orderId, totalPrice } = useSelector((state) => state.products); // Adjust selector as per your Redux state structure

  useEffect(() => {
    dispatch(CheckoutPage());
  }, [dispatch]);

  const loadRazorpayScript = () => {
    setLoading(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const options = {
        key: "rzp_test_BzAVeQXt6ZEUSn",
        amount: totalPrice * 100,
        currency: "INR",
        order_id: orderId,
        description: "Test transaction",
        handler: function (response) {
          console.log("Payment successful!", response);
          dispatch(RazorpayCallback(response));
          alert("Payment successful! Thank you for your purchase.");
          dispatch(
            PaymentStatus({ orderId, razorpayId: response.razorpay_payment_id })
          );
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.log("Payment failed!", response.error.description);
        alert("Payment failed. Please try again.");
      });

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
        {loading && (
          <FaSpinner
            size={30}
            className="text-success mt-3 pb-3"
            role="status"
          />
        )}

        <div>
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
