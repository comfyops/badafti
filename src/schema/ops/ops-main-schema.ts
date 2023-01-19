import { z } from "zod";

const StringAndValiate = z.object({
  check: z.string({ description: "Nodejs cheker" }),
  value: z.string(),
});

const String = z.string();

const StringOrValidate = z.union([StringAndValiate, String]);
type StringOrValidate = z.infer<typeof StringOrValidate>;

export const OpsMainSchema = z.object({
  prop1: StringOrValidate,
  prop2: StringOrValidate,
});
export type OpsMainSchema = z.infer<typeof OpsMainSchema>;
