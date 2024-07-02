import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import categoryImage1 from "../../../assets/AdminLTELogo.png";
import categoryImage2 from "../../../assets/AdminLTELogo.png";
import { MdCategory } from "react-icons/md";
import Pagination from './../../../components/admin/Pagination'; 

const SubCategoriesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [subcategoriesPerPage] = useState(5);
  const [count, setCount] = useState(1); 

  // Dummy data for table (replace with actual data)
  const subcategories = [
    {
      name: "Shirt",
      image: categoryImage1 ,
      status: "0",
    },
    {
      name: "T-Shirt",
      image: categoryImage2 ,
      status: "1",
    },
    {
      name: "Shirt",
      image: categoryImage1 ,
      status: "0",
    },
    {
      name: "T-Shirt",
      image: categoryImage2 ,
      status: "1",
    },
    {
      name: "Shirt",
      image: categoryImage1 ,
      status: "0",
    },
    {
      name: "T-Shirt",
      image: categoryImage2 ,
      status: "1",
    },
  ];

  // Pagination logic
  const indexOfLastSubCategory = currentPage * subcategoriesPerPage;
  const indexOfFirstSubCategory = indexOfLastSubCategory - subcategoriesPerPage;
  const currentCategories = subcategories.slice(
    indexOfFirstSubCategory,
    indexOfLastSubCategory
  );

  // Calculate starting count for current page
  const startingCount = indexOfFirstSubCategory + 1;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCount((pageNumber - 1) * subcategoriesPerPage + 1);
  };

  // Previous page button
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCount(count - subcategoriesPerPage);
    }
  };

  // Next page button
  const nextPage = () => {
    if (currentPage < Math.ceil(subcategories.length / subcategoriesPerPage)) {
      setCurrentPage(currentPage + 1);
      setCount(count + subcategoriesPerPage);
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
        <Col>
            <h6>Select Category:</h6>
            <Dropdown className="d-inline mx-2" autoClose="outside">
              <Dropdown.Toggle id="dropdown-autoclose-outside">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="bg-success border-0 d-flex justify-content-center">
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
                {currentCategories.map((category, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{count + index}</td>
                    <td>{category.name}</td>
                    <td>
                      {" "}
                      <img
                        src={category.image}
                        className=""
                        width="100"
                        height="100"
                        alt="categoryImg"
                      />
                    </td>

                    <td>
                      <Button
                        href="#"
                        className={`btn ${
                          category.status === "1"
                            ? "btn-primary btn-success btn-block"
                            : "btn-primary btn-danger btn-block"
                        }`}
                      >
                        <b>
                          {category.status === "1" ? <FaUnlock /> : <FaLock />}
                        </b>
                      </Button>
                    </td>
                    <td className="display-flex flex-column align-items-center">
                      <Link to="#" className="btn me-2 btn-info">
                        <b>
                          <FaEdit />
                        </b>
                      </Link>
                      <Link to="#" className="btn btn-danger">
                        <b>
                          <FaTrash />
                        </b>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row className="justify-content-center">
        <Col>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(subcategories.length / subcategoriesPerPage)}
              prevPage={prevPage}
              nextPage={nextPage}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubCategoriesList;
