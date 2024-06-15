import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },

  email: { type: String, required: true, unique: true },

  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },

  lastSignInAt: { type: Number, required: false },
  createdAt: { type: Number, required: false },
  updatedAt: { type: Number, required: false },
});

const User = models.User || model("User", userSchema);

export default User;
