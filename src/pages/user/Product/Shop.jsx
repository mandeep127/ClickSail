import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { product } from "../../../store/productAPI/productApiSlice";
import { useParams } from "react-router-dom";
const Shop = () => {
  const dispatch = useDispatch();
  const { loading, error, authData } = useSelector((state) => state.products);
  const { id } = useParams();
  useEffect(() => {
    dispatch(product(id));
  }, []);

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

      <Container>
        <div className=" product-section pt-5 mt-5 pb-5">
          {/* Display products from Redux state */}
          <div className="row">
            {authData.data?.map((products) => (
              <div
                key={products.id}
                className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
              >
                {/* Product item UI */}
                <a
                  href={`/product/details/${products.id}`}
                  className="product-item text-decoration-none text-dark"
                >
                  <img
                    src={`http://127.0.0.1:8000${products.image}`}
                    className="img-fluid rounded-2"
                    alt={products.name}
                  />
                  <h3 className="text-center fs-4 pt-4">{products.name}</h3>
                  <p className="text-center fs-5 pt-1 pb-4 fw-bold">
                    <strong>₹{products.price}/-</strong>
                  </p>
                </a>
              </div>
            ))}
            {/* Error Handling */}
            {!authData?.data?.length && <p>Error: Data not found!</p>}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
