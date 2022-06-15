import mongoose from "mongoose";
import model from "../api.model.enum";

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: model.user,
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: model.chat,
    },
    readBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: model.user,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model(model.message, MessageSchema);
export default MessageModel;
