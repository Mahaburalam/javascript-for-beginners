// toString()
const firstNumber = 12;
console.log(firstNumber.toString(), typeof(firstNumber.toString()), typeof(firstNumber));

// toFixed()
const secondNumber = 234;
const thirdNumber = 123.3445;

console.log(secondNumber.toFixed(2), secondNumber.toFixed()); // return number in floating formate
console.log(thirdNumber.toFixed(5))

// parseInt()
const name = "Mahabur";
console.log(parseInt(name));
console.log(parseInt(thirdNumber), typeof(parseInt(thirdNumber)));

// parseFloat()
console.log(parseFloat(secondNumber));
console.log(parseFloat(thirdNumber));
console.log(parseFloat(name));