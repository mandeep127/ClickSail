import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { MdCategory } from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { Col, Row } from 'react-bootstrap';
import { GrSelect } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  categoriesList,
  categoryEditGet,
  categoryEditPost,
} from "../../../adminStore/categoriesApi/categoriesApiSlices";
import { Link, useNavigate } from 'react-router-dom';

const EditCat = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(categoryEditGet(id));
  }, [dispatch, id]);

  const [formData, setFormData] = useState({
    name: '',
    image: null,
  });


  useEffect(() =>{
    setFormData({
      name: category?.category?.name,
      image : category?.category?.image
    });
  },[category])

  const handleInputChange = (event) => {
    if (event.target.name === "image") {

      setFormData({ ...formData, image: event.target.files?.[0] });
    } else {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData()
    data.append("name", formData.name)
    data.append("image",formData.image )

    await dispatch(categoryEditPost({ id, data: data }));

    setFormData({
      name: '',
      image: null,
    });
    navigate("/admin/categories/list");
    dispatch(categoriesList());
  };

  console.log('formData', formData)

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1 className="p-2">
            <BiSolidCategoryAlt /> Edit Category
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center mb-2">
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

                <div className="d-flex align-items-center mb-2">
                  <GrSelect size={50} className="me-2" />
                  <Form.Group className="mb-3" controlId="formCategoryImage" style={{ flex: 1 }}>
                    <Form.Label>
                      <b>Select Category Image</b>
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

export default EditCat;
