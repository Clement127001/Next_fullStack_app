import mongoose from "mongoose";

export interface UserInterface {
  username: string;
  password: string;
  purchasedcourses: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<UserInterface>({
  username: { type: String },
  password: String,
  purchasedcourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

export default mongoose.model<UserInterface>("User", userSchema);
