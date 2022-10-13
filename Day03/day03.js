var fs = require("fs");

var text = fs.readFileSync("./day03input.txt");
let bits = text.toString().split("\n");
let noOfBits = 12;
let bitsString = "";
numberOfOnes = 0;
numberOfZeros = 0;
let gammaRate = "";
let epsilonRate = "";

// //first star - 2954600
// for(let i = 0; i < noOfBits; i++){
//   bitsString = bits.map((animal) => animal[Number([i])]).join('')
//   var numberOfOnes = (bitsString.match(/1/g) || []).length;
//   var numberOfZeros = (bitsString.match(/0/g) || []).length;

//   if(numberOfZeros > numberOfOnes){
//     gammaRate = gammaRate.concat("0")
//     epsilonRate = epsilonRate.concat("1")
//   } else {
//     gammaRate = gammaRate.concat("1")
//     epsilonRate = epsilonRate.concat("0")
//   }
// }
// var gammaRateDecimal = parseInt(gammaRate, 2);
// var epsilonRateDecimal = parseInt(epsilonRate, 2);

// console.log("Answer: " + (gammaRateDecimal * epsilonRateDecimal))

oxygenRating = 0;
scrubberRating = 0;
let oxygenRatingBits = bits;
let scrubberRatingBits = bits;
// console.log(scrubberRatingBits)

//second star - 2954600
for (let i = 0; i < noOfBits; i++) {
  bitsString = scrubberRatingBits.map((animal) => animal[Number([i])]).join("");
  var numberOfOnes = (bitsString.match(/1/g) || []).length;
  var numberOfZeros = (bitsString.match(/0/g) || []).length;

  if (numberOfZeros > numberOfOnes) {
    // oxygenRatingBits = oxygenRatingBits.filter((bit) => bit[i] === "0");
    if (scrubberRatingBits.length !== 1) {
      scrubberRatingBits = scrubberRatingBits.filter((bit) => bit[i] === "1");
    }
  }

  if (numberOfZeros < numberOfOnes) {
    // oxygenRatingBits = oxygenRatingBits.filter((bit) => bit[i] === "1");

    if (scrubberRatingBits.length !== 1) {
      scrubberRatingBits = scrubberRatingBits.filter((bit) => bit[i] === "0");
   }
  }

  if (numberOfZeros === numberOfOnes) {
    // oxygenRatingBits = oxygenRatingBits.filter((bit) => bit[i] === "1");
    if (scrubberRatingBits.length !== 1) {
      scrubberRatingBits = scrubberRatingBits.filter((bit) => bit[i] === "0");
    }
  }
}

// console.log(oxygenRatingBits);
// console.log(scrubberRatingBits);
// console.log(parseInt(Number(oxygenRatingBits), 2))
var gammaRateDecimal = parseInt(101101010110, 2);
console.log(573 * 2902)
// console.log(parseInt(Number(101101010110), 2))
// console.log("Answer: " + ((parseInt(Number(001000111101), 2)) * (parseInt(Number(101101010110), 2))));
// console.log(001000111101 * 
//   101101010110)

//3476596 too high

// 2902 too low

//1662846 correct