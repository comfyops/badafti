"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yaml_1 = require("yaml");
const ops_main_schema_1 = require("./schema/ops/ops-main-schema");
function mainYamlParse(yamlstr) {
    if (typeof yamlstr != "string" || !yamlstr)
        throw new Error("Yaml data must be a string with len>0");
    let yamlObj = (0, yaml_1.parse)(yamlstr);
    let result = ops_main_schema_1.OpsMainSchema.safeParse(yamlObj);
    if (!result.success) {
        throw new Error("Error parsing\n" + JSON.stringify(result.error.format()));
    }
    return result.data;
}
exports.default = mainYamlParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBc0U7QUFDdEUsa0VBQTZEO0FBRTdELFNBQXdCLGFBQWEsQ0FBQyxPQUFlO0lBQ25ELElBQUksT0FBTyxPQUFPLElBQUksUUFBUSxJQUFJLENBQUMsT0FBTztRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFFM0QsSUFBSSxPQUFPLEdBQUcsSUFBQSxZQUFTLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsSUFBSSxNQUFNLEdBQUcsK0JBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVFO0lBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3JCLENBQUM7QUFaRCxnQ0FZQyJ9