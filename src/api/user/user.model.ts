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

UserSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.get<number>("SALT"));
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;
  return next();
});

const UserModel = mongoose.model(model.user, UserSchema);
export default UserModel;
