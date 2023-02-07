import { z } from "zod";
import { match, P } from "ts-pattern";

/** @ignore */
export function __type(name: string) {
  return {
    __type: z
      .literal("__" + name)
      .optional()
      .default("__" + name),
  };
}

/** @ignore */
function exactMatch<A extends C, B extends A, C = B>() {
  //https://stackoverflow.com/a/72915465/1997873
}

exactMatch<JSCodeEval, ReturnType<typeof JSCodeEval.parse>>();
export type JSCodeEval = {
  __type: string | "JSCodeEval";

  /**
   * @description `truthy` A string expression that will be evaluated
   *     and checked if [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
   */
  truthy: string;
};
/** @ignore */
const JSCodeEval = z.object(
  {
    ...__type("JSCodeEval"),
    truthy: z.string(),
  },
  { description: "Run JS code" }
);

exactMatch<JSScriptEval, ReturnType<typeof JSScriptEval.parse>>();
export type JSScriptEval = {
  __type: string | "JSScriptEval";
  js_file: string;
  args?: string;
};
/** @ignore */
const JSScriptEval = z.object(
  {
    ...__type("JSScriptEval"),
    js_file: z.string({ description: "Nodejs process" }),
    args: z.string().optional(),
  },
  { description: "Run JS from file (.js)" }
);

exactMatch<JSEval, ReturnType<typeof JSEval.parse>>();
export type JSEval = JSCodeEval | JSScriptEval;
/** @ignore */
const JSEval = z.union([JSCodeEval, JSScriptEval]);

exactMatch<StringConstant, ReturnType<typeof StringConstant.parse>>();
export type StringConstant = string;
/** @ignore */
const StringConstant = z.string();

/**
 * # StringValidate
 */
exactMatch<StringValidate, ReturnType<typeof StringValidate.parse>>();
export type StringValidate = { check: JSEval };
/** @ignore */
const StringValidate = z.object({
  check: JSEval,
});

/**
 * Process the value befor using it
 */
exactMatch<StringProcess, ReturnType<typeof StringProcess.parse>>();
export type StringProcess = { input?: string; process: JSEval };
/**
 * @ignore
 */
const StringProcess = z.object({
  process: JSEval,
  input: z.string().optional(),
});

exactMatch<StringRegex, ReturnType<typeof StringRegex.parse>>();
export type StringRegex = { regex: string };
/** @ignore */
const StringRegex = z.object({
  regex: z.string(),
});

exactMatch<StrinEnum, ReturnType<typeof StrinEnum.parse>>();
export type StrinEnum = string[];
/** @ignore */
const StrinEnum = z.array(z.string());

exactMatch<ComparbleString, ReturnType<typeof ComparbleString.parse>>();
export type ComparbleString =
  | StringValidate
  | StringConstant
  | StrinEnum
  | StringRegex;
/** @ignore */
const ComparbleString = z.union([
  StringValidate,
  StringConstant,
  StrinEnum,
  StringRegex,
]);

exactMatch<OpsMainSchema, ReturnType<typeof OpsMainSchema.parse>>();
export type OpsMainSchema = {
  /** Prop `1` desc */
  prop1: ComparbleString;

  /** Prop 2 desc */
  prop2: ComparbleString;
};
/** @ignore */
export const OpsMainSchema = z.object({
  prop1: ComparbleString,
  prop2: ComparbleString,
});

export const zodExport = {
  JSCodeEval,
  JSScriptEval,
  JSEval,
  StrinEnum,
  StringConstant,
  StringProcess,
  StringRegex,
  StringValidate,
  ComparbleString,
  OpsMainSchema,
};

/* return match(result)
  .with({ type: 'error' }, () => `<p>Oups! An error occured</p>`)
  .with({ type: 'ok', data: { type: 'text' } }, (res) => `<p>${res.data.content}</p>`)
  .with({ type: 'ok', data: { type: 'img', src: P.select() } }, (src) => `<img src=${src} />`)
  .exhaustive(); */
