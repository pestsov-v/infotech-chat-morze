import path from "path";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";

export default class Swagger {
  document() {
    const index = path.resolve(__dirname, "../../documentation/index.yaml");
    const documenantion = YAML.load(index);
    return swaggerUI.setup(documenantion);
  }

  serve() {
    return swaggerUI.serve;
  }

  path() {
    return "/documentation";
  }
}
