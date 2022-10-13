// var fs = require("fs");

// var text = fs.readFileSync("./day04input.txt");
// let boards = text.toString().split("\n\n");

// let bingoNumbers = [
//   31, 50, 68, 16, 25, 15, 28, 80, 41, 8, 75, 96, 9, 3, 98, 83, 27, 62, 42, 59,
//   99, 95, 13, 55, 10, 23, 84, 18, 76, 87, 56, 88, 66, 1, 58, 92, 89, 19, 54, 85,
//   74, 39, 93, 77, 26, 30, 52, 69, 48, 91, 73, 72, 38, 64, 53, 32, 51, 6, 29, 17,
//   90, 34, 61, 70, 4, 7, 57, 44, 97, 82, 37, 43, 14, 81, 65, 11, 22, 5, 36, 71,
//   35, 78, 12, 0, 94, 47, 49, 33, 79, 63, 86, 40, 21, 24, 46, 20, 2, 67, 60,
// ];
// // let bingoNumbers = [7,4,9,5,11,17,23,2,0,14,21,24];
// let winningBoard = ["x", "x", "x", "x", "x"];

// let boardNumbers;

// const boardIntoLines = boards.map((board) => {
//   boardNumbers = board
//     .toString()
//     .split(/[ \n]/g)
//     .filter((n) => n);
//   return {
//     0: boardNumbers.slice(0, 5),
//     1: boardNumbers.slice(5, 10),
//     2: boardNumbers.slice(10, 15),
//     3: boardNumbers.slice(15, 20),
//     4: boardNumbers.slice(20, 25),
//   };
// });

// function arrayEquals(a, b) {
//   return (
//     Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index])
//   );
// }

// function checkColumn(data) {
//   let column1 = 0;
//   let column2 = 0;
//   let column3 = 0;
//   let column4 = 0;
//   let column5 = 0;
//   for (const line in data) {
//     // for(let v = 0; v < 5; v++){
//     // console.log(boardIntoLines[line][0])
//     if (data[line][0] === "x") {
//       column1 = column1 + 1;
//     }
//     if (data[line][1] === "x") {
//       column2 = column2 + 1;
//     }
//     if (data[line][2] === "x") {
//       column3 = column3 + 1;
//     }
//     if (data[line][3] === "x") {
//       column4 = column4 + 1;
//     }
//     if (data[line][4] === "x") {
//       column5 = column5 + 1;
//       // }
//     }
//   }
//   console.log(column1, column2, column3, column4, column5);
//   if (
//     column1 === 5 ||
//     column2 === 5 ||
//     column3 === 5 ||
//     column4 === 5 ||
//     column5 === 5
//   ) {
//     console.log("TRUE WINNER");
//     return true;
//   } else {
//     console.log("FALSE");

//     return false;
//   }
// }

// let index;
// let column = 0;

// for (let j = 0; j < bingoNumbers.length; j++) {
//   for (let i = 0; i < boardIntoLines.length; i++) {
//     console.log(bingoNumbers[j]);
//     // console.log(boardIntoLines[i]);

//     for (const line in boardIntoLines[i]) {
//       // console.log(boardIntoLines[i][line]);
//       if (boardIntoLines[i][line].indexOf(bingoNumbers[j].toString()) != -1) {
//         index = boardIntoLines[i][line].indexOf(bingoNumbers[j].toString());
//         // console.log(boardIntoLines[i][line][index])
//         boardIntoLines[i][line][index] = "x";

//         if (arrayEquals(boardIntoLines[i][line], winningBoard)) {
//           // console.log(boardIntoLines[i])
//           console.log(
//             "WINNER with number:",
//             bingoNumbers[j],
//             " and remaining numbers: ",
//             boardIntoLines[i]
//           );
//           return;
//         }
//         console.log(boardIntoLines[i]);

//         if (checkColumn(boardIntoLines[i]) === true) {
//           console.log(checkColumn(boardIntoLines[i]));
//           console.log(
//             "WINNER with number:",
//             bingoNumbers[j],
//             " and remaining numbers: ",
//             boardIntoLines[i]
//           );
//           return;
//         }

//         // console.log("FOUND", index)
//       }
//       // console.log(boardIntoLines[i][line]);

//       // boardIntoLines[i][line].splice(bingoNumbers[j], 1, 'x')
//     }
//     // console.log(boardIntoLines[i]);

//     console.log("");
//   }
// }

// //35784 too low
// //36720 too low

const fs = require("fs");

const lines = fs
  .readFileSync("day04input.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => Boolean(x))
  .map((x) =>
    x
      .replace(/[\n ,]+/g, " ")
      .trim()
      .split(" ")
      .map((y) => parseInt(y))
  );

let [drawnNumbers, ...cards] = lines;

class Card {
  constructor(numbers) {
    this.cardSize = 5;
    this.numbers = numbers;
    this.numberToPosition = new Map();
    for (let i = 0; i < this.numbers.length; i++) {
      const n = this.numbers[i];
      this.numberToPosition.set(n, {
        line: Math.floor(i / this.cardSize),
        column: i % this.cardSize,
      });
    }
    this.lines = Array(this.cardSize).fill(0);
    this.columns = Array(this.cardSize).fill(0);
    this.isComplete = false;
    this.markedNumbers = new Set();
  }

  addMarkedNumber(number) {
    const position = this.numberToPosition.get(number);
    if (!position) {
      return;
    }
    this.markedNumbers.add(number);
    this.lines[position.line]++;
    this.columns[position.column]++;
    if (
      this.lines[position.line] === this.cardSize ||
      this.columns[position.column] === this.cardSize
    ) {
      this.isComplete = true;
    }
  }

  unmarkedNumbers() {
    return this.numbers.filter((n) => !this.markedNumbers.has(n));
  }

  showCard() {
    const array = [];
    for (let i = 0; i < this.cardSize; i++) {
      array.push(
        this.numbers
          .slice(i * this.cardSize, i * this.cardSize + this.cardSize)
          .map((n) =>
            this.markedNumbers.has(n) ? `\x1b[47m\x1b[30m${n}\x1b[0m` : n
          )
          .join(`\t`)
      );
    }
    console.log(array.join("\n") + "\n");
  }
}

function part1(_cards) {
  let cards = _cards.map((x) => new Card(x));

  let winningCard;
  const actuallyDrawn = [];
  for (const drawn of drawnNumbers) {
    let finished = false;
    actuallyDrawn.push(drawn);
    for (const card of cards) {
      card.addMarkedNumber(drawn);
      if (card.isComplete) {
        finished = true;
        winningCard = card;
        break;
      }
    }
    if (finished) {
      break;
    }
  }

  const unmarkedNumbers = winningCard.unmarkedNumbers();

  console.log(
    unmarkedNumbers.reduce((a, b) => a + b, 0) * actuallyDrawn.slice(-1)
  );
}

part1(cards);

function part2(_cards) {
  let cards = _cards.map((x) => new Card(x));

  let lastWinningCard;
  let lastWinningNumber;
  const actuallyDrawn = [];
  for (const drawn of drawnNumbers) {
    actuallyDrawn.push(drawn);
    let hasIncompleteCards = false;
    for (const card of cards) {
      if (!card.isComplete) {
        hasIncompleteCards = true;
        card.addMarkedNumber(drawn);
        // card.showCard();
        if (card.isComplete) {
          lastWinningCard = card;
          lastWinningNumber = drawn;
        }
      }
    }
    if (!hasIncompleteCards) {
      break;
    }
  }

  const unmarkedNumbers = lastWinningCard.unmarkedNumbers();

  console.log(unmarkedNumbers.reduce((a, b) => a + b, 0) * lastWinningNumber);
}

part2(cards);