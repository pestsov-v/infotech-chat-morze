import color from "../../../core/enum/color.enum";
import emodji from "../../../core/enum/emodji.enum";

function helpCommand() {
  return console.log(
    color.turquoise,
    `
${emodji.knobs} Common functionality:
~ help - get all possible commands to work with the console.
~ exit - exit console mode and stop application.


${emodji.smileWithGlases} Users funcionality: 
~ List of all users - get list with all users.
~ Get more information about concreticate user - get profile details information of concreticate users. 
~ Update concreticate user fields for username - update some fields on concreticate user.
~ Delete concreticate user for username - input username user if you want remove the user account.

${emodji.email} Message funcionality:
~ Send Message - send message to concreticate user. Message can get only registration message.
~ List messages - get list with all messages.
~ List user messages - get list with all messages of concreticate user.
`
  );
}

export default helpCommand;
