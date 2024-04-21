// number to string
const firstValue = 34;
console.log(firstValue.toString());
console.log(String(firstValue));

console.log(String(100 + 23), typeof(String(100 + 23)));

// string to number
const firstString = "3.2345";
console.log(Number(firstString), typeof(Number(firstString)));

const secString = "";
console.log(Number(secString));

const thirdString = " ";
console.log(Number(thirdString));

const forthString = "Mahabur";
console.log(Number(forthString));

// another way
console.log(+firstString, typeof(+firstString));

// date to number
const date = new Date();
console.log(date, typeof(date));
console.log(Number(date), typeof(Number(date)));
// number to date
const number = 1203;
console.log("Number to date Conversion:",new Date(number));

// boolean to number
const trueValue = true;
console.log(trueValue, typeof(trueValue));
console.log(Number(trueValue), typeof(Number(trueValue)));

const falseValue = false;
console.log(falseValue, typeof(falseValue))
console.log(Number(falseValue),typeof(Number(falseValue)));
// number to boolean
const number1 = 1;
const number2 = 22;
const number3 = 0;
console.log(Boolean(number1))
console.log(Boolean(number2))
console.log(Boolean(number3))