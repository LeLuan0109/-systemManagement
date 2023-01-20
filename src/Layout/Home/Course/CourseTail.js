import axios from "axios";
import { useState, useEffect } from "react";
import { useAppContext } from "../../../App";
import "./course.css";
function CourseTail() {
  const { course } = useAppContext();
  const [courseTail, setCourseTail] = useState();

  useEffect(() => {
    getCourseTail();
  });
  const getCourseTail = async () => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/courses/" + course?.id,
    })
      .then((res) => setCourseTail(res?.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="content">
        chitietkhoahoc
        <div style={{ marginTop: 50 }}>
          <table style={{}}>
            <tr>
              <th>nội dung</th>
              <th>thông tin</th>
            </tr>
            <tr>
              <th>Tên khóa học: </th>
              <th> {courseTail?.CourseName}</th>
            </tr>
            <tr>
              <th>Thời gian học:</th>
              <th> {courseTail?.Duration}</th>
            </tr>
            <tr>
              <th>Giờ học lý thuyết: </th>
              <th>{courseTail?.HoursOfTheory}</th>
            </tr>
            <tr>
              <th>Giờ học thực hành:</th>
              <th> {courseTail?.HoursOfPractice}</th>
            </tr>
            <tr>
              <th>Giản viên: </th>
              <th>{courseTail?.TrainerInfo}</th>
            </tr>
            <tr>
              <th>Kỹ năng: </th>
              <th>{courseTail?.ListOfSkills}</th>
            </tr>
            <tr>
              <th>Mô tả: </th>
              <th> {courseTail?.Description}</th>
            </tr>
            <tr>
              <th>Hình thức: </th>
              <th> {courseTail?.Type}</th>
            </tr>
            <tr>
              <th>Sô đăng ký:</th>
              <th> {courseTail?.NumberOfEnrollment}</th>
            </tr>
            <tr>
              <th>Ngày bắt đầu: </th>
              <th>{courseTail?.StartDate}</th>
            </tr>
            <tr>
              <th>Ngày kết thúc:</th>
              <th> {courseTail?.EndDate}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CourseTail;
