import axios from "axios";
import Course from "@/components/Course";
import { NEXT_URL } from "@/config";
import { CourseInterface } from "@/types/common";

const Courses = ({ courses }: { courses: CourseInterface[] }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
};

export default Courses;

export async function getServerSideProps() {
  console.log("hit here");
  const response = await axios.get(`${NEXT_URL}/api/admin/courses/`, {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  });
  console.log(response.data);

  return {
    props: {
      courses: response.data.courses,
    },
  };
}
