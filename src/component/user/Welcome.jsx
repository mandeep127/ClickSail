import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroImg from '../../assets/hero.png';
import Img from '../../assets/T-Shirt-25.jpg';

const WelcomePage = () => {
  const categories = [
    { id: 1, name: 'Category 1', image: '' },
    { id: 2, name: 'Category 2', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Category 3', image: '/path/to/image3.jpg' }
  ];
  return (
    <>
      <div className="hero">
      <Container>
        <Row className="justify-content-between">
          <Col lg={5}>
            <div className="intro-excerpt">
              <h1>Refine <span className="d-block">Your Style with Tailoring</span></h1>
              <p className="mb-4">Experience the art of bespoke tailoring, curated to elevate your style and enhance your confidence.</p>
              <p>
              <Button href="/shop/all" variant="secondary" size="lg" className="me-2 rounded-pill px-5 py-3">
  <span className="fs-6 fw-bold">Shop Now</span>
</Button>
                <Button href="/shop/all" className="border border-white rounded-pill px-5 py-3 " >
                <span className="fw-bold">Explore</span>
                </Button>
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
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 mt-4 me-4">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4 lineHeight gray-text">
              "Crafted with Excellence: Our garments feature exceptional materials, meticulously selected for their quality and durability. Experience the luxury and comfort of wearing clothing crafted to perfection."
            </p>
            <p><a href="/shop/all" className="btn btn-primary rounded-pill px-5 py-3">Explore</a></p>
          </div>

          {/* Column 2 - Category Items */}
          {categories && categories.slice(0, 3).map(category => (
          <div key={category.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a href={`/shop/${category.id}`} className="product-item">
            <img src={Img} alt={category.name} className="img-fluid product-thumbnail rounded-4 rounded-bottom-0" />
            <h3 className="product-title fw-bold text-center text-black-50 display-5 fw-normal fs-5 pt-3">{category.name}</h3>
          </a>
        </div>                    
          ))}

          {/* Error Handling */}
          {!categories && <p>Error: Data not found!</p>}
        </div>
      </div>
    </div>
    {/* End Product Section  */}
    </>
  );
}

export default WelcomePage;
