const numbers = new Set(["23", "A", "Test", 3]);
// console.dir(numbers);
for(let number of numbers) {
    console.log(number);
}
console.log(`Set Size: ${numbers.size}`);
console.log(typeof(numbers));