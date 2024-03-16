import { Button, Dropdown } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/defaultlayout.css";
import { RxResume } from "react-icons/rx";

// For content div we have to pass the 'page as props
// from Home Component as its rendering DefaultLayout
const DefaultLayout = (props) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("resume-user"));
  const items = [
    {
      key: "1",
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/profile">Profile</Link>,
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("resume-user");
            navigate("/login");
          }}
        >
          {" "}
          Logout
        </span>
      ),
    },
  ];

  return (
    <div className="layout">
      <div className="header">
        <h2
          onClick={() => navigate("/home")}
          className="d-flex justify-content-center align-items-center gap-2 "
        >
          <RxResume />
          Resume Maker
        </h2>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
