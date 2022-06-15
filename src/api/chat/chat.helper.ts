export default class ChatHelper {
  getChatData(bodyUser: any, sessionUser: any) {
    let users = [];
    users.push(JSON.parse(JSON.stringify(bodyUser)));
    if (users.length == 0) return null;

    users.push(sessionUser);
    const chatData = { users };
    return chatData;
  }
}
