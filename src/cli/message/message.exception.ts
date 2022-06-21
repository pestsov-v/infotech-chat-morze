import color from "../../core/enum/color.enum";
import emodji from "../../core/enum/emodji.enum";
import mainMenu from "../menu/menu/main.menu";

export const MESSAGE_LIST_EMPTY_MESSAGE = () => {
  console.log("");
  console.log(color.red, `${emodji.crossMark} Message list is empty`);
  setTimeout(() => {
    mainMenu();
  }, 1000);
};

export const USER_NOT_EXISTS_MESSAGE = () => {
  console.log("");
  console.log(color.red, `${emodji.crossMark} Username is not exist`);
  setTimeout(() => {
    mainMenu();
  }, 1000);
};
