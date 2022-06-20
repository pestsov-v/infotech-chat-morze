import ora from "ora";
import mainMenu from "../menu/main/menu.main.interface";

export default class MessageLoader {
  sendMessage(recepient: string) {
    let spinner = ora("Sending the message...").start();
    setTimeout(() => {
      spinner.spinner = "dots9";
      spinner.succeed(
        `The message was successfully sent to the user: ${recepient}`
      );

      setTimeout(() => {
        mainMenu();
      }, 500);
    }, 1500);
  }
}
