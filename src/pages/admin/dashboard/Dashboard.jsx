import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaUserPlus, FaArrowCircleRight } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { GrProductHunt } from "react-icons/gr";
import { GiJerusalemCross } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dashboardData } from "../../../adminStore/dashboardApi/dashboardApiSlice";

const Dashboard = () => {
  const { data, loading, error } = useSelector((state) => state.dashboard);
  console.log(data, "fdgd");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardData());
  }, []);

  const dashboardTiles = [
    {
      name: "Users",
      value: data ? data.Users : "0",
      icon: <FaUserPlus size={60} />,
      link: "/admin/user/list",
      color: "#490F0F",
      bgcolor: "#FB8B24",
      tilebgcolor: "#CE7018",
    },
    {
      name: "Categories",
      value: data ? data.Categories : "0",
      icon: <BiSolidCategoryAlt size={60} />,
      link: "/admin/categories/list",
      color: "white",
      bgcolor: "#D90368",
      tilebgcolor: "#C1045C",
    },
    {
      name: "Product",
      value: data ? data.Products : "0",
      icon: <GrProductHunt size={60} />,
      link: "/admin/product/list",
      color: "white",
      bgcolor: "#04A777",
      tilebgcolor: "#039569",
    },
    {
      name: "Sales",
      value: data ? data.Orders : "0",
      icon: <GiJerusalemCross size={60} />,
      link: "/admin/sales/list",
      color: "black",
      bgcolor: "#FFC6D9",
      tilebgcolor: "#FF9FBF",
    },
  ];


  return (
    <>
      <Container fluid className="d-flex flex-column ">
        <Row>
          <Col>
            <h1 className="p-2">Dashboard</h1>
            <h6 className="p-1 mb-2 text-end">Home</h6>
          </Col>
        </Row>
        <Row>
          {dashboardTiles.map((dashboardTile, index) => (
            <Col key={index} xs lg="3">
              <div className="d-flex flex-column border-0 custom-container rounded">
                <div
                  className="dashboardTileRow d-flex flex-row border-0 justify-content-between rounded-top p-2"
                  style={{
                    backgroundColor: dashboardTile.bgcolor,
                    color: dashboardTile.color,
                  }}
                >
                  <div className="d-flex flex-column border-0 custom-sub-container rounded p-2">
                    <div className="h3">{dashboardTile.value}</div>
                    <div className="h5">{dashboardTile.name}</div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center text-end p-2">
                    {dashboardTile.icon}
                  </div>
                </div>
                <div
                  className="text-center p-2 "
                  style={{
                    backgroundColor: dashboardTile.tilebgcolor,
                    color: dashboardTile.color,
                  }}
                >
                  <Link
                    to={dashboardTile.link}
                    className="text-decoration-none "
                    style={{ color: dashboardTile.color }}
                  >
                    More info <FaArrowCircleRight />
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <h2 className="px-2 py-1 mt-3">Users </h2>
            <h6 className="px-2 py-1">
              <MdCalendarMonth />
              current month
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered rounded hover className="px-2 py-1 mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>E-mail</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {data?.Recent_users?.map((user, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt ? user.createdAt : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
