let c = {greeting:"hey!"};
let d;
d = c;
c.greeting = "Hello";
// console.log(d.greeting);

// 2
function bark() {
    // console.log("woof!");
}
bark.animal = 'dog';

bark();

// 3
const person  = {
    firstName:"John",
    lastName:"Doe",
    id: 34243
};
person.name = function() {
    return( this.firstName + " " + this.lastName);
}
// console.log(person.name());

// 4
const shape = {
    radius: 10,
    diameter() {
        return (this.radius * 2);
    },
    test: function() {
        return (2 * Math.PI * this.radius);
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.test());
console.log(shape.perimeter());