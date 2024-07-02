import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { BiSolidCategoryAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import { FaUserPlus, FaEdit, FaTrash, FaUnlock, FaLock } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import categoryImage1 from "../../../assets/AdminLTELogo.png";
import categoryImage2 from "../../../assets/AdminLTELogo.png";
import Pagination from './../../../components/admin/Pagination'; 

const Categorieslist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);
  const [count, setCount] = useState(1); // Initialize count variable for numbering users in the table

  // Dummy data for table (replace with actual data)
  const categories = [
    {
      name: "Men",
      image: categoryImage1 ,
      status: "0",
    },
    {
      name: "Woman",
      image: categoryImage2 ,
      status: "1",
    },
  ];

  // Pagination logic
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Calculate starting count for current page
  const startingCount = indexOfFirstCategory + 1;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCount((pageNumber - 1) * categoriesPerPage + 1);
  };

  // Previous page button
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCount(count - categoriesPerPage);
    }
  };

  // Next page button
  const nextPage = () => {
    if (currentPage < Math.ceil(categories.length / categoriesPerPage)) {
      setCurrentPage(currentPage + 1);
      setCount(count + categoriesPerPage);
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
        </Row>
        <Row className="justify-content-between align-items-center">
          <Col className="d-flex justify-content-end">
            <Button className="bg-success border-0 d-flex justify-content-center">
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
              totalPages={Math.ceil(categories.length / categoriesPerPage)}
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

export default Categorieslist;
