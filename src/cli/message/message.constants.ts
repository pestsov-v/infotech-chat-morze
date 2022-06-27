import color from "../../core/enum/color.enum";
import emodji from "../../core/enum/emodji.enum";

export const USERNAME_RECEIPIENT_MESSAGE = "Enter username recipient";
export const ENTER_MESSAGE_MESSAGE = "Enter your message";
export const GET_MESSAGE_BY_ID_MESSAGE = "Input message ID";
export const USERNAME_SENDER_MESSAGE =
  "Enter username to get a list of his posts";

export const USERNAME_NOT_FOUND = () => {
  console.log(color.red, `${emodji.crossMark} Username not found`);
};
