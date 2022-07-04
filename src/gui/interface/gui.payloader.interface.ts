import homeResponse from "../response/home.response";
import loginResponse from "../response/login.response";
import messageResponse from "../response/message.response";
import messagesResponse from "../response/messages.response";
import signupResponse from "../response/signup.response";

export default interface IGuiPayloader {
  home(): homeResponse;
  login(): loginResponse;
  signup(): signupResponse;
  message(): messageResponse;
  messages(): messagesResponse;
}
