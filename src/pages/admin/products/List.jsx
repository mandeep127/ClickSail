import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { GrProductHunt } from "react-icons/gr";
import { PiEmptyFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { productList, productStatus , productDelete} from "../../../adminStore/productApi/productApiSlice";
import ConfirmationDialog from '../../../components/admin/confirmation'; 


const ProductList = () => {
  const navigate = useNavigate()
  const { products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);


  const handleStatusProduct = async(productId) => {
    await dispatch(productStatus(productId));
    dispatch(productList());

  };

  //handle delete
  const handleDeleteProduct = async (productId) => {
    await dispatch(productDelete(productId));
    dispatch(productList());

  };

  const openDeleteDialog = (productId) => {
    setProductIdToDelete(productId);
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const confirmDeleteProduct = () => {
    if (productIdToDelete) {
      handleDeleteProduct(productIdToDelete);
      setShowDeleteDialog(false);
    }
  };
  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Row>
          <Col>
            <h1 className="p-2 mb-3">
              <GrProductHunt /> Products
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center">
          {/* <Col className="d-flex justify-content-right align-items-center">
            <div className="me-5">
              <h6>Select Category:</h6>
              <Dropdown className="d-inline mx-2" autoClose="outside">
                <Dropdown.Toggle id="dropdown-autoclose-outside">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <h6>Select SubCategory:</h6>
              <Dropdown className="d-inline mx-2" autoClose="outside">
                <Dropdown.Toggle id="dropdown-autoclose-outside">
                  SubCategories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col> */}
          <Col className="d-flex justify-content-end">
            <Button  onClick ={ () => {navigate('/admin/product/add')}} className="bg-success border-0 d-flex justify-content-center">
              <FaUserPlus className="mr-1 mt-1" /> Add Product
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table striped bordered rounded hover className="px-2 py-1 mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {products?.products?.map((product, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>
                      <img
                        src={`http://a-mdarji.com/${product.image}`}
                        className=""
                        width="100"
                        height="100"
                        alt="categoryImg"
                      />
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <Button
                        onClick={() => handleStatusProduct(product.id)}
                        className={`btn ${
                          product.status === "1"
                            ? "btn-success btn-block"
                            : "btn-danger btn-block"
                        }`}
                      >
                        <b>
                          {product.status === "1" ? <FaUnlock /> : <FaLock />}
                        </b>
                      </Button>
                    </td>
                    <td>
                      {product.stock === "0" || product.status === "0" ? (
                        <PiEmptyFill />
                      ) : (
                        product.stock
                      )}
                    </td>
                    <td className="display-flex flex-column align-items-center">
                      <Link to={`/admin/product/edit/${product.id}`} className="btn me-2 mb-2 btn-info">
                        <b>
                          <FaEdit />
                        </b>
                      </Link>
                      <Button
                        onClick={() => openDeleteDialog(product.id)}
                        className="btn btn-danger"
                      >
                        <b>
                          <FaTrash />
                        </b>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ConfirmationDialog
        show={showDeleteDialog}
        onClose={closeDeleteDialog}
        onConfirm={confirmDeleteProduct}
        message="Are you sure you want to delete this Product?"
      />
    </>
      );
};

export default ProductList;
