let text = "Please locate where 'locate' occurs! where";
let index = text.indexOf("locate");
let index1 = text.indexOf("new");
console.log(`if available:`,index, `; if not available:`,index1); // return start position

let indexOf = text.lastIndexOf("where");
console.log(indexOf); // return last index position

// index with position
let newText = 'Please locate where "locate" occurs! Please'
let textWithPosition = newText.indexOf("locate", 8);
console.log(textWithPosition); //when set value after that the count is start and return index number

let lastIndexPosition = newText.lastIndexOf("Please", 9);
console.log(lastIndexPosition);
// include
console.log(`Include return: ${newText.includes("Please")}`);
console.log(`Include return: ${newText.includes("where", 20)}`);

// start with
let value = "Hello world, welcome to the universe.";
console.log(`Start with return: ${value.startsWith("Hello")}`);
console.log(`Start with return: ${value.startsWith("Hello", 9)}`);
console.log(`End with return: ${value.endsWith("universe.")}`);
console.log(`End with return: ${value.endsWith("universe.", 9)}`);