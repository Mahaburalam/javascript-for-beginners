// block scope
if(true)
{
    let x = 10;
    console.log(x);
}
console.log(x);

// let hoisting

// let number ->variable declear
// let number = undefined
number = 20;
let number;
console.log(`let hoisting output: ${number}`);

// re declear
let favMobile = "Nothing";
let favLanguage = 'iPhone';
// console.log(favMobile);