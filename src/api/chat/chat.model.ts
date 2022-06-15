import mongoose from "mongoose";
import model from "../api.model.enum";

const ChatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: model.user,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ChatModel = mongoose.model(model.chat, ChatSchema);
export default ChatModel;
