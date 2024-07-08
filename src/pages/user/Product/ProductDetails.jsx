import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Carousel,
  Image,
} from "react-bootstrap";
import { BsFillCartCheckFill, BsFillGiftFill } from "react-icons/bs";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import {
  addCart,
  productDetail,
} from "../../../store/productAPI/productApiSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector((state) => state.products.productDetails);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [activeIndex, setActiveIndex] = useState(0);

  console.log("id", id);

  useEffect(() => {
    dispatch(productDetail(id));
  }, []);

  if (!productDetails || !productDetails.data) {
    return <div className="ms-4">not Found...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Assuming productDetails is structured similarly to your backend response
  const { product, product_sub_images, related_products } = productDetails.data;

  const handleAddToCart = (event) => {
    event.preventDefault();
    const productId = product.id; // Assuming product.id is the identifier
    dispatch(addCart(productId)); // Dispatching addCart action
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="gx-4 mb-5 pb-3 pt-4">
          <Col lg={5}>
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
              {product_sub_images.map((subImage, index) => (
                <Carousel.Item key={index}>
                  <Image
                    src={`http://127.0.0.1:8000${subImage.sub_images}`}
                    className="d-block mx-auto rounded"
                    style={{ maxWidth: "400px" }}
                    alt={`Slide ${index + 1}`}
                    fluid
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="d-flex justify-content-center mb-3 pt-4">
              {product_sub_images.map((subImage, index) => (
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
                    src={`http://127.0.0.1:8000${subImage.sub_images}`}
                  />
                </a>
              ))}
            </div>
          </Col>

          <Col lg={6} className="pt-6">
            <div className="ps-lg-7">
              <p className="mt-3">
                Home <MdNavigateNext /> Product <MdNavigateNext /> Details{" "}
                <MdNavigateNext /> <strong>{product.name}</strong>
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
                  <BsFillCartCheckFill size={13} /> 154+ orders
                </span>
                <span className="text-success ms-2 fs-5">
                  {" "}
                  Limited Stock ! ({product.stock})
                </span>
              </div>
              <div className="price text-success fw-bold mt-2">
                <BsFillGiftFill size={13} className="me-1" /> Special price
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
                    className="rounded-pill fw-bolder ps-5 pe-5 pt-3 pb-3 btn-success bt-success"
                    type="submit"
                  >
                    Add to Cart
                  </Button>
                  <Link
                    to="/showcart"
                    className="btn rounded-pill ms-2 fw-bolder ps-5 pe-5 pt-3 pb-3 btn-success bt-success"
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
                  {related_products.map((relatedProduct, index) => (
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
                          src={`http://127.0.0.1:8000${relatedProduct.image}`}
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
