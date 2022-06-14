import path from "path";
import YAML from "yamljs";

export default class Swagger {
  createDocumentation() {
    const index = path.resolve(__dirname, "../../documentation/index.yaml");
    return YAML.load(index);
  }
}
