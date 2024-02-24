const name = "Md Mahabur Alam" //string
console.log(name);

const myName = new String("Md Mahabur Alam") //string object
console.log(myName);

console.log(name == myName) // check value only
console.log(name === myName) // check value and type

const myString = "Hi, i'm Mahabur '\and '\ javaScript \
developer.";
console.log(myString);

// string object check
const firstString = new String("Tipu");
const secondString = new String("Tipu");

console.log(firstString == secondString); //false -> object not compareable
console.log(firstString === secondString); //false -> object not compareable