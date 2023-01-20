import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../App";
function CourseItem(props) {
  const { course, setCourse } = useAppContext();
  const Navigate = useNavigate();
  const hanldeSetCourse = () => {
    setCourse({ id: props?.id });
    Navigate("/chitietkhoahoc");
  };

  return (
    <div className="item" style={{ display: "flex", margin: " 30px 20px" }}>
      <div
        style={{
          width: 500,
          height: 200,
          wordWrap: " beark-word",
          border: "1px solid  #ccc",
          wordBreak: "break-word",

          overflow: "hidden",
          padding: "8px 16px ",
          cursor: "pointer",
          backgroundColor: "#fff",
        }}
        onClick={() => hanldeSetCourse()}
      >
        <p style={{ fontSize: 25, marginTop: 20 }}>
          CourseName: {props?.CourseName}
        </p>
        <p>Duration: {props?.Duration}</p>
        <p style={{ textOverflow: "ellipsis" }}>
          Description: {props?.Description}
        </p>
      </div>
    </div>
  );
}

export default CourseItem;
