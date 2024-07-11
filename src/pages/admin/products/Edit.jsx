import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaProductHunt } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { GrSelect } from "react-icons/gr";
import { GoMultiSelect } from "react-icons/go";
import { MdDescription } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { GoSingleSelect } from "react-icons/go";
import { AiOutlineStock } from "react-icons/ai";
import { SiNamecheap } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  productList,
  productEditGet,
  productEditPost,
} from "../../../adminStore/productApi/productApiSlice";
import { categoriesList } from "../../../adminStore/categoriesApi/categoriesApiSlices";
import { subcategoriesList } from "../../../adminStore/subCategoriesApi/subcategoriesApiSlice";
import { Link, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories } = useSelector((state) => state.category);
  const { subcategoriesData } = useSelector((state) => state.subcategory);

  const { product } = useSelector((state) => state.product);

  const { id } = useParams();


  useEffect(() => {
    dispatch(productEditGet(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(categoriesList());
  }, []);

  useEffect(() => {
    dispatch(subcategoriesList());
  }, []);

   const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock : '',
    category_id: '',
    sub_category_id: '',
    image: '',
    sub_images: [],
  });

  useEffect(() => {
    setFormData({
      name: product?.product?.name,
      description: product?.product?.description,
      price: product?.product?.price,
      stock: product?.product?.stock,
      image: product?.product?.image,
      subcategoryImages: [],
    });
  }, [product]);

  const handleInputChange = (event) => {
    if (event.target.name === 'image' || event.target.name === 'sub_images') {
      if (event.target.name === 'image') {
        setFormData({ ...formData, image: event.target.files[0] });
      }
      else if (event.target.name === 'sub_images') {
        setFormData({ ...formData, sub_images: event.target.files });
      }
    } else {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData()
    data.append("name", formData.name)
    data.append("description", formData.description)
    if (formData.image) {
      data.append("image", formData.image);
    }
    data.append("category_id",formData.category_id )
    data.append("sub_category_id",formData.sub_category_id )
    data.append("price",formData.price )
    data.append("stock",formData.stock )

    if (formData.sub_images.length > 0) {
      for (let i = 0; i < formData.sub_images.length; i++) {
        data.append('sub_images[]', formData.sub_images[i]);
      }}

    console.log("Form submitted:", data);
    dispatch(productEditPost({ id: id, data: data }));

     setFormData({
      name: '',
      description: '',
      price: '',
      stock:'',
      category: '',
      sub_category: '',
      image: null,
      sub_images: [],
    });
    dispatch(productList());

    navigate("/admin/product/list");
  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1 className="p-2">
            <FaProductHunt /> Edit Product
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center mb-2">
                  <SiNamecheap size={45} className="me-2" />
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

                <div className="d-flex align-items-center mb-2">
                  <MdDescription size={45} className="me-2" />
                  <Form.Group
                    className="mb-3"
                    controlId="desc"
                    style={{ flex: 1 }}
                  >
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
                  <IoIosPricetag size={45} className="me-2" />
                  <Form.Group
                    className="mb-3"
                    controlId="price"
                    style={{ flex: 1 }}
                  >
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
                  <GoSingleSelect size={45} className="me-2" />
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

                <div className="d-flex align-items-center mb-2">
                  <GoMultiSelect size={45} className="me-2" />
                  <Form.Group
                    className="mb-3"
                    controlId="formSubCategory"
                    style={{ flex: 1 }}
                  >
                    <Form.Label>
                      <b>Select Subcategory</b>
                    </Form.Label>
                    <Form.Select
                      name="sub_category_id"
                      value={formData.sub_category_id}
                      onChange={handleInputChange}
                      className="rounded-pill"
                      aria-label="Select Subcategory"
                    >
                   <option value="">Select SubCategory</option>
                      {subcategoriesData?.sub_categories?.map((subcategory, index) => (
                        <option key={subcategory.id} value={subcategory.id}>
                          {subcategory.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <AiOutlineStock size={45} className="me-2" />
                  <Form.Group
                    className="mb-3"
                    controlId="stock"
                    style={{ flex: 1 }}
                  >
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
                  <GrSelect size={45} className="me-2" />
                  <Form.Group
                    className="mb-3"
                    controlId="formCategoryImage"
                    style={{ flex: 1 }}
                  >
                    <Form.Label>
                      <b>Select Image</b>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleInputChange}
                      className="form-control"
                      required
                      multiple={false}
                    />
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <GrSelect size={45} className="me-2" />
                  <Form.Group
                    className="mb-3"
                    controlId="formSubcategoryImages"
                    style={{ flex: 1 }}
                  >
                    <Form.Label>
                      <b>Select Sub Images</b>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="sub_images"
                      onChange={handleInputChange}
                      className="form-control"
                      required
                      multiple
                    />
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

export default EditProduct;
