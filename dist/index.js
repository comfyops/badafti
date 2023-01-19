"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const mainScheme_1 = __importDefault(require("./mainScheme"));
function preProcessFile(path) {
    let data = (0, fs_1.readFileSync)(path, { encoding: "utf-8" });
    let result = (0, mainScheme_1.default)(data);
    console.log(result);
}
exports.default = preProcessFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBa0M7QUFDbEMsOERBQWtDO0FBRWxDLFNBQXdCLGNBQWMsQ0FBQyxJQUFZO0lBQ2pELElBQUksSUFBSSxHQUFHLElBQUEsaUJBQVksRUFBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNyRCxJQUFJLE1BQU0sR0FBRyxJQUFBLG9CQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBSkQsaUNBSUMifQ==