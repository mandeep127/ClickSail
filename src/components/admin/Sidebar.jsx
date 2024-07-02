import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import { FaUser, FaProductHunt, FaSearch, FaRegCircle } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdInventory2 } from "react-icons/md";

import adminLTELogo from "../../assets/AdminLTELogo.png";

import { FaUserTie } from "react-icons/fa";

const AdminSidebar = () => {
  const tiles = [
    {
      eventKey: 0,
      name: "User Management",
      icon: <FaUser />,
      child1: "User List",
      child2: "Add User",
    },
    {
      eventKey: 1,
      name: "Categories Management",
      icon: <BiSolidCategoryAlt />,
      child1: "Add Categories",
      child2: "Subcategories",
    },
    {
      eventKey: 2,
      name: "Product Management",
      icon: <FaProductHunt />,
      child1: "Product List",
      child2: "Add Product",
    },
    {
      eventKey: 3,
      name: "Sales Management",
      icon: <MdInventory2 />,
      child1: "Orders",
      child2: "Transactions",
    },
  ];
  return (
    <>
      <div className="sidebar-side h-100 p-1 justify-content-center align-items-center ">
        <div className="border-bottom border-secondary p-2 px-2">
          <Link to="#" className="text-white text-decoration-none ">
            <span className="logo brand-text font-weight-heavy fs-5 mt-3 ms-2 text-light">
              <img
                src={adminLTELogo}
                className="me-1 p-1 "
                width="40"
                height="40"
                alt="admin-logo"
              />

              <b>ClickSail . </b>
              <small>Dashboard</small>
            </span>
          </Link>
        </div>

        <div className="border-bottom border-secondary p-3 px-4 py-3 ">
          <Link to="#" className="text-white text-decoration-none ">
            <FaUserTie size={25} className="me-3" />
            <span className="logo brand-text texy-grey font-weight-heavy">
              <b> Welcome , </b>
              <small> Admin</small>
            </span>
          </Link>
        </div>
        <div className="search w-fit-content border-secondary p-1">
          <InputGroup className=" p-2 ">
            <Form.Control
              placeholder="Search..."
              aria-label="Search"
              className="input-group-sm"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>

        <Accordion className="p-2">
          {tiles.map((tile) => (
            <Accordion.Item
              eventKey={tile.eventKey}
              className="accordion-item mb-1 border-0 "
            >
              <Accordion.Header className="accordion-header bg-red rounded-3 mb-1">
                <div className="me-1 ">{tile.icon}</div>
                {tile.name}
              </Accordion.Header>
              <Accordion.Body className="bg-black text-white">
                <ul className="list-unstyled">
                  <li className="mb-3 ">
                    <FaRegCircle className="ms-2 me-2" /> {tile.child1}
                  </li>
                  <li>
                    <FaRegCircle className="ms-2 me-2" /> {tile.child2}
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default AdminSidebar;
