import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from '../../../components/admin/confirmation'; 

import {
  categoriesList,
  categoryStatus,
  deleteCategory,
} from '../../../adminStore/categoriesApi/categoriesApiSlices';

const Categorieslist = () => {
  const navigate = useNavigate();
  const { categories, loading, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(categoriesList());
  }, []);

  const handleStatusCategory = async (categoryId) => {
    await dispatch(categoryStatus(categoryId));
    dispatch(categoriesList());
  };

  const handleDeleteCategory = async (categoryId) => {
    await dispatch(deleteCategory(categoryId));
    dispatch(categoriesList());
  };

  const openDeleteDialog = (categoryId) => {
    setCategoryIdToDelete(categoryId);
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const confirmDeleteCategory = () => {
    if (categoryIdToDelete) {
      handleDeleteCategory(categoryIdToDelete);
      setShowDeleteDialog(false);
    }
  };

  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Row>
          <Col>
            <h1 className="p-2">
              <BiSolidCategoryAlt /> Categories
            </h1>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              onClick={() => {
                navigate('/admin/category/add');
              }}
              className="bg-success border-0 d-flex justify-content-center mt-5"
            >
              <FaUserPlus className="mr-1 mt-1" /> Add Category
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
                {categories?.categories?.map((category, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'even-row' : 'odd-row'}
                  >
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>
                      <img
                        src={`http://a-mdarji.com/${category.image}`}
                        className=""
                        width="100"
                        height="100"
                        alt="categoryImg"
                      />
                    </td>

                    <td>
                      <Button
                        onClick={() => handleStatusCategory(category.id)}
                        className={`btn ${
                          category.status === '1'
                            ? 'btn-primary btn-success btn-block'
                            : 'btn-primary btn-danger btn-block'
                        }`}
                      >
                        <b>
                          {category.status === '1' ? <FaUnlock /> : <FaLock />}
                        </b>
                      </Button>
                    </td>
                    <td className="display-flex flex-column align-items-center">
                      <Link
                        to={`/admin/category/edit/${category.id}`}
                        className="btn me-2 btn-info"
                      >
                        <b>
                          <FaEdit />
                        </b>
                      </Link>
                      <Button
                        onClick={() => openDeleteDialog(category.id)}
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
        onConfirm={confirmDeleteCategory}
        message="Are you sure you want to delete this category?"
      />
    </>
  );
};

export default Categorieslist;
