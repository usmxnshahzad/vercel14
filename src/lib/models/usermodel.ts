import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const User = models.User || model("User", userSchema);
export default User;