import React , { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { IoMdArrowRoundBack, IoMdTime, IoMdCheckmarkCircleOutline, IoMdClose, IoMdList } from "react-icons/io"; // Import IoMdList from react-icons/io
import {transactionList} from "../../../adminStore/salesApi/salesApiSlice";
import { useDispatch, useSelector } from "react-redux";

const Transactions = () => {
  // Dummy data for table (replace with actual data)
  const { transactions, loading, error } = useSelector((state) => state.sales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionList());
  }, [dispatch]);

 
  const getStatusComponents = (status) => {
    let statusIcon, statusText;

    switch (status) {
      case 0:
        statusIcon = <IoMdTime />;
        statusText = "Pending";
        break;
      case 1:
        statusIcon = <IoMdCheckmarkCircleOutline />;
        statusText = "Completed";
        break;
      default:
        statusIcon = <IoMdClose />;
        statusText = "Unauthorized";
        break;
    }

    return { statusIcon, statusText };
  };

  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Row>
          <Col>
            <h1 className="p-2">
              <IoMdList /> Transactions {/* Replace IoListCircleSharp with IoMdList */}
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center">
          <Col className="d-flex justify-content-end">
            <Button className="bg-danger border-0 d-flex justify-content-center">
              <IoMdArrowRoundBack className="me-1 sm-1" />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table striped bordered rounded hover className="px-2 py-1 mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Transaction ID</th>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions?.transactions?.map((transaction, index) => (
                  <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td>{index + 1}</td>
                    <td>{transaction.id}</td>
                    <td>{transaction.order_id}</td>
                    <td>{transaction.created_at ? transaction.created_at :"-"}</td>
                    <td>{transaction.total_price}</td>
                    <td>
                      {getStatusComponents(transaction.status).statusIcon}{" "}
                      {getStatusComponents(transaction.status).statusText}
                    </td>
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

export default Transactions;
