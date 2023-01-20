import React from "react";
import { Button, Layout } from "antd";
import Course from "./Course/Course";
import { useAppContext } from "../../App";
import { useNavigate } from "react-router-dom";
function Home() {
  const { user, setUser } = useAppContext();
  const Navigate = useNavigate();
  return (
    <div>
      <div
        className="userAction"
        style={{
          position: "fixed",

          height: 60,
          width: "100%",
          backgroundColor: "antiquewhite",
        }}
      >
        <div style={{ marginTop: 10, marginRight: 10 }}>
          {user === null ? (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "0 20px",
              }}
            >
              <Button onClick={() => Navigate("/dangnhap")}>Đăng Nhập</Button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 20px",
              }}
            >
              <div>Chào mừng bạn {user?.Username}</div>
              <Button onClick={() => setUser(null)}>Đăng xuất</Button>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ marginTop: 100 }}> Danh Sách Các Khóa Học</h2>
        <Course />
      </div>
    </div>
  );
}

export default Home;
