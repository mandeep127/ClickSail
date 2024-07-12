import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Token = ({ token }) => {
  // Generate the reset password link
  const resetPasswordLink = `${window.location.origin}/reset/admin/password/get?token=${token}`;

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <div className="text-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} size="5x" className="mb-4" />
            <h1>Password Reset Token</h1>
            <p>
              Your password reset token is: <strong></strong>
            </p>
            <p>Click the following link to reset your password:</p>
            <a href={resetPasswordLink}>{resetPasswordLink}</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Token;
