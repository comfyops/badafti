"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsMainSchema = exports.JSEval = exports.JSScriptEval = exports.JSCodeEval = exports.__type = void 0;
const zod_1 = require("zod");
/** @ignore */
function __type(name) {
    return {
        __type: zod_1.z
            .literal("__" + name)
            .optional()
            .default("__" + name),
    };
}
exports.__type = __type;
/** @ignore */
function exactMatch() {
    //https://stackoverflow.com/a/72915465/1997873
}
exactMatch();
/** @ignore */
exports.JSCodeEval = zod_1.z.object(Object.assign(Object.assign({}, __type("JSCodeEval")), { truthy: zod_1.z.string() }), { description: "Run JS code" });
exactMatch();
/** @ignore */
exports.JSScriptEval = zod_1.z.object(Object.assign(Object.assign({}, __type("JSScriptEval")), { js_file: zod_1.z.string({ description: "Nodejs process" }), args: zod_1.z.string().optional() }), { description: "Run JS from file (.js)" });
exactMatch();
/** @ignore */
exports.JSEval = zod_1.z.union([exports.JSCodeEval, exports.JSScriptEval]);
exactMatch();
/** @ignore */
const StringConstant = zod_1.z.string();
/**
 * # StringValidate
 */
exactMatch();
/** @ignore */
const StringValidate = zod_1.z.object({
    check: exports.JSEval,
});
/**
 * Process the value befor using it
 */
exactMatch();
/**
 * @ignore
 */
const StringProcess = zod_1.z.object({
    process: exports.JSEval,
    input: zod_1.z.string().optional(),
});
exactMatch();
/** @ignore */
const StringRegex = zod_1.z.object({
    regex: zod_1.z.string(),
});
exactMatch();
/** @ignore */
const StrinEnum = zod_1.z.array(zod_1.z.string());
exactMatch();
/** @ignore */
const ComparbleString = zod_1.z.union([
    StringValidate,
    StringConstant,
    StrinEnum,
    StringRegex,
]);
exactMatch();
/** @ignore */
exports.OpsMainSchema = zod_1.z.object({
    prop1: ComparbleString,
    prop2: ComparbleString,
});
/* return match(result)
  .with({ type: 'error' }, () => `<p>Oups! An error occured</p>`)
  .with({ type: 'ok', data: { type: 'text' } }, (res) => `<p>${res.data.content}</p>`)
  .with({ type: 'ok', data: { type: 'img', src: P.select() } }, (src) => `<img src=${src} />`)
  .exhaustive(); */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BzLW1haW4tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtYS9vcHMvb3BzLW1haW4tc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF3QjtBQUd4QixjQUFjO0FBQ2QsU0FBZ0IsTUFBTSxDQUFDLElBQVk7SUFDakMsT0FBTztRQUNMLE1BQU0sRUFBRSxPQUFDO2FBQ04sT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDcEIsUUFBUSxFQUFFO2FBQ1YsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDeEIsQ0FBQztBQUNKLENBQUM7QUFQRCx3QkFPQztBQUVELGNBQWM7QUFDZCxTQUFTLFVBQVU7SUFDakIsOENBQThDO0FBQ2hELENBQUM7QUFFRCxVQUFVLEVBQW1ELENBQUM7QUFVOUQsY0FBYztBQUNELFFBQUEsVUFBVSxHQUFHLE9BQUMsQ0FBQyxNQUFNLGlDQUUzQixNQUFNLENBQUMsWUFBWSxDQUFDLEtBQ3ZCLE1BQU0sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLEtBRXBCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUMvQixDQUFDO0FBRUYsVUFBVSxFQUF1RCxDQUFDO0FBTWxFLGNBQWM7QUFDRCxRQUFBLFlBQVksR0FBRyxPQUFDLENBQUMsTUFBTSxpQ0FFN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUN6QixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQ3BELElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBRTdCLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFLENBQzFDLENBQUM7QUFFRixVQUFVLEVBQTJDLENBQUM7QUFFdEQsY0FBYztBQUNELFFBQUEsTUFBTSxHQUFHLE9BQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQkFBVSxFQUFFLG9CQUFZLENBQUMsQ0FBQyxDQUFDO0FBRTFELFVBQVUsRUFBMkQsQ0FBQztBQUV0RSxjQUFjO0FBQ2QsTUFBTSxjQUFjLEdBQUcsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWxDOztHQUVHO0FBQ0gsVUFBVSxFQUEyRCxDQUFDO0FBRXRFLGNBQWM7QUFDZCxNQUFNLGNBQWMsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlCLEtBQUssRUFBRSxjQUFNO0NBQ2QsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxVQUFVLEVBQXlELENBQUM7QUFFcEU7O0dBRUc7QUFDSCxNQUFNLGFBQWEsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdCLE9BQU8sRUFBRSxjQUFNO0lBQ2YsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDN0IsQ0FBQyxDQUFDO0FBRUgsVUFBVSxFQUFxRCxDQUFDO0FBRWhFLGNBQWM7QUFDZCxNQUFNLFdBQVcsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzNCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQ2xCLENBQUMsQ0FBQztBQUVILFVBQVUsRUFBaUQsQ0FBQztBQUU1RCxjQUFjO0FBQ2QsTUFBTSxTQUFTLEdBQUcsT0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUV0QyxVQUFVLEVBQTZELENBQUM7QUFNeEUsY0FBYztBQUNkLE1BQU0sZUFBZSxHQUFHLE9BQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUIsY0FBYztJQUNkLGNBQWM7SUFDZCxTQUFTO0lBQ1QsV0FBVztDQUNaLENBQUMsQ0FBQztBQUVILFVBQVUsRUFBeUQsQ0FBQztBQVFwRSxjQUFjO0FBQ0QsUUFBQSxhQUFhLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxLQUFLLEVBQUUsZUFBZTtJQUN0QixLQUFLLEVBQUUsZUFBZTtDQUN2QixDQUFDLENBQUM7QUFFSDs7OzttQkFJbUIifQ==