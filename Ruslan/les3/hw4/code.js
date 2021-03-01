// Homework 4: functions, objects, Date

// You have to create this function getObjectWithDate and it will return an object
// TYPE YOUR CODE ONLY HERE
function getObjectWithDate(obj1, obj2, ...objects){
    const currDate = new Date();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate() + 1;
    const dateRes = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}`;
    const objDate = {currentDay: dateRes};
    return Object.assign({}, objDate, obj1, obj2, ...objects);
}

// EXPECTED RESULT (don't touch code below) You have to create this function getObjectWithDate and it will return an object
const resultA = getObjectWithDate({ firstName: 'John' }, { phoneNumber: 189920001 })
console.log(resultA) // { currentDay: '27/02', firstName: 'John', phoneNumber: 189920001 }

const resultB = getObjectWithDate({ id: 9188 }, { firstName: 'Martin' }, { email: 'martin.112@gmail.com' })
console.log(resultB) // { currentDay: '27/02', id: 9188, firstName: 'Martin', email: 'martin.112@gmail.com' }
