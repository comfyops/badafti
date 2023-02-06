import zodToJsonSchema from "zod-to-json-schema";
import { writeFile } from "fs/promises";
import path from "path";

console.log(process.argv);

let objPath = "";
let propertyName = "default";
let savePath = "schema.json";
if (process.argv.length > 2) {
  objPath = path.resolve(process.argv[2]);
}
if (process.argv.length > 3) {
  propertyName = process.argv[3];
}
if (process.argv.length > 4) {
  savePath = process.argv[4];
}
savePath = path.resolve(savePath);
if (!savePath.endsWith(".json")) savePath += ".json";

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log(
    "Expecting (1) import path and an optional (2) property name and (3) save path arguments"
  );
  process.exit(1);
}

console.log(
  `Importing ${propertyName} from: '${objPath}'\n And saving to '${savePath}'`
);

import(objPath).then((obj) => {
  let schemaObj = obj;
  if (propertyName != "default") schemaObj = obj[propertyName];

  if (schemaObj == null) {
    console.log("Import resulted in null! exiting...");
    process.exit(1);
  }

  const result = JSON.stringify(
    zodToJsonSchema(schemaObj, propertyName),
    null,
    4
  );

  writeFile(savePath, result, { encoding: "utf8" }).then(() => {
    console.log("Done! saved to: " + savePath);
  });
});
