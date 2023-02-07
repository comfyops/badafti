"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const parse_1 = __importDefault(require("./parse"));
function preProcessFile(path) {
    let data = (0, fs_1.readFileSync)(path, { encoding: "utf-8" });
    let result = (0, parse_1.default)(data);
    console.log(result);
}
exports.default = preProcessFile;
preProcessFile("tests/yamls/1-test-simple/main.yaml");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBa0M7QUFDbEMsb0RBQTZCO0FBRTdCLFNBQXdCLGNBQWMsQ0FBQyxJQUFZO0lBQ2pELElBQUksSUFBSSxHQUFHLElBQUEsaUJBQVksRUFBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNyRCxJQUFJLE1BQU0sR0FBRyxJQUFBLGVBQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFKRCxpQ0FJQztBQUVELGNBQWMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDIn0=