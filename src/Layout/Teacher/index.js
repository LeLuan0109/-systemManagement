import { useAppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";
import Course from "../Admin/Course/Course";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import LogoutOutlined from "@ant-design/icons";
function Teacher() {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const [index, SetIndex] = useState(0);
  const logout = () => {
    navigate("/dangnhap");
  };
  return (
    <div>
      {user === null ? (
        <div>
          <Result
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
            <div style={{ color: "#fff" }}>Chào mừng bạn: {user?.Username}</div>
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
                  icon={<LogoutOutlined />}
                  style={{ background: "rgb(2, 173, 252)", color: "#fff" }}
                  onClick={() => logout()}
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
                  </div>
                </div>
                <div style={{ marginLeft: 300, marginTop: 100 }}>
                  {index === 0 ? <Course /> : <></>}
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      )}
    </div>
  );
}

export default Teacher;
