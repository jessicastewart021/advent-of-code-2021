var fs = require("fs");

var text = fs.readFileSync("./day02input.txt");
let instructions = text.toString().split("\n");
let number = 0;

let horizontal = 0;
let depth = 0;
let instruction = "";

// // first star - 1488669
for (let i = 0; i < instructions.length; i++) {
  instruction = instructions[i].split(" ")[0];
  number = instructions[i].split(" ")[1];

  if (instruction === "up") {
    depth = depth - Number(number);
  }
  if (instruction === "down") {
    depth = depth + Number(number);
  }
  if (instruction === "forward") {
    horizontal = horizontal + Number(number);
  }
}

console.log(depth);
console.log(horizontal);
console.log(depth * horizontal);


// second star - 1176514794
let aim = 0;

for (let i = 0; i < instructions.length; i++) {
    instruction = instructions[i].split(" ")[0];
    number = instructions[i].split(" ")[1];
  
    if (instruction === "up") {
      aim = aim - Number(number)
    }
    if (instruction === "down") {
      aim = aim + Number(number)
    }
    if (instruction === "forward") {
      horizontal = horizontal + Number(number);
      depth = depth + (aim * Number(number))
    }
  }
  
  console.log(depth);
  console.log(horizontal);
  console.log(depth * horizontal);
