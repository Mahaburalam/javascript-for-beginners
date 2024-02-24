const myName = new String ("Mahabur");
console.log(myName);

const value = "JavaScript";
console.log(value, `- Length of this string:`,value.length)

// string method
let text = 'Hello World';
console.log(`Character:`,text.charAt(0), `Character Value:`,text.charCodeAt(0));

let newText = "Apple, Banana, Kiwi";
const sliceValue = newText.slice(3, 8);
const sliceNegative = newText.slice(-13, -4)
const sliceSingle = newText.slice(-13)
console.log(`positive:`,sliceValue);
console.log(`To given Negative Value:`,sliceNegative);
console.log(`To given Single Value:`,sliceSingle);

console.log(`Convert to upper case:`,value.toUpperCase());
console.log(`Convert to Lower case:`,value.toLowerCase());

//
console.log(newText.substr(3, 10)); //

// concat
console.log(`concat two string:`,text.concat("-", value));

// trim
console.log(`remove whitespace: newText.trim()}`);

let text1 = "     Hello World!     ";
let text2 = text1.trim();
console.log(text2);

// pad
let text3 = "5";
let padded = text3.padStart(4,"x");
console.log(padded);

// replace
let textt = "Please visit Microsoft!";
let newTextt = textt.replace("Microsoft", "W3Schools");
console.log(newTextt);