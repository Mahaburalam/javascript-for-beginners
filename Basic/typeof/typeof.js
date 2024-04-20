// Difference Between Undefined and Null
console.log(typeof(a)); //undefined
console.log(typeof("Mahabur"));
console.log(typeof(12.3));
console.log(typeof(NaN)); //number
console.log(typeof(true)); //boolean
console.log(typeof( function(){})) //function
console.log(typeof(null)); //object
console.log(typeof([1, 2, 4])); //object
console.log(typeof(new Date())); //object
console.log(typeof(myObject = {name:"Mahbaur", age:23})); 

let valueOne = NaN;
console.log(valueOne, typeof(valueOne));