// Homework 6: functions, Date, strings

function getAgeUpToHours(birthdayDate) {
  // TYPE YOUR CODE ONLY HERE
  let curDate = new Date();
  let hours = 0;
  let dif = Math.round(curDate.getTime() - birthdayDate.getTime());
  let years = Math.round(dif / 1000 / 3600 / 24 / 374);
  let days = Math.floor(dif / 1000 / 3600 / 24 % 365.25);
  let hoursDif = curDate.getHours() - birthdayDate.getHours();
  if (hoursDif < 0) hours = 24 + hoursDif;
  else hours = hoursDif;
  return `${years} years, ${days} days, ${hours} hours`
}


// EXPECTED RESULT
console.log(getAgeUpToHours(new Date('March 15, 1997 21:15'))) // 23 years, 348 days, 23 hours
console.log(getAgeUpToHours(new Date('July 25, 1986 14:00'))) // You can paste you birth date and look how old are you ;)
