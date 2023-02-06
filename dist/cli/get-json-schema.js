"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_to_json_schema_1 = __importDefault(require("zod-to-json-schema"));
const ops_main_schema_1 = require("../schema/ops/ops-main-schema");
const path_1 = __importDefault(require("path"));
console.log(JSON.stringify((0, zod_to_json_schema_1.default)(ops_main_schema_1.OpsMainSchema, "OpsMainSchema"), null, 4));
console.log(path_1.default.resolve("../../dist"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWpzb24tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS9nZXQtanNvbi1zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0RUFBaUQ7QUFDakQsbUVBQThEO0FBQzlELGdEQUF3QjtBQUV4QixPQUFPLENBQUMsR0FBRyxDQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBQSw0QkFBZSxFQUFDLCtCQUFhLEVBQUUsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUN6RSxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMifQ==