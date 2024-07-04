import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { GrUserAdmin } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
const AdminProfile = () => {
  return (
    <div>
      <Container className="p-3">
        <Row>
          <Col>
            <h1 className="p-2">
              <GrUserAdmin /> Admin Profile
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex flex-column align-items-center border-top border-black border-4 admin-profile rounded mt-3 px-5 py-4">
              <div className="border border-secondary border-2 rounded-circle profile-icon mb-3">
                <RiAdminFill size={70} className="p-1" />
              </div>
              <div className="text-center">
                <h4>Ram</h4>
                <p>Admin</p>
              </div>
              <div className="px-1 py-1 border ">

              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminProfile;
