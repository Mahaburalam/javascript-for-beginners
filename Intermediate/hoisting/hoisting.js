// hoisting using Var variable

// var number; //variable declaration
// number = undefined;
number = 12; //value assign
// console.log('Var hoisting value is: ',number);
var number; //variable declaration

// hoisting using Let variable
// let number1;
number1 = 22;
// console.log(number1);
// let number1;

// hoisting using const variable
// const variable hosing didn't in syntactically. 
// const num;
num = "test"
// console.log(num);
// const num;

// other
var x
var y
x = 29;
// console.log(x ,y);
y = "name"

// test
// var nnn;
// nnn = undefined;
// nnn = 'test'
// async javascript behavior
setTimeout(()=>{
    console.log(nnn)
},3000);
const nnn = 'test'
// var nnn = 'test'
console.log(nnn1);
let nnn1 = 'test'
// var nnn1 = 'test'

let babyAge = 1
let isBirthday = true;
if(isBirthday){
    let babyAge = 2;
}
// console.log(babyAge);