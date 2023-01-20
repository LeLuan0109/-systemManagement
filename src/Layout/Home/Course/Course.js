import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseItem from "./CourseItem";
function Course() {
  const Navigate = useNavigate();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = async () => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/v1/courses",
    })
      .then((res) => setCourse(res?.data))
      .catch((err) => console.log("đây là lỗi"));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {course.map((c, index) => {
        return (
          <CourseItem
            key={index}
            id={c?._id}
            CourseName={c?.CourseName}
            Duration={c?.Duration}
            Description={c?.Description}
          ></CourseItem>
        );
      })}
    </div>
  );
}

export default Course;
