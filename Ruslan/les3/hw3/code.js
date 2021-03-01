// Homework 3: functions, objects, string prototype methods

// don't change this object
const user = {
  firstName: 'Franklin',
  lastName: 'White',
  email: 'franklin.white@gmail.com',
}

function getUserDataStringByFormat(format) {
  // TYPE YOUR CODE ONLY HERE

  const keys = format.split(', ');
  let str = '';
  for (let i = 0; i < keys.length; i++) {
    if (i + 1 === keys.length) {
      str += user[keys[i]];
    } else {
      str += user[keys[i]] + ', ';
    }
  }
  return str;
}

// EXPECTED RESULT (don't touch code below)

const resultA = getUserDataStringByFormat('firstName, email')
console.log(resultA) // Franklin, franklin.white@gmail.com

const resultB = getUserDataStringByFormat('firstName, lastName')
console.log(resultB) // Franklin, White

const resultC = getUserDataStringByFormat('email, firstName, lastName')
console.log(resultC) // franklin.white@gmail.com, Franklin, White