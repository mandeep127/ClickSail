import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { MdCategory } from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { Col, Row } from 'react-bootstrap';
import { GrSelect } from 'react-icons/gr';
import { GoMultiSelect } from 'react-icons/go';
import { MdDescription } from 'react-icons/md';
import { IoIosPricetag } from 'react-icons/io';
import { GoSingleSelect } from "react-icons/go";
import { AiOutlineStock } from "react-icons/ai";
import { SiNamecheap } from 'react-icons/si';
import { FaProductHunt } from "react-icons/fa";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    subcategory: '',
    categoryImage: null,
    subcategoryImages: [], // To store multiple selected subcategory images
  });

  const handleInputChange = (event) => {
    if (event.target.name === 'categoryImage' || event.target.name === 'subcategoryImages') {
      // Handle image file input separately
      setFormData({ ...formData, [event.target.name]: event.target.files });
    } else {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., validation, API call)
    console.log('Form submitted:', formData);
    // Reset form fields after submission (optional)
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      subcategory: '',
      categoryImage: null,
      subcategoryImages: [],
    });
  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1 className="p-2">
            <FaProductHunt /> Add Product
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-4 ">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center mb-2">
                  <SiNamecheap size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="formName" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Name</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <MdDescription size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="desc" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Description</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <IoIosPricetag size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="price" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Price</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <GoSingleSelect size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="formCategory" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Category</b>
                    </Form.Label>
                    <Form.Select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      aria-label="Select Category"
                    >
                      <option value="xyz">xyz</option>
                      <option value="nnp">nnp</option>
                      <option value="rst">rst</option>
                    </Form.Select>
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <GoMultiSelect size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="formSubCategory" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Subcategory</b>
                    </Form.Label>
                    <Form.Select
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      aria-label="Select Subcategory"
                    >
                      <option value="xyz">xyz</option>
                      <option value="nnp">nnp</option>
                      <option value="rst">rst</option>
                    </Form.Select>
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <AiOutlineStock size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="stock" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Stock</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <GrSelect size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="formCategoryImage" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Image</b>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="categoryImage"
                      onChange={handleInputChange}
                      className="form-control"
                      required
                      multiple={false}
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <GrSelect size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="formSubcategoryImages" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Sub Images</b>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="subcategoryImages"
                      onChange={handleInputChange}
                      className="form-control"
                      required
                      multiple
                    />
                  </Form.Group>
                </div>

                <Button variant="primary" type="submit" className="rounded-pill w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
