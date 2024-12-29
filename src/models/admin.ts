import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export interface AdminInterface {
  name: string;
  email: string;
  password: string;
}

const adminSchema = new mongoose.Schema<AdminInterface>({
  name: {
    type: String,
    required: [true, "User name is required"],
    minLength: [5, "User name should have atleast 5 characters"],
    maxLength: [30, "User name should have atmost 30 characters"],
  },
  email: {
    type: String,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: [true, "Admin Email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    minLength: [6, "Password should be atleast 6 characters"],
    maxLength: [10, "Password should atmost contain 10 characters"],
    required: [true, "Password is required"],
  },
});

adminSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

adminSchema.methods.createJWTToken = function () {
  return jwt.sign(
    {
      name: this.name,
      userId: this._id,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
};

export default mongoose.models.Admin ||
  mongoose.model<AdminInterface>("Admin", adminSchema);
