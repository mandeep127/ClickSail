import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { MdCategory } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { subcategoriesList, subcategoriesStatus, subCategoryDelete } from "../../../adminStore/subCategoriesApi/subcategoriesApiSlice";
import {useNavigate} from 'react-router-dom';
import ConfirmationDialog from '../../../components/admin/confirmation'; 

const SubCategoriesList = () => {

  const navigate = useNavigate()
   const { subcategories, loading, error } = useSelector((state) => state.subcategory);
   const dispatch = useDispatch();
   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
   const [subcategoryIdToDelete, setSubCategoryIdToDelete] = useState(null);

   useEffect(() => {
     dispatch(subcategoriesList());
   }, [dispatch]);

   const handleStatusSubCategory = async(SubcategoryId) => {
   await dispatch(subcategoriesStatus(SubcategoryId));
   dispatch(subcategoriesList());

  };
//handle delete
  const handleDeleteSubCategory = async (subcategoryId) => {
    await dispatch(subCategoryDelete(subcategoryId));
    dispatch(subcategoriesList());

  };

  const openDeleteDialog = (subcategoryId) => {
    setSubCategoryIdToDelete(subcategoryId);
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const confirmDeleteSubCategory = () => {
    if (subcategoryIdToDelete) {
      handleDeleteSubCategory(subcategoryIdToDelete);
      setShowDeleteDialog(false);
    }
  };

 
  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Row>
          <Col>
            <h1 className="p-2">
              <MdCategory /> Sub-Categories
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center">
          {/* <Col>
            <h6>Select Category:</h6>
            <Dropdown className="d-inline mx-2" autoClose="outside">
              <Dropdown.Toggle id="dropdown-autoclose-outside">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col> */}
          <Col className="d-flex justify-content-end">
            <Button onClick ={ () => {navigate('/admin/subcategory/add')}} className="bg-success border-0 d-flex justify-content-center">
              <FaUserPlus className="mr-1 mt-1" /> Add Subcategory
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table striped bordered rounded hover className="px-2 py-1 mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {subcategories?.sub_categories?.map((subcategory, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{index + 1}</td>
                    <td>{subcategory.name}</td>
                    <td>
                      {" "}
                      <img
                        src={`http://a-mdarji.com/${subcategory.image}`}
                        className=""
                        width="100"
                        height="100"
                        alt="categoryImg"
                      />
                    </td>

                    <td>
                      <Button
                        onClick={() => handleStatusSubCategory(subcategory.id)}
                        className={`btn ${
                          subcategory.status === "1"
                            ? "btn-primary btn-success btn-block"
                            : "btn-primary btn-danger btn-block"
                        }`}
                      >
                        <b>
                          {subcategory.status === "1" ? (
                            <FaUnlock />
                          ) : (
                            <FaLock />
                          )}
                        </b>
                      </Button>
                    </td>
                    <td className="display-flex flex-column align-items-center">
                      <Link to={`/admin/subcategory/edit/${subcategory.id}`} className="btn me-2 btn-info">
                        <b>
                          <FaEdit />
                        </b>
                      </Link>
                      <Button
                        onClick={() => openDeleteDialog(subcategory.id)}
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
        onConfirm={confirmDeleteSubCategory}
        message="Are you sure you want to delete this sub-category?"
      />
    </>

  );
};

export default SubCategoriesList;
