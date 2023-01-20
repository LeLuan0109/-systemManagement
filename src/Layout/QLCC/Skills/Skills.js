import { Button, Form, Input, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "id",
  },
  {
    title: "SkillName",
    dataIndex: "SkillName",
    key: "SkillName",
  },
];
function Skills() {
  const [skillName, setSkillName] = useState("");
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState(null);
  useEffect(() => {
    getAllSkills();
  });
  const getAllSkills = async () => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/skills",
    })
      .then((res) => setSkills(res.data))
      .catch((err) => console.log("Đây là lỗi ", err));
  };

  const getSkillbyid = async (value) => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/skills/" + value?.id,
    })
      .then((res) => setSkill(res.data))
      .catch((err) => console.log("Đây là lỗi ", err));
  };

  const updateSkillbyid = async () => {
    axios({
      method: "put",
      url: "http://localhost:8080/api/v1/skills/" + skill?._id,
      data: {
        SkillName: skillName,
      },
    })
      .then((res) => {
        swal({
          title: "Thành công",
          icon: "success",
          dangerMode: true,
        });
      })
      .catch((err) => console.log("Đây là lỗi ", err));
  };

  const onFinish = (value) => {
    getSkillbyid(value);
  };
  const onFinishFailed = (errorInfo) => {
    swal({
      title: "Chưa nhập đủ thông tin",
      icon: "warning",
      dangerMode: true,
    });
  };
  const onchange = (e) => {
    setSkillName(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <Table
        style={{ width: 700 }}
        loading={skills.length > 0 ? false : true}
        columns={columns}
        dataSource={skills}
      />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[{ required: true, message: "Nhập vào iD !" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button n type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
        </Form.Item>
      </Form>
      {skill == null ? (
        <></>
      ) : (
        <div style={{ marginBottom: 100 }}>
          <h2> Thông tin đầy đủ</h2>
          <div style={{ lineHeight: 2.5, FontSize: 20, marginBottom: 20 }}>
            <div>ID: {skill?._id}</div>
            <div>SkillName: {skill?.SkillName}</div>
          </div>
          <h2>Chỉnh sửa</h2>
          <Input onChange={onchange} />
          <Button style={{ marginTop: 10 }} onClick={updateSkillbyid}>
            Thay đổi
          </Button>
        </div>
      )}
    </div>
  );
}

export default Skills;
