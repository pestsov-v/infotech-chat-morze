import color from "../../core/enum/color.enum";

export default class UserResponser {
  createObjs(data: any) {
    const { username, firstName, lastName, role } = data;
    const name = `${firstName} ${lastName}`;
    return console.log(
      color.green,
      `User: ${name} | username: ${username} | role: ${role}`
    );
  }

  createUserDetails(data: any) {
    const response = `
UserId: ${data.id}.
User names: ${data.firstName} ${data.lastName}.
Username: ${data.username}.
User role: ${data.role}.
User account created: ${data.createdAt}.`;

    return response;
  }
}
