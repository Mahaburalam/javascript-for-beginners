const piMath = Math.PI;
console.log(`Result of PI value: ${piMath}`);

// square root
const sqrtResult = Math.sqrt(9);
console.log(`Output of square root: ${sqrtResult}`);

// round function - return value if value is getter than .5
const firstValue = 23.1;
const secondValue = 3.5;
const thirdValue = 9.7;

console.log(`Result of round value is: ${Math.round(firstValue)}`);
console.log(`Result of round value is: ${Math.round(secondValue)}`);
console.log(`Result of round value is: ${Math.round(thirdValue)}`);
console.log("-------------------------------------------------------")

// floor function - return only integer part
console.log(`Result of floor value is: ${Math.floor(firstValue)}`);
console.log(`Result of floor value is: ${Math.floor(secondValue)}`);
console.log(`Result of floor value is: ${Math.floor(thirdValue)}`);
console.log("-------------------------------------------------------")

// ceil function - return nearest integer 
console.log(`Result of ceil value is: ${Math.ceil(firstValue)}`);
console.log(`Result of ceil value is: ${Math.ceil(secondValue)}`);
console.log(`Result of ceil value is: ${Math.ceil(thirdValue)}`);
console.log("-------------------------------------------------------")

// trunc function - return only integer part
console.log(`Result of trunc value is: ${Math.trunc(firstValue)}`);
console.log(`Result of trunc value is: ${Math.trunc(secondValue)}`);
console.log(`Result of trunc value is: ${Math.trunc(thirdValue)}`);
console.log("-------------------------------------------------------");

// Math.trunc() and Math.floor() are same for positive numbers but difference for negative numbers

console.log(`Power: ${Math.pow(8, 2)}`);
console.log(`Minimum number find: ${Math.min(0, 150, 30, 20, -8, -200)}`);
console.log(`Maximum number find: ${Math.max(0, 150, 30, 20, -8, -200)}`);
console.log("-------------------------------------------------------");
// generate random number
console.log(`Generate random number: ${Math.random()}`); // return value between 0 and 1

