import UserResponser from "./user.responser";
import { USER_LIST_EMPTY_MESSAGE } from "../../api/user/user.constants";
import { consumers } from "stream";

const userResponser = new UserResponser();

export default class UserHelper {
  formatingData(users: any) {
    if (!users) return console.log(USER_LIST_EMPTY_MESSAGE);
    users.forEach((user: any) => {
      const data = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      };
      return userResponser.createObjs(data);
    });
  }
}
