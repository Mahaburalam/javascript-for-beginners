const numbers = new Set(["23", "A", "Test", 3, 23, 33, 3]); // set store only unique value
// console.dir(numbers);
for(let number of numbers) {
    console.log(number);
}
console.log(`Set Size: ${numbers.size}`);
console.log(typeof(numbers));

// add new element in set
numbers.add="new";
console.log(numbers);