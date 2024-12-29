import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export interface UserInterface {
  name: string;
  password: string;
  email: string;
  boughtCourse: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<UserInterface>({
  name: {
    type: String,
    trim: true,
    minLength: [5, "User name should have atleast 5 characters"],
    maxLength: [30, "User name should have atmost 30 characters"],
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: [true, "User email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    minLength: [6, "Password should be atleast 6 characters"],
    maxLength: [10, "Password should atmost contain 10 characters"],
    required: [true, "Password is required"],
  },
  boughtCourse: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    },
  ],
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

userSchema.methods.createJWTToken = function () {
  return jwt.sign(
    {
      name: this.name,
      userId: this._id,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
};

userSchema.methods.comparePassword = function (userPassword: string) {
  return bcrypt.compare(userPassword, this.password);
};

export default mongoose.models.User ||
  mongoose.model<UserInterface>("User", userSchema);
