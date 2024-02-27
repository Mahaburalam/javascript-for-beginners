const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);
console.log(fruits);

// string conversion
let arrayToString = fruits.toString();
console.log(arrayToString, `Type: `,typeof arrayToString);

// string conversion another way
arrayToString = fruits.join(" - ");
console.log(arrayToString);

// push() - add in last
fruits.push('Name', 23);
console.log(fruits);

// pop() - remove from last
fruits.pop();
console.log(fruits);

// unshift() add in first
fruits.unshift(2, "Mustakim");
console.log(fruits);

// shift() - remove from first
fruits.shift();
console.log(fruits);

// concat
const numberArray = [22, 3, 0, 9, 7, 99, 32, 55];

let arrayConcat = fruits.concat(numberArray);
console.log(`Concat two array: ${arrayConcat}`, `Types:`, typeof(arrayConcat), `Length:`, arrayConcat.length);

const myBoys = ["Emil", "Tobias", "Linus"];
const myGirls = ["Cecilie", "Lone"];
let arrayConcatMore = fruits.concat(numberArray, myBoys, myGirls);

console.log(arrayConcatMore);

// add new
numberArray.splice(4, 0, 102, 98);
console.log(numberArray);

// remove
numberArray.splice(2, 5);
console.log(numberArray);