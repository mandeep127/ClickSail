import React, { useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import {
  FaUser,
  FaProductHunt,
  FaSearch,
  FaRegCircle,
  FaUserTie,
} from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdInventory2 } from "react-icons/md";

import adminLTELogo from "../../assets/AdminLTELogo.png";

const AdminSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTiles, setFilteredTiles] = useState([]);
  const [showNoDataFound, setShowNoDataFound] = useState(false); // State to manage "No Data Found" message

  const tiles = [
    {
      eventKey: 0,
      name: "User Management",
      icon: <FaUser />,
      child1: "User List",
      child2: "Add User",
      link1: "/admin/user/list",
      link2: "/admin/user/add",
    },
    {
      eventKey: 1,
      name: "Categories Management",
      icon: <BiSolidCategoryAlt />,
      child1: "Categories",
      child2: "Subcategories",
      link1: "/admin/categories/list",
      link2: "/admin/subcategories/list",
    },
    {
      eventKey: 2,
      name: "Product Management",
      icon: <FaProductHunt />,
      child1: "Product List",
      child2: "Add Product",
      link1: "/admin/product/list",
      link2: "/admin/product/add",
    },
    {
      eventKey: 3,
      name: "Sales Management",
      icon: <MdInventory2 />,
      child1: "Orders",
      child2: "Transactions",
      link1: "/admin/sales/list",
      link2: "/admin/transactions/list",
    },
  ];

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query === "") {
      setFilteredTiles([]);
      setShowNoDataFound(false); // Reset "No Data Found" message
    } else {
      const filtered = tiles.filter((tile) =>
        tile.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTiles(filtered);
      setShowNoDataFound(filtered.length === 0); // Show message if no results found
    }
  };

  const handleSearchButtonClick = () => {
    if (searchQuery === "") {
      setFilteredTiles([]);
      setShowNoDataFound(false); // Reset "No Data Found" message
    } else {
      const filtered = tiles.filter((tile) =>
        tile.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTiles(filtered);
      setShowNoDataFound(filtered.length === 0); // Show message if no results found
    }
  };

  return (
    <>
      <div className="sidebar-side h-100 p-1 justify-content-center align-items-center">
        <div className="border-bottom border-secondary p-2 px-2">
          <Link
            to="/admin/dashboard"
            className="text-white text-decoration-none"
          >
            <span className="logo brand-text font-weight-heavy fs-5 mt-3 ms-2 text-light">
              <img
                src={adminLTELogo}
                className="me-1 p-1"
                width="40"
                height="40"
                alt="admin-logo"
              />
              <b>ClickSail . </b>
              <small>Dashboard</small>
            </span>
          </Link>
        </div>

        <div className="border-bottom border-secondary p-3 px-4 py-3">
          <Link to="/admin/profile" className="text-white text-decoration-none">
            <FaUserTie size={25} className="me-3" />
            <span className="logo brand-text texy-grey font-weight-heavy">
              <b> Welcome , </b>
              <small> Admin</small>
            </span>
          </Link>
        </div>

        <div className="search w-fit-content border-secondary p-1">
          <InputGroup className="p-2">
            <Form.Control
              placeholder="Search..."
              aria-label="search"
              className="input-group-sm"
              aria-describedby="basic-addon2"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={handleSearchButtonClick}
            >
              <FaSearch />
            </Button>
          </InputGroup>

          {/* Display "No Data Found" message if no results */}
          {showNoDataFound && (
            <div className="mt-1 text-center text-white">No Data Found !</div>
          )}

          {/* Display search results */}
          {!showNoDataFound && searchQuery && filteredTiles.length > 0 && (
            <div className="dropdown mt-2">
              <ul className="list-unstyled">
                {filteredTiles.map((tile) => (
                  <li key={tile.eventKey}>
                    <Link
                      to={tile.link1}
                      className="text-white text-decoration-none d-block p-2"
                    >
                      <FaSearch className="ms-2 me-2" /> {tile.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Accordion className="p-2">
          {tiles.map((tile) => (
            <div key={tile.eventKey} className="hover-effect">
              <Accordion.Item
                eventKey={tile.eventKey}
                className="accordion-item mb-1 border-0"
              >
                <Accordion.Header className="accordion-header bg-red rounded-3 mb-1">
                  <div className="me-1">{tile.icon}</div>
                  {tile.name}
                </Accordion.Header>
                <Accordion.Body className="bg-black text-white">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link
                        to={tile.link1}
                        className="text-white text-decoration-none"
                      >
                        <FaRegCircle className="ms-2 me-2" /> {tile.child1}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={tile.link2}
                        className="text-white text-decoration-none"
                      >
                        <FaRegCircle className="ms-2 me-2" /> {tile.child2}
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default AdminSidebar;
