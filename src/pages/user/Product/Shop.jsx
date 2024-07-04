import React from "react";
import { Container } from "react-bootstrap";
import Img from "../../../assets/T-Shirt-25.jpg";
const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Stylish Sunglasses",
      price: 899,
      image: Img,
    },
    {
      id: 2,
      name: "Leather Handbag",
      price: 2499,
      image: Img,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 1999,
      image: Img,
    },
    {
      id: 4,
      name: "Men's Running Shoes",
      price: 1599,
      image: Img,
    },
    {
      id: 5,
      name: "Men's Running Shoes",
      price: 1599,
      image: Img,
    },
  ];

  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <h1>Shop</h1>
          <p className="fs-5 lh-base text-break">
            Welcome to our shop! Discover a wide range of products carefully
            curated just for you. Whether you're looking for trendy fashion
            pieces, stylish accessories, or unique gifts, we have something
            special waiting for you.
          </p>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Product Section */}
      <Container>
        <div className=" product-section pt-5 mt-5 pb-5">
          <div className="row">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
                >
                  <a
                    href={`/product/details/${product.id}`}
                    className="product-item text-decoration-none text-dark"
                  >
                    <img
                      src={product.image}
                      className="img-fluid rounded-2"
                      alt={product.name}
                    />
                    <h3 className=" text-center fs-4  pt-4">{product.name}</h3>
                    <p className=" text-center fs-5 pt-1 pb-4 fw-bold">
                      <strong> ₹{product.price}/-</strong>
                    </p>
                  </a>
                </div>
              ))
            ) : (
              <p>Error: Data not found!</p>
            )}
          </div>
        </div>
      </Container>
      {/* End Product Section */}
    </>
  );
};

export default Shop;
