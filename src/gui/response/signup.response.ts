export default interface signupResponse {
  title: string;
  header: string;
  form: {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
  };
  button: {
    signup: string;
  };
}