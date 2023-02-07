import { z } from "zod";
import { match, P } from "ts-pattern";

export function __type(name: string) {
  return {
    __type: z
      .literal("__" + name)
      .optional()
      .default("__" + name),
  };
}

/** {@link JSCodeEval} */
export const JSCodeEval = z.object(
  {
    ...__type("JSCodeEval"),

    /** @field Trurhy2 */
    truthy: z.string(),
  },
  { description: "Run JS code" }
);
/**
 * @description `truthy` A string expression that will be evaluated
 *     and checked if [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
 */
export interface JSCodeEval extends z.infer<typeof JSCodeEval> {}

/** @ignore */
const JSScriptEval = z.object(
  {
    js_file: z.string({ description: "Nodejs process" }),
    args: z.string(),
  },
  { description: "Run JS from file (.js)" }
);

/** @ignore */
export const JSEval = z.union([JSCodeEval, JSScriptEval]);
export type JSEval = z.infer<typeof JSCodeEval | typeof JSScriptEval>;

/** @ignore */
const StringConstant = z.string();

/** @ignore */
const StringValidate = z.object({
  check: JSEval,
});

/**
 * @ignore
 * Process the value befor using it
 */
const StringProcess = z.object({
  process: JSEval,
  input: z.string(),
});

/** @ignore */
const StringRegex = z.object({
  regex: z.string(),
});

/** @ignore */
const StrinEnum = z.array(z.string());

/** @ignore */
const ComparbleString = z.union([
  StringValidate,
  StringConstant,
  StrinEnum,
  StringRegex,
]);
type ComparbleString = z.infer<typeof JSEval>;

/** @ignore */
export const OpsMainSchema = z.object({
  prop1: ComparbleString,
  prop2: ComparbleString,
});
export interface OpsMainSchema extends z.infer<typeof OpsMainSchema> {}

/* return match(result)
  .with({ type: 'error' }, () => `<p>Oups! An error occured</p>`)
  .with({ type: 'ok', data: { type: 'text' } }, (res) => `<p>${res.data.content}</p>`)
  .with({ type: 'ok', data: { type: 'img', src: P.select() } }, (src) => `<img src=${src} />`)
  .exhaustive(); */
