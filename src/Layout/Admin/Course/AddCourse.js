import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import swal from "sweetalert";
function AddCourse() {
  const addCourse = async (values) => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/v1/courses",
      data: {
        CourseName: values?.CourseName,

        Duration: values?.Duration,

        HoursOfTheory: values?.HoursOfTheory,

        HoursOfPractice: values?.HoursOfPractice,

        TrainerInfo: values?.TrainerInfo,

        ListOfPreCourses:
          values?.ListOfPreCourses === undefined
            ? null
            : [values?.ListOfPreCourses],

        Description: values?.Description,

        ListOfSkills:
          values?.ListOfSkills === undefined ? null : [values?.ListOfSkills],

        Type: values?.Type,

        NumberOfEnrollment: values?.NumberOfEnrollment,

        StartDate: values?.StartDate === undefined ? null : values?.StartDate,

        EndDate: values?.EndDate === undefined ? null : values?.EndDate,
      },
    })
      .then((res) => {
        swal({
          title: "Thành công",
          icon: "success",
          dangerMode: true,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Đây là lỗi", err);
      });
  };

  const onFinish = (values) => {
    addCourse(values);
  };
  const onFinishFailed = (err) => {
    swal({
      title: "Chưa nhập đủ thông tin",
      icon: "warning",
      dangerMode: true,
    });
  };
  return (
    <div>
      <h2>Thêm khóa học</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Course Name" name="CourseName">
          <Input />
        </Form.Item>

        <Form.Item label="Duration" name="Duration">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Hours Of Theory" name="HoursOfTheory">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Hours Of Practice" name="HoursOfPractice">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Trainer Info" name="TrainerInfo">
          <Input />
        </Form.Item>

        <Form.Item label="List Of Pre Courses" name="ListOfPreCourses">
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="Description">
          <Input />
        </Form.Item>

        <Form.Item label="List Of Skills" name="ListOfSkills">
          <Input />
        </Form.Item>

        <Form.Item label="Type" name="Type">
          <Input />
        </Form.Item>

        <Form.Item label="Number Of Enrollment" name="NumberOfEnrollment">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Start Date" name="StartDate">
          <Input />
        </Form.Item>

        <Form.Item label="End Date" name="EndDate">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm khóa học
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddCourse;
