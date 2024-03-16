import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";

import { Button, Form, message, Spin, Tabs } from "antd";
import Projects from "../components/Projects";
import axios from "axios";

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("resume-user"));

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("resume-user", JSON.stringify(result.data));
      setLoading(false);
      message.success("Update successfull");
    } catch (error) {
      setLoading(false);
      message.error("Update failed");
    }
  };
  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h2>Update Profile</h2>
        <hr />
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: `Personal Info`,
                key: "1",
                children: <PersonalInfo />,
              },
              {
                label: `Skills and Education`,
                key: "2",
                children: <SkillsEducation />,
              },
              {
                label: `Projects`,
                key: "3",
                children: <Projects />,
              },
            ]}
          />

          <Button htmlType="submit">Update</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
