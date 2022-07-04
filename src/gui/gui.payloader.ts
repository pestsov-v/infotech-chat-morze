import IGuiPayloader from "./interface/gui.payloader.interface";
import homeResponse from "./response/home.response";
import loginResponse from "./response/login.response";
import messageResponse from "./response/message.response";
import messagesResponse from "./response/messages.response";
import signupResponse from "./response/signup.response";

export default class GUIPayloader implements IGuiPayloader {
  home(): homeResponse {
    return {
      title: "Home",
      header: "Main Page",
      text: "Chat can only be used by authorized users. If you want to chat, please login or register",
      button: {
        login: "Login",
        signup: "Sign up",
      },
    };
  }

  login(): loginResponse {
    return {
      title: "Login",
      header: "Login",
      form: {
        username: "Username",
        password: "Password",
      },
      button: {
        login: "Login",
      },
    };
  }

  signup(): signupResponse {
    return {
      title: "Sign up",
      header: "Sign up",
      form: {
        username: "Username",
        firstName: "First Name",
        lastName: "Last Name",
        password: "Password",
      },
      button: {
        signup: "Sign up",
      },
    };
  }

  message(): messageResponse {
    return {
      title: "Send message",
      header: "Enter username of the recipient of the message",
      form: {
        recipient: "Recipient",
        message: "Message",
      },
      button: {
        sendMessage: "Send Message",
      },
    };
  }

  messages(): messagesResponse {
    return {
      title: "Messages",
      header: "My messages",
    };
  }
}
