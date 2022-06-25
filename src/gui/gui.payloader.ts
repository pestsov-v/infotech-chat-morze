export default class GUIPayloader {
  home() {
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

  login() {
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

  signup() {
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

  message() {
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

  messages() {
    return {
      title: "Messages",
      header: "My messages",
    };
  }
}
