// Homework 8: objects, strings

// don't change this object
const initData = {
  firstName: 'Franklin',
  lastName: 'White',
  postalCode: 81000,
  email: 'franklin.white@gmail.com',
  address: 'Lviv',
  cars: []
}

function getUpperCasedObjectData() {
  // ADD YOUR CODE HERE
  const copiedData = Object.assign({}, initData);
  const keys = Object.keys(copiedData);
  for (let i = 0; i < keys.length; i++) {
    if (typeof copiedData[keys[i]] === 'string')
      copiedData[keys[i]] = copiedData[keys[i]].toUpperCase();
  }
  return copiedData;
}

// EXPECTED RESULT
console.log(getUpperCasedObjectData())
/*
{
  firstName: 'FRANKLIN',
  lastName: 'WHITE',
  postalCode: 81000,
  email: 'FRANKLIN.WHITE@GMAIL.COM',
  address: 'LVIV',
  cars: []
}
*/