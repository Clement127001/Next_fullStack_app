import mongoose from "mongoose";

export interface CourseInterface extends mongoose.Document {
  title: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
}

const courseSchema = new mongoose.Schema<CourseInterface>({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

export default mongoose.model<CourseInterface>("Course", courseSchema);
