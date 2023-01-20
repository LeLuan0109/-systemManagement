import { LoginOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber } from "antd";
import axios from "axios";
import swal from "sweetalert";
function UpdateCourse({ id }) {
  const UpdateCourseByid = async (values) => {
    axios({
      method: "put",
      url: "http://localhost:8080/api/v1/courses/" + id,
      data: {
        CourseName: values?.CourseName,

        HoursOfTheory: values?.HoursOfTheory,
        HoursOfPractice: values?.HoursOfPractice,
        TrainerInfo: values?.TrainerInfo,
        Description: values?.Description,
        DurListOfSkillsation: [values?.ListOfSkills],
        NumberOfEnrollment: values?.NumberOfEnrollment,
        Type: values?.Type,
      },
    })
      .then((res) => {
        swal({
          title: "Thành công",
          icon: "success",
          dangerMode: true,
        });
      })
      .catch((err) => {
        console.log("Đây là lỗi", err);
      });
  };
  const onFinish = (values) => {
    UpdateCourseByid(values);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Course Name"
          name="CourseName"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Duration"
          name="Duration"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Hours Of Theory"
          name="HoursOfTheory"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Hours Of Practice"
          name="HoursOfPractice"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Trainer Info"
          name="TrainerInfo"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="Description"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="List Of Skills"
          name="ListOfSkills"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Number Of Enrollment"
          name="NumberOfEnrollment"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Type"
          name="Type"
          rules={[
            {
              required: true,
              message: "Vui lòng không bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button icon={<LoginOutlined />} type="primary" htmlType="submit">
          Sửa khóa học
        </Button>
      </Form>
    </div>
  );
}

export default UpdateCourse;
