import mongoose from "mongoose";

export interface CourseInterface extends mongoose.Document {
  title: string;
  description: string;
  price: number;
  chapters: number;
  imageLink: string;
  published: boolean;
}

const courseSchema = new mongoose.Schema<CourseInterface>({
  title: {
    type: String,
    trim: true,
    minLength: 5,
    maxLength: 40,
    required: [true, "Course name is requied"],
  },
  price: {
    type: Number,
    min: 500,
    max: 10000,
    required: [true, "Course price is requied"],
  },
  chapters: {
    type: Number,
    min: 1,
    required: [true, "Chapter count is required"],
  },
  description: {
    type: String,
    minLength: 20,
    maxLength: 200,
  },
});

export default mongoose.models.Course ||
  mongoose.model<CourseInterface>("Course", courseSchema);
