import Database from "./core/connection/db.connection";
import Server from "./core/connection/server.connection";
import CLI from "./core/connection/cli.connection";

new Server();
new Database();

setTimeout(() => {
  new CLI();
}, 50);
 