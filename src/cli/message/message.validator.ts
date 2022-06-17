export default class CLIMessageValidator {
  postMessageIdValidate(str: string) {
    const arr = str.split("--");
    const userId = arr[1].split(" ").shift();
    return userId;
  }

  contentSelector(str: string) {
    const contentData = str.split("--");
    const content = contentData[1].split(":");
    const result = content[1];
    return result;
  }
}
