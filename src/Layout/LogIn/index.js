import { Form, Input, Button } from "antd";
import { useAppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const { user, setUser } = useAppContext();

  const navigate = useNavigate();

  const checkUser = async (username) => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/auth/" + username,
    })
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Đây là lỗi", err));
  };
  const checkUserAccontbyAccountInfo = async (values) => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/v1/auth/signin",
      data: {
        Username: values?.username,
        Password: values?.password,
      },
    }).then((res) => {
      if (
        res.data === "Username Not Found!" ||
        res.data === " Wrong password!"
      ) {
        console.log("sai tai khoan ");
      } else {
        if (res.data === "Login successfully with role: admin") {
          navigate("/admin");
        } else if (res?.data === "Login successfully with role: giangvien") {
          navigate("/giangvien");
        } else if (res?.data === "Login successfully with role: qlcc") {
          navigate("/qlcc");
        } else if (res?.data === "Login successfully with role: hocvien") {
          navigate("/");
        }
        checkUser(values?.username);
      }
    });
  };
  const onFinish = (values) => {
    checkUserAccontbyAccountInfo(values);
  };
  const onFinishFailed = (error) => {
    console.log("chua nhap du thong tin ", error);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form
          style={{ width: 600 }}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
