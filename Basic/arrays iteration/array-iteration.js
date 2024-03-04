const numberArray = [23, 21, 1, 9, 5, 88];
/*
function myFunction(value, index, array){

}
*/
// forEach no return new array list
numberArray.forEach(function(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-------------")
})
console.log(`Show my full array: `,numberArray);

// map(); create new array
const mapArrayResult = numberArray.map(function(value, index, array){
    return value * 2;
});
console.log(`Main array: ${numberArray}`);
console.log(`After operation the new array is: ${mapArrayResult}`);

// filter; create new array 

function arrayFilter(value, index, array){
    return (value > 4);
}

const myFilterArray = numberArray.filter(arrayFilter)
console.log(`Filter Array Result: ${myFilterArray}`);

// reduce; return cumulative result

const reduceArray = numberArray.reduce(function myReduceFunction(total, value, index, array){
    return (total + value) / 2 ;
})
console.log(`Reduce array : ${reduceArray}`);

// array sort
const fruits = ["Banana", "Orange", "Apple", "kiwi"];
console.log(fruits.sort().reverse());
// console.log(fruits.sort(function(a,b) {return a-b}));