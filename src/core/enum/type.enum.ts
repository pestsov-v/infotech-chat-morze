const TYPE = {
  Server: Symbol.for("Server"),
  ApiRouter: Symbol.for("ApiRouter"),

  UserRouter: Symbol.for("UserRouter"),
  UserService: Symbol.for("UserService"),
  UserResponser: Symbol.for("UserResponser"),
  UserException: Symbol.for("UserException"),
  UserController: Symbol.for("UserController"),

  MessageRouter: Symbol.for("MessageRouter"),
  MessageHelper: Symbol.for("MessageHelper"),
  MessageDecoder: Symbol.for("MessageDecoder"),
  MessageService: Symbol.for("MessageService"),
  MessageResponser: Symbol.for("MessageResponser"),
  MessageException: Symbol.for("MessageException"),
  MessageDictionary: Symbol.for("MessageDictionary"),
  MessageController: Symbol.for("MessageController"),
};

export default TYPE;
