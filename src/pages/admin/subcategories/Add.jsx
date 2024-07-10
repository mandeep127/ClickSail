import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { MdCategory } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";
import { GrSelect } from "react-icons/gr";
import { GoMultiSelect } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { subcategoriesList, addSubCategory } from "../../../adminStore/subCategoriesApi/subcategoriesApiSlice";
import { categoriesList } from "../../../adminStore/categoriesApi/categoriesApiSlices";
import { Link, useNavigate } from 'react-router-dom';

const AddSubCat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories, loading, error } = useSelector((state) => state.category);
 
   useEffect(() => {
     dispatch(categoriesList());
   }, []);


   const [formData, setFormData] = useState({
    name: "",
    image: "",
    category_id: "",
  });

  const handleInputChange = (event) => {
    if (event.target.name === "image") {
      setFormData({ ...formData, image: event.target.files?.[0] });
    } else {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log('formData.image ', formData.image )

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData()
    data.append("name", formData.name)
    data.append("image",formData.image )
    data.append("category_id",formData.category_id )

    console.log("Form submitted:", data);

    dispatch(addSubCategory(data));

    setFormData({
      name: "",
      image: null,
      category_id: "",
    });
    dispatch(subcategoriesList());

    navigate("/admin/subcategories/list");
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
                  <Form.Group
                    className="mb-3"
                    controlId="formName"
                    style={{ flex: 1 }}
                  >
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
                  <Form.Group
                    className="mb-3"
                    controlId="formCategoryImage"
                    style={{ flex: 1 }}
                  >
                    <Form.Label>
                      <b>Select Subcategory Image</b>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <GoMultiSelect size={50} className="me-2" />
                  <Form.Group
                    className="mb-3"
                    controlId="formCategory"
                    style={{ flex: 1 }}
                  >
                    <Form.Label>
                      <b>Select Category</b>
                    </Form.Label>
                    <Form.Select
                      name="category_id" 
                      value={formData.category_id}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      aria-label="Select Category"
                    >
                      <option value="">Select Category</option>
                      {categories?.categories?.map((category, index) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="rounded-pill w-100"
                >
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
