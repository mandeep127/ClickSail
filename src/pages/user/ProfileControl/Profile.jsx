import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FaKey, FaEdit } from "react-icons/fa";
import UserImg from "../../../assets/profile.png";

const dummyUserData = {
  name: "John Doeh",
  username: "johndoe123",
  email: "john.doe@example.com",
  createdAt: "2023-06-15T12:00:00Z",
  updatedAt: "2023-07-01T15:30:00Z",
};

const Profile = () => {
  return (
    <Container className="mt-4 mb-4 p-3 d-flex justify-content-center">
      <Card className="p-4">
        <div className="image d-flex flex-column justify-content-center align-items-center">
          <img src={UserImg} height="100" width="100" alt="Profile" />
          <span className="name mt-3">
            <b>{dummyUserData.name}</b>
          </span>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">Name: {dummyUserData.name}</span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">User Id: {dummyUserData.username}</span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">
              Email: <b>{dummyUserData.email}</b>
            </span>
          </div>

          <form action="/changepassword" method="get">
            <div className="d-flex mt-2">
              <Button variant="primary" size="sm">
                Change Password <FaKey />
              </Button>
            </div>
          </form>

          <form action="/profile/edit" method="get">
            <div className="d-flex mt-2">
              <Button type="submit" variant="primary" size="sm">
                Edit Profile <FaEdit />
              </Button>
            </div>
          </form>

          <div className="text mt-3">
            <span>
              Welcome {dummyUserData.name}! Check new products on the home page.
            </span>
          </div>

          <div className="px-2 rounded mt-4 date">
            <span className="join">
              Joined{" "}
              <u>{new Date(dummyUserData.createdAt).toLocaleDateString()}</u>
            </span>
          </div>
          <div className="px-2 rounded mt-4 date">
            <span className="idd1">
              Last Updated:{" "}
              <u>
                {new Date(dummyUserData.updatedAt).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </u>
            </span>
          </div>

          <Button
            className="btn btn-default logoutModal"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <b>Logout</b>
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Profile;
