import mongoose from "mongoose";

export interface AdminInterface {
  username: string;
  password: string;
}

const adminSchema = new mongoose.Schema<AdminInterface>({
  username: String,
  password: String,
});

export default mongoose.model<AdminInterface>("Admin", adminSchema);
