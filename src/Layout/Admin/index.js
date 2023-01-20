import Course from "./Course/Course";
import Student from "./Student/Student";
import AddCourse from "./Course/AddCourse";
import AddStudent from "./Student/AddStudent";
import { useAppContext } from "../../App";
import { Button, Layout, Menu, Result } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Admin() {
  const { user, setUser } = useAppContext();
  const [index, SetIndex] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {user === null ? (
          <div>
            <Result
              style={{ marginTop: 200 }}
              title="bạn cần đăng nhập để sử dụng !"
              extra={
                <Button
                  type="primary"
                  key="console"
                  onClick={() => navigate("/dangnhap")}
                >
                  Đăng nhập
                </Button>
              }
            />
          </div>
        ) : (
          <Layout>
            <Header
              style={{
                zIndex: 5,
                position: "fixed",
                right: 0,
                left: 0,
                top: 0,
                backgroundColor: "rgb(2, 173, 252)",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <div style={{ color: "#fff" }}>
                Chào mừng bạn: {user?.Username}
              </div>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{
                  lineHeight: "64px",
                  float: "right",
                  backgroundColor: "rgb(2, 173, 252)",
                  color: "#fff",
                  marginTop: -70,
                }}
              >
                <Menu.Item key="1">
                  <Button
                    onClick={() => navigate("/dangnhap")}
                    icon={<LogoutOutlined />}
                    style={{ background: "rgb(2, 173, 252)", color: "#fff" }}
                  >
                    Đăng xuất
                  </Button>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ marginTop: 64, padding: "0 50px 0px 0" }}>
              <div>
                <div
                  style={{
                    background: "#fff",
                    minHeight: 585,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      minHeight: 400,
                      background: "rgba(0, 0, 0, 0.04)",
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      padding: "10px 10px 10px 10px",
                      marginTop: 64,
                      position: "fixed",
                      top: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: 200,
                        flexDirection: "column",
                        padding: 20,
                      }}
                    >
                      <Button
                        onClick={() => SetIndex(0)}
                        style={{
                          marginTop: 10,
                          backgroundColor: index === 0 ? "#008bfc" : "#fff",
                          color: index === 0 ? "#fff" : "#000",
                        }}
                      >
                        Khóa học
                      </Button>
                      <Button
                        onClick={() => SetIndex(1)}
                        style={{
                          marginTop: 10,
                          backgroundColor: index === 1 ? "#008bfc" : "#fff",
                          color: index === 1 ? "#fff" : "#000",
                        }}
                      >
                        Thêm khóa học
                      </Button>
                      <Button
                        onClick={() => SetIndex(2)}
                        style={{
                          marginTop: 10,
                          backgroundColor: index === 2 ? "#008bfc" : "#fff",
                          color: index === 2 ? "#fff" : "#000",
                        }}
                      >
                        Học viên
                      </Button>
                      <Button
                        onClick={() => SetIndex(3)}
                        style={{
                          marginTop: 10,
                          backgroundColor: index === 3 ? "#008bfc" : "#fff",
                          color: index === 3 ? "#fff" : "#000",
                        }}
                      >
                        Thêm học viên
                      </Button>
                    </div>
                  </div>
                  <div style={{ marginLeft: 300, marginTop: 100 }}>
                    {index === 0 ? (
                      <Course />
                    ) : index === 1 ? (
                      <AddCourse />
                    ) : index === 2 ? (
                      <Student />
                    ) : (
                      <AddStudent />
                    )}
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        )}
      </div>
    </div>
  );
}

export default Admin;
