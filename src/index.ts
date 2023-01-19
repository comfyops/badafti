import { readFileSync } from "fs";
import verify from "./mainScheme";

export default function preProcessFile(path: string) {
  let data = readFileSync(path, { encoding: "utf-8" });
  let result = verify(data);
  console.log(result);
}
