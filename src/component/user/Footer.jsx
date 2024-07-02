import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import footerImage from "../../assets/footer.png";
import "../../index.css";

const Footer = () => {
  return (
    <footer
      className="footer-section pt-5 mt-5 pb-5 mb-5"
      style={{ backgroundColor: "#EFF2F1" }}
    >
      <Container>
        <Row className="g-5 mb-5">
          <Col lg={4}>
            <div className="mb-4 pt-5">
              <a
                href="/"
                className="h1 text-decoration-none fw-medium"
                style={{ color: "#314d43" }}
              >
                Click Sail<span>.</span>
              </a>
            </div>
            <p className="mb-4 footer-text lh-base fs-6 gray-text">
              "Elevate your style with our impeccable craftsmanship and
              personalized tailoring services. Experience the perfect fit and
              modern designs that reflect your unique taste."
            </p>
            <ul className="list-unstyled d-flex pt-2">
              <li className="me-3">
                <a
                  href="#"
                  className="text-decoration-none d-inline-block rounded-circle p-2 btn btn-primary"
                >
                  <FaFacebookF size={20} color="white" />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="#"
                  className="text-decoration-none d-inline-block rounded-circle p-2 btn btn-primary"
                >
                  <FaTwitter size={20} color="white" />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="#"
                  className="text-decoration-none d-inline-block rounded-circle p-2 btn btn-primary"
                >
                  <FaInstagram size={20} color="white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none d-inline-block rounded-circle p-2 btn btn-primary"
                >
                  <FaLinkedin size={20} color="white" />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={8}>
            <Row className="pt-5">
              <Col sm={7} md={4}>
                <ul className="list-unstyled py-4 pt-4">
                  <li>
                    <a
                      href="/about"
                      className="text-decoration-none  d-block fw-normal text-dark fs-5 py-2"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-decoration-none  d-block fw-normal text-dark fs-5 py-2"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-decoration-none  d-block fw-normal text-dark fs-5 py-2"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={6} md={3}>
                <ul className="list-unstyled py-4 pt-4">
                  <li>
                    <a
                      href="/shop/all"
                      className="text-decoration-none  d-block fw-normal text-dark fs-5 py-2"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-decoration-none  d-block fw-normal text-dark fs-5 py-2"
                    >
                      Knowledge base
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-decoration-none  d-block fw-normal text-dark fs-5 py-2"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </Col>
              <Col
                sm={5}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  src={footerImage}
                  width={360}
                  height={360}
                  alt="Footer"
                  className="img-fluid footer-img pb-5 mb-5"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="border-top pt-4">
          <Col lg={6}>
            <p className="mb-2 text-center text-lg-start text-secondary fs-5">
              &copy;{new Date().getFullYear()} Click Sail
            </p>
          </Col>
          <Col lg={6} className="text-center text-lg-end">
            <ul className="list-unstyled d-inline-flex">
              <li className="me-4">
                <a href="#" className="text-decoration-none text-dark fs-5">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark fs-5">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-space"></div>
    </footer>
  );
};

export default Footer;
