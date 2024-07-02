class Car {
    constructor (name, model) {
        this.name = name;
        this.model = model;
    }
}

const bmw = new Car("BMW", "B14S");
const audi = new Car("AUDI", "A8");
// console.log(typeof Car);

// console.log(`Car Name is `,bmw.name + " and model name is " + bmw.model);

class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    info(designation) {
        return (this.name + " And his designation is " + designation);
    }
}
const person1 = new Person(23, "Tipu")

console.log(person1.info("Programmer"));
console.log(person1.age)