import fs from "fs";
import path from "path";

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "../https/key.pem"), "utf-8"),
  cert: fs.readFileSync(path.join(__dirname, "../https/cert.pem"), "utf-8"),
};

export default httpsOptions;
