import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Carousel,
  Image,
} from "react-bootstrap";
import Img from "../../../assets/T-Shirt-25.jpg";
import Img1 from "../../../assets/T-Shirt-26.jpg";
import Img2 from "../../../assets/T-Shirt-24.jpg";
import Img3 from "../../../assets/T-Shirt.jpg";
import { BsFillCartCheckFill, BsFillGiftFill } from "react-icons/bs";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

// Sample product data
const product = {
  id: 1,
  name: "Product Name",
  price: 999,
  stock: 10,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.",
  // Add more fields as needed
};

const handleAddToCart = (event) => {
  event.preventDefault();
  // Handle form submission logic here (if needed)
  console.log("Add to cart clicked");
};

// Sample product sub-images data (array of objects)
const productSubImages = [
  { id: 1, sub_images: Img },
  { id: 2, sub_images: Img1 },
  { id: 3, sub_images: Img2 },
  // Add more sub-images as needed
];

// Sample related products data (array of objects)
const relatedProducts = [
  {
    id: 2,
    name: "Related Product 1",
    price: 799,
    image: Img2,
  },
  {
    id: 3,
    name: "Related Product 2",
    price: 899,
    image: Img3,
  },
  {
    id: 4,
    name: "Related Product 3",
    price: 1099,
    image: Img2,
  },
  // Add more related products as needed
];

const ProductDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active carousel index

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex); // Update activeIndex state on carousel slide change
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="gx-4 mb-5 pb-3 pt-4">
          <Col lg={5}>
            {/* Image slider */}
            <Carousel
              id="imageSlider"
              activeIndex={activeIndex}
              onSelect={handleSelect}
              interval={null}
              pause={false}
              nextIcon={
                <span className="carousel-control-next-icon  bg-black" />
              }
              prevIcon={
                <span className="carousel-control-prev-icon  bg-black" />
              }
            >
              {productSubImages.map((subImage, index) => (
                <Carousel.Item key={index}>
                  <Image
                    src={subImage.sub_images}
                    className="d-block mx-auto rounded"
                    style={{ maxWidth: "400px" }}
                    alt={`Slide ${index + 1}`}
                    fluid
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            {/* Thumbnail navigation */}
            <div className="d-flex justify-content-center mb-3 pt-4">
              {productSubImages.map((subImage, index) => (
                <a
                  key={index}
                  className={`border mx-1 rounded-2 ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    id={`thumb-${index}`}
                    width="60"
                    height="60"
                    className="rounded-2"
                    src={subImage.sub_images}
                  />
                </a>
              ))}
            </div>
          </Col>

          <Col lg={6} className="pt-6">
            <div className="ps-lg-7">
              <p className="mt-3">
                Home <MdNavigateNext />
                Product <MdNavigateNext />
                Details <MdNavigateNext />
                <strong>{product.name}</strong>
              </p>
              <hr />
              <h1 className="title text-dark mt-4">{product.name}</h1>
              <div className="d-flex flex-row my-2">
                <div className="text-warning mb-1 me-2">
                  <IoIosStar size={15} />
                  <IoIosStar size={15} />
                  <IoIosStar size={15} />
                  <IoIosStar size={15} />
                  <IoIosStarHalf size={15} />
                  <span className="ms-1 me-2 fs-5">4.5</span>
                </div>
                <span className="text-muted fs-5">
                  <BsFillCartCheckFill size={13} />
                  154+ orders
                </span>
                <span className="text-success ms-2 fs-5">
                  {" "}
                  Limited Stock ! ({product.stock})
                </span>
              </div>
              <div className="price text-success fw-bold mt-2">
                <BsFillGiftFill size={13} className="me-1" />
                Special price
              </div>
              <div className="mb-3 mt-3 ">
                <span className="fs-1 fw-light">
                  ₹ {product.price}/-{" "}
                  <span className="fs-6 text-decoration-line-through text-secondary">
                    {" "}
                    MRP: ₹{product.price * 12} /-
                  </span>
                </span>
                <div>
                  <span className="text-success fw-light fs-6">
                    {" "}
                    inclusive of all taxes.
                  </span>
                </div>
              </div>
              <Col lg={6}>
                {/* Form for adding to cart */}
                <Form onSubmit={handleAddToCart}>
                  <input
                    type="number"
                    value="1"
                    min="1"
                    className="form-control"
                    name="quantity"
                    hidden
                  />
                  <Button
                    variant="primary"
                    className="rounded-pill text-warning fw-bolder ps-5 pe-5 pt-3 pb-3  "
                    type="submit"
                  >
                    Add Cart
                  </Button>
                  <Link
                    to="/showcart"
                    className="btn btn-primary rounded-pill ms-2 text-warning fw-bolder ps-5 pe-5 pt-3 pb-3 "
                  >
                    Go to Cart
                  </Link>
                </Form>
              </Col>
              <hr />
              <div className="mb-3 mt-5 text-secondary">
                <p className="h4  fw-bold mb-3">
                  PRODUCT DETAILS <TbListDetails className="ms-1" size={20} />
                </p>
                <p>{product.description}</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Similar items */}
        <Row>
          <Col>
            <div className="card">
              <div className="card-body ms-5">
                <h5 className="card-title">
                  <u>Similar items</u>:
                </h5>
                <div className="d-flex flex-row flex-wrap">
                  {relatedProducts.map((relatedProduct, index) => (
                    <div
                      key={index}
                      className="mr-3 mb-3 d-flex align-items-center"
                    >
                      <a
                        href={`/product/details/${relatedProduct.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                        className="d-flex"
                      >
                        <Image
                          src={relatedProduct.image}
                          className="img-md img-thumbnail ms-4 mg-3 "
                        />
                        <div className="d-flex flex-column justify-content-between ms-3 mt-3">
                          <div>
                            <p className="mb-1 fw-bold">
                              {relatedProduct.name}
                            </p>
                            <p className="text-dark mb-0">
                              ₹ {relatedProduct.price}/-
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
