const type = {
  Server: Symbol.for("Server"),

  UserRouter: Symbol.for("UserRouter"),
  UserService: Symbol.for("UserService"),
  UserResponser: Symbol.for("UserResponser"),
  UserException: Symbol.for("UserException"),
  UserController: Symbol.for("UserController"),
};

export default type;
