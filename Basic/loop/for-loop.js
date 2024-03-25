// 12 ghor er namta
for(let i = 1; i <= 10; i++)
{
    console.log(`12 * ${i} = `, 12 * i);
}

// array for loop
const fruits = ["Banana", "Apple", "Pineapple", "Lemon", "papaya"];
const arrayLength = fruits.length;
// console.log(arrayLength);
for(let i = 0; i <= arrayLength - 1; i ++)
{
    console.log(`The array index is: ${i} and value is: ${fruits[i]}`);
}

// another example
let i = 0;
for(;i< 20; i++)
{
    if(i > 7)
    {
        break;
    }
    console.log(` ${i}`);
}

// more example
// another example
let x = 0;
for(; ; x++)
{
    if(x > 13)
    {
        break;
    }
    console.log(`output: ${x}`);
}