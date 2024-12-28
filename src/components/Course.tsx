import { useRouter } from "next/router";
import { Button, Card, Typography } from "@mui/material";
import { CourseInterface } from "@/types/common";

const Course = ({ course }: { course: CourseInterface }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push("/course/" + course._id);
  };

  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20,
      }}
    >
      <Typography textAlign={"center"} variant="h5">
        {course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {course.description}
      </Typography>
      <img src={course.imageLink} style={{ width: 300 }}></img>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button variant="contained" size="large" onClick={handleEdit}>
          Edit
        </Button>
      </div>
    </Card>
  );
};

export default Course;
