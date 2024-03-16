import { Button, Form, Input, Space } from "antd";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const SkillsEducation = () => {
  return (
    <div>
      {/* EDUCATION FORM FIELDS */}
      <h5>
        <b>Education</b>
      </h5>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  {/* QUALIFICATION */}
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "qualification"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Qualification",
                        },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>
                  {/* PERCENTAGE */}
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "percentage"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Percentage",
                        },
                      ]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>
                  </div>

                  {/* INSTITUTION */}
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "institution"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Institution",
                        },
                      ]}
                    >
                      <Input placeholder="Institution" />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      {/* SKILLS FORM FIELDS */}
      <h5>
        <b>Skills</b>
      </h5>
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  {/* TECHNOLOGY */}
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "technology"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Technology",
                        },
                      ]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>
                  </div>
                  {/* RATING */}
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Rating",
                        },
                      ]}
                    >
                      <Input placeholder="Rating" />
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
                className="d-flex justify-content-center gap-2 align-items-center"
                type="dashed"
                onClick={() => add()}
                block
                icon={<AiOutlinePlusCircle />}
              >
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default SkillsEducation;
