import { z } from "zod";

const JSCodeEval = z.object(
  {
    js_inline: z.string(),
  },
  { description: "Run JS code" }
);

const JSScriptEval = z.object(
  {
    js_file: z.string({ description: "Nodejs process" }),
    args: z.string(),
  },
  { description: "Run JS from file (.js)" }
);

const JSEval = z.union([JSCodeEval, JSScriptEval]);

const StringConstant = z.string();

/**
 * Does not change the value, only validate if ok.
 */
const StringValidate = z.object({
  check: JSEval,
  value: z.string(),
});

/**
 * Process the value befor using it
 */
const StringProcess = z.object({
  process: JSEval,
  input: z.string(),
});

const StringRegex = z.object({
  regex: z.string(),
});

const StrinEnum = z.array(z.string());

const ComparbleString = z.union([
  StringValidate,
  StringConstant,
  StrinEnum,
  StringRegex,
]);
type ComparbleString = z.infer<typeof JSEval>;

export const OpsMainSchema = z.object({
  prop1: JSEval,
  prop2: JSEval,
});
export type OpsMainSchema = z.infer<typeof OpsMainSchema>;
