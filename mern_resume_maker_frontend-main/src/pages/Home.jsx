import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import template1 from "../resources/templates/template1.png";
import template2 from "../resources/templates/template2.png";

const Home = () => {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Resume 1",
      image: template1,
    },
    {
      title: "Resume 2",
      image: template2,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div key={index} className="col-md-4 ">
              <div className="template">
                <img
                  src={template.image}
                  alt="template thumbnail"
                  className="img-fluid"
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
};

export default Home;
