// playing ludo game print 1 to 6 number in randomly

// solution - 1
const ludoGameNumberPrint = Math.floor(Math.random() * 6 + 1);
console.log(`Print 1-6 in random generated: ${ludoGameNumberPrint}`);

// solution - 2
function showRandomNumber(min, max){
    return(Math.floor(Math.random() * (max - min + 1) + min))
}

const showLudoGameNumber = showRandomNumber(1, 6);
console.log(`Show ludo Number : ${showLudoGameNumber}`);
console.log("------------------------------------------------------");

// Print friend name alphabetically

const friendName = ["Mustakim", "Liton Mia", "Araf", "Mahabur Alam", "Tasnim", "Babul"];
console.log(`Actual friend name list: ${friendName}`);

const showFriendNameAlphabetically = friendName.sort();
console.log(`Show friend name alphabetically: ${showFriendNameAlphabetically}`);
console.log("--------------------------------------------------------");

// print number ascending order
const numbers = [102, 98, 56, 5, 0, 3, 0.56, 0.545, 1.4, 3.2];
console.log(`Original Number Array : ${numbers}`);
const numberSortAscending = numbers.sort(function(a, b)
{
    return(a - b)
});
console.log(`Sort number ascending order: ${numberSortAscending}`);
console.log("----------------------------------------------------------");

// find out leap year
// solution - 1
const givenYear = 2029;
if((givenYear % 400 === 0) || (givenYear % 4 === 0 && givenYear % 100 !== 0))
{
    console.log(`The given year: ${givenYear} is leap year`);
}
else
{
    console.log(`The given year: ${givenYear} is not a leap year`);
}

//solution - 2 
function leapYear(year){
    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))
    {
        console.log(`The year: ${year} is a leap year`);
    }
    else
    {
        console.log(`The year: ${year} is not a leap year`);
    }
}
// const inputYear = leapYear(2023);
leapYear(2023);
leapYear(2029);
leapYear(2032);

// solution - 3
const year = 2000;
if(year % 400 === 0)
{
    console.log(`Leap Year : ${year}1`);
    if(year % 4 === 0 && year % 100 !== 0)
    {
        console.log(`Leap Year :  ${year}`);
    }
}
else
{
    console.log(`Is not a Leap Year : ${year} `);
}

// count total number of vowel from sentence

// find duplicate numbers from an array
const numberArray = [2, 3, 9, 6, 0, 1, 3, 6, 5, 7, 9, 4];

const duplicateNumber = numberArray.filter(function(value, index, array){
    return (array.indexOf(value) !== index); //index = current index
});
console.log(`Array Duplicate Values are: ${duplicateNumber}`);

// remove duplicate value/ unique value from an array
const arrayUniqueValue = numberArray.filter(function(value, index, array){
    return array.indexOf(value) === index;
})
console.log(`Unique value from array: ${arrayUniqueValue}`);