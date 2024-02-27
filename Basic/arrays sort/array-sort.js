const number = [1, 3, 1.2, 7, 99, 2, 44, 5, .09];
// console.log(Math.max(number));
const name = ["Mahabur","Ahanaf", "Tasfir", "Bilal", "Xos"];
console.log(name);

// sort array string  in ascending order
const stringSortAsc = name.sort();
console.log(`Ascending order String array sort: ${stringSortAsc}`);

// sort array string in descending order
const stringArraySortDesc = name.reverse();
console.log(`Descending order number array sort: ${stringArraySortDesc}`);

// sort array number in ascending order
const numberArraySort = number.sort( function(a ,b)
{return (a - b)}
);
console.log(`Ascending order number array sort: ${numberArraySort}`);

// sort array number in descending order
const numberArrayDesc = number.sort( function(a ,b) 
{return (b - a)}
);
console.log(`Descending order number array sort: ${numberArrayDesc}`);

// find max value
console.log(`Find Max value: ${Math.max.apply(null, number)}`);

// find min value
console.log(`Find Max value: ${Math.min.apply(null, number)}`);

// sort array ascending order - original array not changes 
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(months);
console.log(`Ascending order String array sort without changing original array : ${sorted}`);

const reverseSorted = months.toReversed();
console.log(`Descending order String array sort without changing original array : ${reverseSorted}`);