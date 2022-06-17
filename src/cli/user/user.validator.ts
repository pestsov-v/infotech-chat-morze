export default class CLIUserValidator {
  idValidate(str: string) {
    const arr = str.split("--");
    return arr[1];
  }

  updateUserIdValidate(str: string) {
    const userData = str.split("--");
    const userId = userData[1].split(" ").shift();
    if (!userId) return "s";
    return userId;
  }

  updateUserDataValidate(str: string) {
    const userData = str.split("--");
    const userFields = userData[1].split("-");
    userFields.shift();
    return userFields;
  }

  createUpdateObj(userData: any) {
    const user = userData.map((field: string) => {
      const arr = field.split(":");
      const key = arr[0];
      const value = arr[1];

      let user: any = {};
      if (key === "firstName") user.firstName = value;
      if (key === "lastName") user.lastName = value;
      if (key === "role") user.role = value;
      if (key === "email") user.email = value;

      const data = {
        key: key,
        value: value,
      };

      return data;
    });

    const userObj = user.reduce(
      (acc: any, n: any) => ((acc[n.key] = n.value), acc),
      {}
    );

    return userObj;
  }
}
