import { Button, Form, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Projects = () => {
  return (
    <div>
      {/* PROJECTS*/}
      <h5>
        <b>Projects</b>
      </h5>
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  {/* TITLE*/}
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Title",
                        },
                      ]}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="col-md-5">
                    <Form.Item
                      {...restField}
                      name={[name, "description"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Description",
                        },
                      ]}
                    >
                      <TextArea placeholder="Description" />
                    </Form.Item>
                  </div>

                  {/* YEAR RANGE */}
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Year Range",
                        },
                      ]}
                    >
                      <Input placeholder="Year Range" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <AiOutlineMinusCircle
                      size={25}
                      style={{ color: "tomato", cursor: "pointer" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                className="d-flex justify-content-around align-items-center"
                type="dashed"
                onClick={() => add()}
                block
                icon={<AiOutlinePlusCircle />}
              >
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default Projects;
