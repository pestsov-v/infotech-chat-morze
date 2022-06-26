export default interface messageResponse {
  title: string;
  header: string;
  form: {
    recipient: string;
    message: string;
  };
  button: {
    sendMessage: string;
  };
}
