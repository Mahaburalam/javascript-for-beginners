// global function 
var x = 10;
let y = 23;
const z = 50

// block scope
{
    let value1 = "mahabur";
    console.log(value1);
}
// console.log(value1);
{
    const value2 = "Ahnaf";
    console.log(value2);
}
// console.log(value2);

// {
//     var value3 = "test"; // var is not a functional scope
//     console.log(value3);
// }
// console.log(value3);

{
    console.log(x);
    console.log(y);
    console.log(z);
}

// functional scope
function A(){
    var xx = 111;
    console.log(`Functional Scope by Var variable: ${xx}`)
}
A();
// console.log(`Functional Scope: ${xx}`)

function B(){
    let xx = 222;
    console.log(`Functional Scope by Let variable: ${xx}`);
    console.log(y)
}
B();

function C(){
    const xx = 121;
    console.log(`functional scope by Const variable: ${xx}`);
}
C();