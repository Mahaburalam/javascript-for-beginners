// Array
const myArray = [2, 4, 3, "Mahabur", 9.21,];
console.log(myArray);

// show array element
const arrayLength = myArray.length
for(i = 0; i <= arrayLength - 1; i++)
{
    console.log(i, myArray[i]);
}

// access array element
console.log(`Access Array Element: `,myArray[2]); //3

// create array in another way
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);

// add new element in last index
myArray.push("Alam", 23);
console.log(myArray);

// remove last element
myArray.pop()
console.log(myArray);

// add new element in last index
myArray.unshift(10, 45);
console.log(myArray);

// remove first element of array
myArray.shift();
console.log(myArray);

// array to string conversion
const arrayToString = ['name', 22, 23.4, "test"]
const arrayToStringConversion  = arrayToString.toString()
console.log(arrayToStringConversion, ` Type of: `, typeof(arrayToStringConversion));

// array
const numberArray = ["John", "Doe", 46, 1000];
console.log(`Array Length:`, numberArray.length);

// accessing array last element
console.log(`Access Array Last Element:` ,numberArray[numberArray.length - 1]);

// 
console.log(Array.isArray(numberArray))

// object
const personOject = 
    {
        firstName:"John", 
        lastName:"Doe",
        age:46
    };
console.log(personOject.length);
console.log(Array.isArray(personOject))
