// Homework 1: arrays, functions and string prototype methods

// don't change this array
const carBrands = ['BMW', 'OPEL', 'AUDI', 'VOLKSWAGEN', 'FERRARI'];

function getBrandFromArray(brandsArray, index) {
  // TYPE YOUR CODE ONLY HERE
  brandsArray = brandsArray.reverse();
  return 'Brand: ' + brandsArray[index].toLowerCase();
}

// EXPECTED RESULT (don't touch code below)

const resultA = getBrandFromArray(carBrands, 0)
console.log(resultA) // Brand: ferrari

const resultB = getBrandFromArray(carBrands, 2)
console.log(resultB) // Brand: audi

const resultC = getBrandFromArray(carBrands, 4)
console.log(resultC) // Brand: bmw
