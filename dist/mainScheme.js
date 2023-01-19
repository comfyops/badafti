"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const StringAndValiate = zod_1.z.object({
    check: zod_1.z.string(),
    value: zod_1.z.string(),
});
const String = zod_1.z.string();
const StringOrValidate = zod_1.z.union([StringAndValiate, String]);
//StringOrValidate.parse({})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblNjaGVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluU2NoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXdCO0FBRXhCLE1BQU0sZ0JBQWdCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNqQixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtDQUNsQixDQUFDLENBQUM7QUFFSCxNQUFNLE1BQU0sR0FBRyxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFMUIsTUFBTSxnQkFBZ0IsR0FBRyxPQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUk3RCw0QkFBNEIifQ==