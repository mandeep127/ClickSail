// Import necessary libraries and components
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Carousel, Image } from "react-bootstrap";
import {
  AiOutlineTruck,
  AiOutlineShopping,
  AiOutlineCustomerService,
  AiOutlineRetweet,
} from "react-icons/ai";
import "./index.css";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero.png";
import whyImg from "../../assets/why-choose-us-img.jpg";
import ImgGrid1 from "../../assets/img-grid-1.jpg";
import ImgGrid2 from "../../assets/img-grid-2.jpg";
import ImgGrid3 from "../../assets/img-grid-3.jpg";
import person1 from "../../assets/person-1.png";
import person2 from "../../assets/person-2.png";
import person3 from "../../assets/person-3.png";
import { welcome } from "../../store/homeAPI/homeApiSlice";

const WelcomePage = () => {
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.categories);

  // console.log(authData, "Welcome");

  useEffect(() => {
    dispatch(welcome());
  }, [dispatch]);

  const testimonials = [
    {
      quote:
        "I was blown away by the quality of the craftsmanship and attention to detail in my tailored garment. It fit perfectly and exceeded my expectations.",
      author: "Sarah L",
      image: person2,
    },
    {
      quote:
        "The personalized fit I received was outstanding. The tailors took the time to understand my preferences and measurements, resulting in a garment that felt like it was made just for me.",
      author: "John M",
      image: person3,
    },
    {
      quote:
        "The customer service I received was exceptional. The team was attentive, helpful, and went above and beyond to ensure my satisfaction throughout the entire process.",
      author: "Emma K",
      image: person1,
    },
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
                      to="/shop/all"
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
        {/* start Product Section  */}
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
                  className="border border-white rounded-pill btn-success bt-success mt-3 px-5 py-3 "
                >
                  <span className="fw-bold">Explore</span>
                </Button>
                {/* <p><a href="/shop/all" className="btn btn-primary fw-bold text-warning rounded-pill px-5 py-3">Explore</a></p> */}
              </div>
              {/* Column 2 - Category Items */}
              {authData.data?.map((category) => (
                <div
                  key={category.id}
                  className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
                >
                  <a href={`/shop/${category.id}`} className="product-item">
                    <img
                      src={`http://127.0.0.1:8000${category.image}`}
                      alt={category.name}
                      className="img-fluid product-thumbnail rounded-4 rounded-bottom-0"
                    />
                    <h3 className="product-title fw-bold text-center text-white bg-secondary display-5 fs-5 pt-3">
                      {category.name}
                    </h3>
                  </a>
                </div>
              ))}
              {/* Error Handling */}
              {!authData?.data?.length && <p>Error: Data not found!</p>}
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
                    <img src={ImgGrid1} alt="Grid Image 1" />
                  </div>
                  <div className="grid grid-2 ">
                    <img src={ImgGrid2} alt="Grid Image 2" />
                  </div>
                  <div className="grid grid-3">
                    <img src={ImgGrid3} alt="Grid Image 3" />
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
                  className="rounded-pill mt-3 px-5 py-3 bt-success btn-success "
                >
                  <span className="fw-bold ">Explore</span>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        {/*End we help */}
      </div>

      {/* Start Testimonials Section */}

      <Row className="justify-content-center mt-5 pt-5 mb-5 ">
        <Col lg={8} className="text-center">
          <h2 className="section-title">Testimonials</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Carousel
            pause={false}
            nextIcon={
              <span className="carousel-control-next-icon rounded-circle bg-black pt-5 pe-4 " />
            }
            prevIcon={
              <span className="carousel-control-prev-icon rounded-circle bg-black pt-5 pe-4" />
            }
          >
            {testimonials.map((testimonial, id) => (
              <Carousel.Item key={id}>
                <div className="position-relative d-flex justify-content-center align-items-center">
                  <div
                    className="d-flex flex-column align-items-center mt-3"
                    style={{ height: "200px" }}
                  >
                    <Image
                      className="d-block rounded-circle"
                      src={testimonial.image}
                      alt={testimonial.author}
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <div>
                      <Carousel.Caption className="text-center text-secondary">
                        <blockquote className="blockquote">
                          <p>{testimonial.quote}</p>
                        </blockquote>
                        <h3 className="font-weight-bold">
                          {testimonial.author}.
                        </h3>
                      </Carousel.Caption>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* End Testimonials Section */}
    </>
  );
};

export default WelcomePage;
