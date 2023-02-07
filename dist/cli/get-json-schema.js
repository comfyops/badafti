"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const zod_to_json_schema_1 = __importDefault(require("zod-to-json-schema"));
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
console.log(process.argv);
let objPath = "";
let propertyName = "default";
let savePath = "schema.json";
if (process.argv.length > 2) {
    objPath = path_1.default.resolve(process.argv[2]);
}
if (process.argv.length > 3) {
    propertyName = process.argv[3];
}
if (process.argv.length > 4) {
    savePath = process.argv[4];
}
savePath = path_1.default.resolve(savePath);
if (!savePath.endsWith(".json"))
    savePath += ".json";
if (process.argv.length < 3 || process.argv.length > 5) {
    console.log("Expecting (1) import path and an optional (2) property name and (3) save path arguments");
    process.exit(1);
}
console.log(`Importing ${propertyName} from: '${objPath}'\n And saving to '${savePath}'`);
(_a = objPath, Promise.resolve().then(() => __importStar(require(_a)))).then((obj) => {
    let schemaObj = obj;
    if (propertyName != "default")
        schemaObj = obj[propertyName];
    if (schemaObj == null) {
        console.log("Import resulted in null! exiting...");
        process.exit(1);
    }
    const result = JSON.stringify((0, zod_to_json_schema_1.default)(schemaObj, propertyName), null, 4);
    (0, promises_1.writeFile)(savePath, result, { encoding: "utf8" }).then(() => {
        console.log("Done! saved to: " + savePath);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWpzb24tc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS9nZXQtanNvbi1zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBaUQ7QUFDakQsMENBQXdDO0FBQ3hDLGdEQUF3QjtBQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUxQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakIsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQztBQUM3QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUMzQixPQUFPLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDekM7QUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUMzQixZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNoQztBQUNELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQzNCLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVCO0FBQ0QsUUFBUSxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQUUsUUFBUSxJQUFJLE9BQU8sQ0FBQztBQUVyRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FDVCx5RkFBeUYsQ0FDMUYsQ0FBQztJQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakI7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsWUFBWSxXQUFXLE9BQU8sc0JBQXNCLFFBQVEsR0FBRyxDQUM3RSxDQUFDO0FBRUYsTUFBTyxPQUFPLDJEQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQzNCLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLFlBQVksSUFBSSxTQUFTO1FBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU3RCxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakI7SUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUMzQixJQUFBLDRCQUFlLEVBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUN4QyxJQUFJLEVBQ0osQ0FBQyxDQUNGLENBQUM7SUFFRixJQUFBLG9CQUFTLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=