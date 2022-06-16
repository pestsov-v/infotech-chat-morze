export default class CLIValidator {
  idValidate(str: string) {
    const arr = str.split("--");
    return arr[1];
  }
}
