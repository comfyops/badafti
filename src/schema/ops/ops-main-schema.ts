import { z } from "zod";

export function __type(name: string) {
  return {
    __type: z
      .literal("__" + name)
      .optional()
      .default("__" + name),
  };
}

/**
 * This is not a \@tag. Nor is this an \{\@inlineTag\}
 *
 * It is possible to escape the end of a comment:
 * ```ts
 * /**
 *  * docs for `example()`
 *  *\/
 * function example(): void
 * ```
 *
 * * 1
 * * 2
 *
 * so:
 *
 * 1. sss
 * 2. sss
 *     * dsads
 *
 * see {@link __type}
 */

export const JSCodeEval = z.object(
  {
    ...__type("JSCodeEval"),
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
  prop1: ComparbleString,
  prop2: ComparbleString,
});
export type OpsMainSchema = z.infer<typeof OpsMainSchema>;
