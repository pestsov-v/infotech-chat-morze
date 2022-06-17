import color from "../../../core/enum/color.enum";
import emodji from "../../../core/enum/emodji.enum";

export const USER_IS_NOT_EXISTS_MESSAGE = () => {
  console.log(color.red, `${emodji.crossMark} User email not found`);
};

export const USER_PASSWORD_NOT_MATCH_MESSAGE = () => {
  console.log(color.red, `${emodji.crossMark} Incorrect user password`);
};

export const USER_NOT_REGISTER_MESSAGE = () => {
  console.log(
    color.red,
    `${emodji.crossMark} You entered incorrect data for register`
  );
};
