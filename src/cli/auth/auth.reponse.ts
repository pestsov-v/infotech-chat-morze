import color from "../../core/enum/color.enum";
import emodji from "../../core/enum/emodji.enum";

export const USER_SIGNUP_SUCCESS = (): void => {
  console.log(
    color.green,
    `${emodji.checkMark} You have successfully registered. Login to your account! ${emodji.pointingDown}`
  );
};

export const USER_LOGIN_SUCCESS = (): void => {
  console.log(
    color.green,
    `${emodji.checkMark} You have successfully login! 
  
${emodji.pageFacingUp} Get all app features - Enter "help" command
`
  );
};
