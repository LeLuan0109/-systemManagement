import { Button, Form, Input } from "antd";
import axios from "axios";
import swal from "sweetalert";
function AddStudent() {
  const AddAccountStudent = async (values) => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/v1/accounts",
      data: {
        Username: values?.Username,
        Password: values?.Password,
        Role: "hocvien",
      },
    }).then((res) => {
      swal({
        title: "Tạo tài khoản thành công ",
        icon: "success",
        dangerMode: true,
      }).catch((err) => console.log("Đây là lỗi", err));
    });
  };
  const onFinish = (values) => {
    console.log(values);
    AddAccountStudent(values);
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
      <h2>Thêm tài khoản</h2>
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
          label="User name"
          name="Username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pass word"
          name="Password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm tài khoản
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddStudent;
