import AuthModule from "./auth/auth.module";

export default class CLIModule {
  constructor() {
    new AuthModule();
  }
}
