import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  removeCartItem,
  showCart,
} from "../../../store/productAPI/productApiSlice";

const ShowCart = () => {
  const dispatch = useDispatch();
  const { productDetails, loading, error } = useSelector(
    (state) => state.products
  );

  const [showDeleteModal, setShowDeleteModal] = useState(null);

  useEffect(() => {
    dispatch(showCart());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDeleteConfirmation = (id) => {
    setShowDeleteModal(id);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(null);
  };

  const handleDeleteItem = (id) => {
    // Handle deleting carts from cart
    dispatch(removeCartItem(id));
    handleCloseDeleteModal();
  };

  const handleQuantityChange = (id, newQuantity) => {
    // Update the quantity of the specific carts in the cart
    // Implementation will depend on your Redux state management
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const pincode = formData.get("pincode");

    if (name && phone && address && pincode) {
      // Perform further processing like submitting data to server
      console.log("Form submitted with:", { name, phone, address, pincode });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="container" style={{ paddingBottom: "100px" }}>
      <div className="mt-5"></div>
      <Row>
        <Col md={6}>
          <div style={{ padding: "50px" }}>
            <Form onSubmit={handleSubmit}>
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-dark fs-5 p-3">Product Name</th>
                    <th className="text-dark fs-5 p-3">Quantity</th>
                    <th className="text-dark fs-5 p-3">Price</th>
                    <th className="text-dark fs-5 p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productDetails?.map((carts) => (
                    <tr key={carts.id}>
                      <td style={{ padding: "20px 20px", fontSize: "13px" }}>
                        <p className="mb-1">{carts.product_title}</p>
                      </td>
                      <td style={{ padding: "13px", fontSize: "15px" }}>
                        <Form.Control
                          type="number"
                          min="1"
                          max="5"
                          name="quantity[]"
                          value={carts.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              carts.id,
                              parseInt(e.target.value)
                            )
                          }
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td style={{ padding: "13px", fontSize: "12px" }}>
                        <span className="total-price">
                          Rs.{carts.quantity * carts.price}/-
                        </span>
                      </td>
                      <td style={{ padding: "10px", fontSize: "15px" }}>
                        <Button
                          variant="link"
                          className="text-danger"
                          onClick={() => handleDeleteConfirmation(carts.id)}
                        >
                          <RiDeleteBinLine size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div style={{ padding: "40px" }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="pt-3">Name:</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="pt-3">Mobile:</Form.Label>
                <Form.Control
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10,}"
                  required
                />
                <Form.Text className="text-muted">
                  Please enter a valid 10-digit mobile number.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="pt-3">Address:</Form.Label>
                <Form.Control
                  as="textarea"
                  id="address"
                  name="address"
                  rows="4"
                  placeholder="Enter your address"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="pt-3">Pincode:</Form.Label>
                <Form.Control
                  type="text"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter your pincode"
                  pattern="[0-9]{6,}"
                  title="Please enter a valid 6-digit pincode"
                  required
                />
                <Form.Text className="text-muted">
                  Please enter a valid 6-digit pincode.
                </Form.Text>
              </Form.Group>
              <Button
                className="rounded-pill mt-3 px-5 py-3 bt-success btn-success"
                type="submit"
              >
                Confirm Order
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Modals for delete confirmation */}
      {/* <ul>
        {productDetails && productDetails.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul> */}

      {productDetails?.map((carts) => (
        <Modal
          key={carts.id}
          show={showDeleteModal === carts.id}
          onHide={handleCloseDeleteModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body className="h6">
            Are you sure you want to remove this carts?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill mt-3 px-4 py-2 me-3"
              onClick={handleCloseDeleteModal}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              className="rounded-pill mt-3 px-4 py-2 me-3"
              onClick={() => handleDeleteItem(carts.id)}
            >
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </div>
  );
};

export default ShowCart;
