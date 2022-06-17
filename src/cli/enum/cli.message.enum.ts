enum message {
  help = "Get all possible commands to work with the console",
  signupUser = "Registration new user",
  loginUser = "Login in your account",
  listUser = "Show a list with all registered users in the system",
  moreUserInfo = "Show details for a specific user",
  listMessages = "Show a list of all messages of a specific user",
  moreMessageInfo = "Show details for a specific message",
  updateUserInfo = "Update details for a specific user. Write first userId and then counted updated fields with spaces",
  deleteUser = "Delete a specific user",
  exit = "Exit console mode and stop application",
}

export default message;
