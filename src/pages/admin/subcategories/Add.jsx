import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { MdCategory } from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { Col, Row } from 'react-bootstrap';
import { GrSelect } from "react-icons/gr";
import { GoMultiSelect } from "react-icons/go";
const AddSubCat = () => {
  const [formData, setFormData] = useState({
    name: '',
    categoryImage: null, // To store the selected image file
  });

  const handleInputChange = (event) => {
    if (event.target.name === 'categoryImage') {
      // Handle image file input separately
      setFormData({ ...formData, categoryImage: event.target.files[0] });
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
      categoryImage: null,
    });
  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1 className="p-2">
            <BiSolidCategoryAlt /> Add SubCategory
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center mb-3">
                  <MdCategory size={50} className="me-2" />
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

                <div className="d-flex align-items-center mb-3">
                  <GrSelect size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="formCategoryImage" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Subcategory Image</b>
                    </Form.Label>
                    <Form.Control
                    type="file"
                    accept="image/*"
                    name="categoryImage"
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
              <GoMultiSelect size={50} className="me-2" />
              <Form.Group className="mb-3" controlId="formCategory" style={{ flex: 1 }}>
                <Form.Label>
                  <b>Select Category</b>
                </Form.Label>
                <Form.Select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="rounded-pill"
                  aria-label="Select Category"
                >
                  <option value="user">xyz</option>
                  <option value="admin">nnp</option>
                  <option value="editor">rst</option>
                </Form.Select>
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

export default AddSubCat;
