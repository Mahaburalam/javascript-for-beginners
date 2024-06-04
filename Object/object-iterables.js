// object iterator
const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};

const myCarKeys = Object.keys(myCar);
console.log(myCarKeys);

// object iterator
for(let myCarKey of myCarKeys) {
    console.log(myCarKey);
}

// array iterator
const cars = ["Saab", "Volvo", "BMW"];

// console.log(myCar);
// console.log(cars);
// console.dir(cars);
// how array loop work
// console.dir(cars[Symbol.iterator]());
const arrayElement = cars[Symbol.iterator]();
// console.log(arrayElement.next());
// console.log(arrayElement.next());
// console.log(arrayElement.next());
// console.log(arrayElement.next());

// for of loop
for(let car of cars) {
    // console.log(car);
}
  