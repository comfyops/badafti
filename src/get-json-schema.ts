import zodToJsonSchema from "zod-to-json-schema";
import { OpsMainSchema } from "./schema/ops/ops-main-schema";

console.log(
  JSON.stringify(zodToJsonSchema(OpsMainSchema, "OpsMainSchema"), null, 4)
);
