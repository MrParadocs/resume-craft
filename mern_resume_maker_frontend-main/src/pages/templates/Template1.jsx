import React from "react";
import "../../resources/templates.css";

const Template1 = () => {
  const user = JSON.parse(localStorage.getItem("resume-user"));
  return (
    <div className="template1-parent">
      <div className="top d-flex justify-content-between ">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>
      <div className="divider mt-3"></div>
      <div className="objective mt-5">
        <h3 className="border-title">Objective</h3>
        <hr />
        <p>{user.carrierObjective}</p>
      </div>

      <div className="divider mt-3"></div>
      <div className=" education mt-5">
        <h3 className="border-title">Education</h3>
        <hr />
        {user.education.map((e) => {
          return (
            <div className="d-flex  align-items-center ">
              <h6 style={{ width: 60 }}>
                <b>{e.range}:</b>
              </h6>
              <p>
                <b>{e.qualification}</b> with <b>{e.percentage}%</b> from{" "}
                {e.institution}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>
      <div className=" projects mt-5">
        <h3 className="border-title">Projects</h3>
        <hr />
        {user.projects.map((e) => {
          return (
            <div className="d-flex flex-column justify-content-center  ">
              <h6>
                <b>
                  {e.title} [{e.range}]
                </b>
              </h6>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>
      <div className=" skills mt-5">
        <h3 className="border-title">Skills</h3>
        <hr />
        {user.skills.map((e) => {
          return <p>{e.technology}</p>;
        })}
      </div>
    </div>
  );
};

export default Template1;
