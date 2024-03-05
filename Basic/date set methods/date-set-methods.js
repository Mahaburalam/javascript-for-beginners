const curDate = new Date();
console.log(curDate);

const anotherDate = new Date();
console.log(anotherDate);

// set year
anotherDate.setFullYear(2020);
console.log(`After set my custom year:${anotherDate}`);

anotherDate.setHours(23 + 9)
console.log(`After set custom hour: ${anotherDate}`);