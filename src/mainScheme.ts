import { z } from "zod";
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";

const StringAndValiate = z.object({
  check: z.string(),
  value: z.string(),
});

const String = z.string();

const StringOrValidate = z.union([StringAndValiate, String]);
type StringOrValidate = z.infer<typeof StringOrValidate>;

const mainYaml = z.object({
  prop1: StringOrValidate,
  prop2: StringOrValidate,
});
type mainYaml = z.infer<typeof mainYaml>;

//StringOrValidate.parse({})

export default function mainYamlParse(yamlstr: string): mainYaml {
  if (typeof yamlstr != "string" || !yamlstr)
    throw new Error("Yaml data must be a string with len>0");

  let yamlObj = parseYaml(yamlstr);
  let result = mainYaml.safeParse(yamlObj);

  if (!result.success) {
    throw new Error("Error parsing\n" + JSON.stringify(result.error.format()));
  }

  return result.data;
}
