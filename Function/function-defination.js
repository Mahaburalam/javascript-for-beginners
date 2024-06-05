/*
    1. IIFF(Immediately Invoked Function Expression) -> self function invoking
    2. function expression not hoisted
    3. arrow function

*/

// function literal
// function definitions
function testFunc() {
    // console.log("test")
}
testFunc();

// function parameter-argument
function sum(a, b) { //a,b is parameter
    return (a * b);
}
const result = sum(3, 6) // 3, 6 argument
console.log(result);

// self invoke function 
(function() {
    console.log("anonymous function");
})();

// function expression
const testFunction = function (a, b){
    return (a + b)
}
const output = testFunction(3, 5);
console.log(output);

// arrow function
const testFunc1 = (x, y) => {
    return (x /y);
}
console.log(testFunc1(2, 4));