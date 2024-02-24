//
function printSomething()
{
    console.log("JavaScript Function");
}
printSomething();

// return
function addition(a, b)
{
    console.log("Result of addition");
    const multiply = a * b;
    // return a * b;
    return multiply;
}
console.log(addition(4, 6));
const newOutput = addition(6, 3);
console.log(newOutput);

// functional scope variable can not accept outside function
console.log(multiply);