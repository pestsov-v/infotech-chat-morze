import color from "../../core/enum/color.enum";
import emodji from "../../core/enum/emodji.enum";
import command from "../enum/cli.command.enum";

export const MORE_USER_INFO_PROPOSE_MESSAGE = `View other users - write "${command.listUsers}" in command line.`;
export const USER_NOT_FOUND_MESSAGE = "User with this ID not found";

export const COMMAND_NOT_MATCH_MESSAGE =
  'Command not found. To get all available commans input "help" to command line.';

export const INVALID_USER_UPDATE_MESSAGE = `incorrect user data.

You can change the following fields for the user: 
firstName - user first name.
lastName - user last name.
email - user email.`;

export const USER_SIGNUP_SUCCESS = () => {
  console.log(
    color.green,
    `${emodji.checkMark} You have successfully registered. Login to your account! ${emodji.pointingDown}`
  );
};
