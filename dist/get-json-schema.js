"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_to_json_schema_1 = __importDefault(require("zod-to-json-schema"));
const ops_main_schema_1 = require("./schema/ops/ops-main-schema");
console.log(JSON.stringify((0, zod_to_json_schema_1.default)(ops_main_schema_1.OpsMainSchema, "OpsMainSchema"), null, 4));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWpzb24tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dldC1qc29uLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRFQUFpRDtBQUNqRCxrRUFBNkQ7QUFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUEsNEJBQWUsRUFBQywrQkFBYSxFQUFFLGVBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDekUsQ0FBQyJ9