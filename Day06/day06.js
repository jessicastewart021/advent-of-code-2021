var fs = require("fs");

var text = fs.readFileSync("./day06input.txt");
let boards = text.toString().split(",");

let fishPerDay;
let days = 100;

while (days > 0) {
  for (let i = 0; i < boards.length; i++) {
    if((Number(boards[i]) - 1) === -1){
        boards[i] =  '6'
        boards.push('9')
    }
    else {
        boards[i] =  Number(boards[i]) - 1
    }
  }
  days = days - 1;
}

// console.log("NUMBER OF FISH: " + boards.length)


console.log(5 ** 256)