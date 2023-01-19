#!/usr/bin/env node

// Call index wrapper (need first line for bash)
console.log(process.argv); // 2+ are args
var defaultFunc = require("./index")
if (defaultFunc && defaultFunc.default) {
    defaultFunc.default(process.argv[2])
}
else {
    console.log("Please specify file")
}