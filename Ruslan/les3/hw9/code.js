// Homework 9: SET, arrays, functions

// don't change this array
const initArray = ['Ivan', 'Ihor', 'Vasyl', 'Oleh', 'Vasyl', 'Petro', 'Ihor', 'Ihor', 'Petro'];

function getUniqueArray(array) {
  // ADD YOUR CODE HERE
  return [...new Set(array)];
}

// EXPECTED RESULT
console.log(getUniqueArray(initArray)) // ['Ivan', 'Ihor', 'Vasyl', 'Oleh', 'Petro']
