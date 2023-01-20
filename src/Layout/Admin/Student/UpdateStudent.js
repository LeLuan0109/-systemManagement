import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
function UpdateStudent({ id, usename }) {
  const [acc, setacc] = useState(null);
  const updateAccount = async (values) => {
    axios({
      method: "put",
      url: "http://localhost:8080/api/v1/accounts/" + id,
      data: {
        Username: usename,
        Password: values?.Password,
        Role: "hocvien",
      },
    })
      .then((res) => {
        swal({
          title: "Thành công",
          icon: "success",
          dangerMode: true,
        });
        setacc(res.data);
        console.log(acc);
      })
      .catch((err) => {
        console.log("Đây là lỗi", err);
      });
  };
  const onFinish = (values) => {
    updateAccount(values);
    // console.log(values.password);
  };
  const onFinishFailed = () => {
    swal({
      title: " Chưa nhập mật khẩu",
      icon: "warning",
      dangerMode: true,
    });
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Pass word" name="Password">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thay đổi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UpdateStudent;
