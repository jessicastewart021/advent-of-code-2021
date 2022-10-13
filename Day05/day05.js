var fs = require("fs");

var text = fs.readFileSync("./day05input.txt");
let boards = text.toString().split("\n\n");
