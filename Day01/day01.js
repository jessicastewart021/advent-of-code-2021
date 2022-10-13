var fs = require("fs");

var text = fs.readFileSync("./day01input.txt");
let numbers = text.toString().split("\n");

let larger = 0;

// first star - 1233
for (let i = 0; i < numbers.length; i++) {
  if (Number(numbers[i - 1]) < Number(numbers[i])) {
    larger++;
  }
}

console.log(larger);

//second star - 1275
let firstSet = 0;
let secondSet = 0;
larger = 0;

for (let i = 0; i < numbers.length - 2; i++) {
  firstSet =
    Number(numbers[i]) + Number(numbers[i + 1]) + Number(numbers[i + 2]);
  secondSet =
    Number(numbers[i + 1]) + Number(numbers[i + 2]) + Number(numbers[i + 3]);

  if (firstSet < secondSet) {
    larger++;
  }
}

console.log(larger);
