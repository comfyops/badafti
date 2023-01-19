"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsMainSchema = void 0;
const zod_1 = require("zod");
const StringAndValiate = zod_1.z.object({
    check: zod_1.z.string({ description: "Nodejs cheker" }),
    value: zod_1.z.string(),
});
const String = zod_1.z.string();
const StringOrValidate = zod_1.z.union([StringAndValiate, String]);
exports.OpsMainSchema = zod_1.z.object({
    prop1: StringOrValidate,
    prop2: StringOrValidate,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BzLW1haW4tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtYS9vcHMvb3BzLW1haW4tc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF3QjtBQUV4QixNQUFNLGdCQUFnQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDaEMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDakQsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDbEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQUcsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTFCLE1BQU0sZ0JBQWdCLEdBQUcsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFHaEQsUUFBQSxhQUFhLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxnQkFBZ0I7Q0FDeEIsQ0FBQyxDQUFDIn0=