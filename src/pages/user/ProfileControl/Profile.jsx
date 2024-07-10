import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FaKey, FaEdit } from "react-icons/fa";
import UserImg from "../../../assets/profile.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../../../store/authAPI/authApiSlice";

const dummyUserData = {
  name: "John Doeh",
  username: "johndoe123",
  email: "john.doe@example.com",
  createdAt: "2023-06-15T12:00:00Z",
  updatedAt: "2023-07-01T15:30:00Z",
};

const Profile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("User is attempting to logout...");
    dispatch(Logout());
  };

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

          <div className="d-flex mt-2">
            <Link to="/change-password" className="text-decoration-none">
              <Button className="btn btn-success text-white rounded-pill mt-3 px-3 py-2">
                Change Password <FaKey />
              </Button>
            </Link>
          </div>

          <form action="/profile/edit" method="get">
            <div className="d-flex mt-2">
              <Button
                type="submit"
                className="btn btn-success text-white rounded-pill mt-2 px-4 py-2"
                size="sm"
              >
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
            onClick={handleLogout}
            className="btn btn-success text-white rounded-pill mt-3 px-5 py-3"
          >
            <b>Logout</b>
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Profile;
