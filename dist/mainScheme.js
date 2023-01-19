"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const yaml_1 = require("yaml");
const StringAndValiate = zod_1.z.object({
    check: zod_1.z.string(),
    value: zod_1.z.string(),
});
const String = zod_1.z.string();
const StringOrValidate = zod_1.z.union([StringAndValiate, String]);
const mainYaml = zod_1.z.object({
    prop1: StringOrValidate,
    prop2: StringOrValidate,
});
//StringOrValidate.parse({})
function mainYamlParse(yamlstr) {
    if (typeof yamlstr != "string" || !yamlstr)
        throw new Error("Yaml data must be a string with len>0");
    let yamlObj = (0, yaml_1.parse)(yamlstr);
    let result = mainYaml.safeParse(yamlObj);
    if (!result.success) {
        throw new Error("Error parsing\n" + JSON.stringify(result.error.format()));
    }
    return result.data;
}
exports.default = mainYamlParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblNjaGVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluU2NoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXdCO0FBQ3hCLCtCQUFzRTtBQUV0RSxNQUFNLGdCQUFnQixHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDaEMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7SUFDakIsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDbEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQUcsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTFCLE1BQU0sZ0JBQWdCLEdBQUcsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFHN0QsTUFBTSxRQUFRLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN4QixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLEtBQUssRUFBRSxnQkFBZ0I7Q0FDeEIsQ0FBQyxDQUFDO0FBR0gsNEJBQTRCO0FBRTVCLFNBQXdCLGFBQWEsQ0FBQyxPQUFlO0lBQ25ELElBQUksT0FBTyxPQUFPLElBQUksUUFBUSxJQUFJLENBQUMsT0FBTztRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFFM0QsSUFBSSxPQUFPLEdBQUcsSUFBQSxZQUFTLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDNUU7SUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDckIsQ0FBQztBQVpELGdDQVlDIn0=