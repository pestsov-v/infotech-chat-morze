import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import model from "../api.model.enum";
import role from "./enum/user.role.enum";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: role,
      default: role.user,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model(model.user, UserSchema);
export default UserModel;
