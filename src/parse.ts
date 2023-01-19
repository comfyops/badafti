import { parse as parseYaml, stringify as stringifyYaml } from "yaml";
import { OpsMainSchema } from "./schema/ops/ops-main-schema";

export default function mainYamlParse(yamlstr: string): OpsMainSchema {
  if (typeof yamlstr != "string" || !yamlstr)
    throw new Error("Yaml data must be a string with len>0");

  let yamlObj = parseYaml(yamlstr);
  let result = OpsMainSchema.safeParse(yamlObj);

  if (!result.success) {
    throw new Error("Error parsing\n" + JSON.stringify(result.error.format()));
  }

  return result.data;
}
