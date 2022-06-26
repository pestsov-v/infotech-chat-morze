export default interface loginResponse {
  title: string;
  header: string;
  form: {
    username: string;
    password: string;
  };
  button: {
    login: string;
  };
}
