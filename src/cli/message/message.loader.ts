import ora from "ora";
import color from "../../core/enum/color.enum";
import emodji from "../../core/enum/emodji.enum";
import mainMenu from "../menu/menu.module";
import { MESSAGE_LIST_EMPTY_MESSAGE } from "./message.exception";

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

  decodeMessage(content: string) {
    let spinner = ora("Decoding the message...").start();
    setTimeout(() => {
      spinner.succeed(`The message was successfuly decode.`);

      setTimeout(() => {
        console.log(`Message:${content}`);
        setTimeout(() => {
          mainMenu();
        }, 1000);
      }, 1000);
    }, 1000);
  }

  getUserMessages(data: any) {
    let spinner = ora("Getting the messages...").start();
    setTimeout(() => {
      spinner.succeed(`Messages get successfully`);
      setTimeout(() => {
        data.forEach((element: any) => {
          console.log(
            color.blue,
            `${emodji.smileWithGlases} Sender: ${element.sender.username}`
          );
          console.log(
            color.green,
            `${emodji.greeenBook} Message id: ${element.id}`
          );
          console.log(
            color.turquoise,
            `${emodji.receipt} Message content: ${element.content}`
          );
          console.log("");
        });
        setTimeout(() => {
          mainMenu();
        }, 1000);
      }, 1000);
    }, 1000);
  }

  getAllMessages(data: any) {
    if (data.length === 0) return MESSAGE_LIST_EMPTY_MESSAGE();

    let spinner = ora("Getting the messages...").start();
    setTimeout(() => {
      spinner.succeed(`Messages get successfully`);
      setTimeout(() => {
        data.forEach((element: any) => {
          console.log(
            color.blue,
            `${emodji.smileWithGlases} Sender: ${element.sender.username}`
          );
          console.log(
            color.green,
            `${emodji.greeenBook} Message id: ${element.id}`
          );
          console.log(
            color.turquoise,
            `${emodji.receipt} Message content: ${element.content}`
          );
          console.log("");
        });
        setTimeout(() => {
          mainMenu();
        }, 1000);
      }, 1000);
    }, 1000);
  }
}
