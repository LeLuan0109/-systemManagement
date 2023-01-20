import Icon from "@ant-design/icons/lib/components/Icon";
import { Form, Table, Input, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import UpdateStudent from "./UpdateStudent";
const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "id",
  },
  {
    title: "Username",
    dataIndex: "Username",
    key: "Username",
  },
  {
    title: "Password",
    dataIndex: "Password",
    key: "Password",
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
  },
];
function Student() {
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    getAllAccounts();
  });
  const getAllAccounts = async () => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/accounts",
    })
      .then((res) => setAccounts(res.data))
      .catch((err) => console.log("Đây là lỗi", err));
  };
  const getAccount = async (value) => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/accounts/" + value?.id,
    })
      .then((res) => setAccount(res.data))
      .catch((err) => console.log("Đây là lỗi", err));
  };

  const updateAccount = async () => {
    axios({
      method: "put",
      url: "http://localhost:8080/api/v1/accounts/" + account?._id,
      data: {
        Username: account?.Username,
        Password: password,
        Role: "hocvien",
      },
    })
      .then((res) => {
        console.log("cap nhat thanh cong ");
      })
      .catch((err) => {
        console.log("Đây là lỗi", err);
      });
  };

  const onchange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const onFinish = (value) => {
    getAccount(value);
  };
  const onFinishFailed = (errorInfo) => {
    swal({
      title: "Chưa nhập đủ thông tin",

      icon: "warning",
      dangerMode: true,
    });
  };

  return (
    <div>
      <Table
        loading={accounts.length > 0 ? false : true}
        columns={columns}
        dataSource={accounts}
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
          label="Nhập mã khóa học"
          name="id"
          rules={[{ required: true, message: "vui lòng nhập id!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
        </Form.Item>
      </Form>
      {account === null ? (
        <></>
      ) : (
        <div style={{ marginBottom: 100 }}>
          <h2>Thông tin chi tiết</h2>
          <div
            style={{
              marginLeft: 100,
              lineHight: 2.5,
              display: "flex",
              flexDirection: "column",
              fontSize: "18px",
              lineHeight: "2",
            }}
          >
            <div>id: {account?._id}</div>
            <div>Username: {account?.Username}</div>
            <div>Password: {account?.Password}</div>
            <div>Role: {account?.Role}</div>
          </div>
          <h3> cập nhật mật khẩu mới</h3>
          <Input.Password onChange={onchange} />
          <Button onClick={() => updateAccount()}>
            Bạn có muốn đổi mật khẩu
          </Button>
        </div>
      )}
    </div>
  );
}

export default Student;
