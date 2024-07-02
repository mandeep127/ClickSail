import React from "react";
import { Container } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import Gif from "../../../assets/verified1.gif";

const PaymentStatus = ({ message, orderId, paymentId }) => {
  // Dummy data (replace with actual data as needed)
  const dummyData = {
    message: "Payment successful!",
    orderId: "ABC123",
    paymentId: "XYZ789",
  };

  // Destructuring dummy data or props
  message = message || dummyData.message;
  orderId = orderId || dummyData.orderId;
  paymentId = paymentId || dummyData.paymentId;

  return (
    <>
      <div className="text-center pt-5 pb-5 mt-5">
        {orderId && paymentId ? (
          <>
            <img src={Gif} alt="GIF Image" width={50} height={50} />
            <div className="pt-4">
              <h2>{message}</h2>
              <p className="fs-5 pt-2">Order ID: {orderId}</p>
              <p>
                <b>Payment ID:</b> {paymentId}
              </p>
            </div>
          </>
        ) : (
          <p>
            <b>Payment Error</b>
          </p>
        )}
      </div>
    </>
  );
};

export default PaymentStatus;
