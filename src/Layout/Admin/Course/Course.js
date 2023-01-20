import { Button, Form, Input, Table } from "antd";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import UpdateCourse from "./UpdateCourse";
import swal from "sweetalert";
const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "id",
  },
  {
    title: "Course Name",
    dataIndex: "CourseName",
    key: "CourseName",
  },
  {
    title: "Duration",
    dataIndex: "Duration",
    key: "Duration",
  },
  {
    title: "Hours Of Theory",
    dataIndex: "HoursOfTheory",
    key: "HoursOfTheory",
  },
  {
    title: "Hours Of Practice",
    dataIndex: "HoursOfPractice",
    key: "HoursOfPractice",
  },
  {
    title: "Trainer Info",
    dataIndex: "TrainerInfo",
    key: "TrainerInfo",
  },
  {
    title: "Type",
    dataIndex: "Type",
    key: "Type",
  },
  {
    title: "Number Of Enrollment",
    dataIndex: "NumberOfEnrollment",
    key: "NumberOfEnrollment",
  },
  {
    title: "Start Date",
    dataIndex: "StartDate",
    key: "StartDate",
  },
  {
    title: "End Date",
    dataIndex: "EndDate",
    key: "EndDate",
  },
];
function Course() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    getAllCourses();
  });

  const getAllCourses = async () => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/courses",
    })
      .then((res) => setCourses(res?.data))
      .catch((err) => console.log("Đây là lỗi", err));
  };

  const getCourseById = async (value) => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/courses/" + value?.id,
    })
      .then((res) => setCourse(res?.data))
      .catch((err) => console.log("Đây là lỗi", err));
  };

  const removeCourseById = async (string) => {
    axios({
      method: "delete",
      url: "http://localhost:8080/api/v1/courses/" + string,
    })
      .then((res) => {
        swal({
          title: "Đã xóa",
          icon: "success",
          dangerMode: true,
        });
      })
      .catch((err) => console.log("Đây là lỗi", err));
  };
  const onFinish = (value) => {
    getCourseById(value);
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
        style={{ width: 800 }}
        loading={courses.length > 0 ? false : true}
        columns={columns}
        dataSource={courses}
      />
      <h2 style={{ marginTop: 30, marginLeft: 100, marginBottom: 30 }}>
        tìm kiếm khóa học
      </h2>
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
      {course == null ? (
        <div></div>
      ) : (
        <div style={{ marginBottom: 100 }}>
          <h2> thông tin khóa học</h2>
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
            <div>id: {course?._id}</div>
            <div>CourseName: {course?.CourseName}</div>
            <div>Duration: {course?.Duration}</div>
            <div>HoursOfPractice: {course?.HoursOfPractice}</div>
            <div>HoursOfTheory: {course?.HoursOfTheory}</div>
            <div>HoursOfTheory: {course?.NumberOfEnrollment}</div>
            <div>HoursOfTheory: {course?.TrainerInfo}</div>
            <div>HoursOfTheory: {course?.Type}</div>
            <Button onClick={() => removeCourseById(course?._id)}>
              Bạn có muốn xóa khóa học không
            </Button>
          </div>
          <h2>Chỉnh sửa khóa học </h2>
          <UpdateCourse id={course?._id} />
        </div>
      )}
    </div>
  );
}

export default Course;
