import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeroImg from "../../assets/hero.png";
import Img from "../../assets/T-Shirt-25.jpg";
import whyImg from "../../assets/why-choose-us-img.jpg";
import ImgGrid1 from "../../assets/img-grid-1.jpg";
import ImgGrid2 from "../../assets/img-grid-2.jpg";
import ImgGrid3 from "../../assets/img-grid-3.jpg";
import {
  AiOutlineTruck,
  AiOutlineShopping,
  AiOutlineCustomerService,
  AiOutlineRetweet,
} from "react-icons/ai";
import "../../index.css";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const categories = [
    { id: 1, name: "Category 1", image: Img },
    { id: 2, name: "Category 2", image: Img },
    { id: 3, name: "Category 3", image: Img },
  ];
  return (
    <>
      <div className="welcome">
        <div className="hero">
          <Container>
            <Row className="justify-content-between pb-5">
              <Col lg={5}>
                <div className="intro-excerpt">
                  <h1>
                    Refine{" "}
                    <span className="d-block">Your Style with Tailoring</span>
                  </h1>
                  <p className="mb-4 lh-base fs-5">
                    Experience the art of bespoke tailoring, curated to elevate
                    your style and enhance your confidence.
                  </p>
                  <p>
                    <Button
                      href="/shop/all"
                      variant="secondary"
                      size="lg"
                      className="me-2 rounded-pill px-5 py-3"
                    >
                      <span className="fs-6 fw-bold">Shop Now</span>
                    </Button>
                    <Link
                      href="/shop/all"
                      className="border border-white text-white rounded-pill px-5 py-3 text-decoration-none fw-bold"
                    >
                      Explore
                    </Link>
                  </p>
                </div>
              </Col>
              <Col lg={7}>
                <div className="hero-img-wrap">
                  <img src={HeroImg} className="img-fluid" alt="Hero Image" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* strat Product Section  */}
        <div className="product-section mt-5 mb-5 pt-5 pb-5">
          <div className="container pt-3 pb-5 mb-5">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 pt-5 ">
                <h2 className="mb-4 section-title">
                  Crafted with excellent material.
                </h2>
                <p className="mb-4 lh-lg gray-text fs-6">
                  "Crafted with Excellence: Our garments feature exceptional
                  materials, meticulously selected for their quality and
                  durability. Experience the luxury and comfort of wearing
                  clothing crafted to perfection."
                </p>
                <Button
                  href="/shop/all"
                  className="border border-white  text-warning rounded-pill mt-3 px-5 py-3 "
                >
                  <span className="fw-bold">Explore</span>
                </Button>
                {/* <p><a href="/shop/all" className="btn btn-primary fw-bold text-warning rounded-pill px-5 py-3">Explore</a></p> */}
              </div>

              {/* Column 2 - Category Items */}
              {categories &&
                categories.slice(0, 3).map((category) => (
                  <div
                    key={category.id}
                    className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
                  >
                    <a href={`/shop/${category.id}`} className="product-item">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="img-fluid product-thumbnail rounded-4 rounded-bottom-0"
                      />
                      <h3 className="product-title fw-bold text-center text-warning bg-light display-5 fs-5 pt-3">
                        {category.name}
                      </h3>
                    </a>
                  </div>
                ))}

              {/* Error Handling */}
              {!categories && <p>Error: Data not found!</p>}
            </div>
          </div>
        </div>
        {/* End Product Section  */}
        {/* start why choose us */}
        <div className="why-choose-section .custom-padding pt-5 mt-5 pb-5 mb-5">
          <Container>
            <Row className="justify-content-between pt-5 mb-5 pb-5">
              <Col lg={6}>
                <h2 className="section-title pt-4 mt-5 pb-2">Why Choose Us</h2>
                <p className="gray-text lh-base fs-5">
                  "Quality Craftsmanship, Personalized Fit, and Unparalleled
                  Customer Service - Choose Us for Tailoring Excellence."
                </p>

                <Row className="my-5 pt-4">
                  <Col xs={6} md={6}>
                    <div className="feature">
                      <div className="icon mb-4">
                        <AiOutlineTruck size={40} />
                      </div>
                      <h5>Fast & Free Shipping</h5>
                      <p className="mt-3 gray-text">
                        Enjoy Free Shipping: Convenient, Fast, and Hassle-Free
                        Delivery.
                      </p>
                    </div>
                  </Col>

                  <Col xs={6} md={6}>
                    <div className="feature">
                      <div className="icon mb-4">
                        <AiOutlineRetweet size={40} />
                      </div>
                      <h5>Easy to Re-design</h5>
                      <p className="mt-3 gray-text">
                        Effortlessly Re-design: Seamlessly Transform Your
                        Garments with our Easy-to-Use Tailoring Services.
                      </p>
                    </div>
                  </Col>

                  <Col xs={6} md={6}>
                    <div className="feature mt-4">
                      <div className="icon mb-4 ">
                        <AiOutlineCustomerService size={40} />
                      </div>
                      <h5>24/7 Support</h5>
                      <p className="mt-3 gray-text">
                        Round-the-Clock Support: Count on Us for 24/7
                        Assistance, Ready to Meet Your Tailoring Needs.
                      </p>
                    </div>
                  </Col>

                  <Col xs={6} md={6}>
                    <div className="feature mt-4">
                      <div className="icon mb-4 ">
                        <AiOutlineShopping size={40} />
                      </div>
                      <h5>Hassle Free Returns</h5>
                      <p className="mt-3 gray-text">
                        Hassle-Free Returns: Our Customer-Friendly Policy
                        Ensures a Smooth and Stress-Free Experience.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg={5}>
                <div className="img-wrap pt-5 ">
                  <img src={whyImg} alt="Image" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End why choose us */}

        {/* start we help */}
        <div className="we-help-section pt-5 mt-5 pb-5">
          <Container>
            <Row className="justify-content-between mt-5 pb-5 ">
              <Col lg={7} className="mb-5 mb-lg-0">
                <div className="imgs-grid">
                  <div className="grid grid-1 ">
                    <img src={ImgGrid1} />
                  </div>
                  <div className="grid grid-2 ">
                    <img src={ImgGrid2} />
                  </div>
                  <div className="grid grid-3">
                    <img src={ImgGrid3} />
                  </div>
                </div>
              </Col>
              <Col lg={5} className="ps-lg-5 pt-3 mt-2">
                <h2 className="section-title mb-4 ">
                  We Help You Make Modern Design
                </h2>
                <p className="lh-bold fs-5 gray-text">
                  Elevate Your Style with Our Expertise in Modern Design. From
                  sleek minimalism to bold innovation, we bring your vision to
                  life. Collaborate with our skilled team and explore endless
                  possibilities. Experience tailor-made perfection that reflects
                  your unique personality. Step into the world of modern fashion
                  with confidence and style.
                </p>

                <ul className=" lh-lg gray-text fs-5 my-4 mt-5">
                  <li>Quality Craftsmanship</li>
                  <li>Personalized Fit</li>
                  <li>Exceptional Customer Service</li>
                  <li>Modern Design Expertise</li>
                </ul>
                <Button
                  href="/shop/all"
                  className="border border-white text-warning rounded-pill mt-3 px-5 py-3 "
                >
                  <span className="fw-bold ">Explore</span>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        {/*End we help */}
      </div>
    </>
  );
};

export default WelcomePage;
