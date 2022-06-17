export default class CLIResponser {
  createObjs(data: any) {
    const { id, firstName, lastName, role } = data;
    const name = `${firstName} ${lastName}`;
    return `userId: ${id}, User: ${name}, role: ${role}`;
  }

  createUserInfo(data: any) {
    const response = `UserId: ${data.id}.
Username: ${data.firstName} ${data.lastName}.
User email: ${data.email}.
User role: ${data.role}.
User account created: ${data.createdAt}.`;

    return response;
  }
}
