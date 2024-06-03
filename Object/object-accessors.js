const person = {
    firstName: "Mahabur",
    lastName: "Alam",
    age: 28,
    get fullName() {
        return (this.firstName + " " + this.lastName)
    }
}
console.log(person);
console.log(person.fullName);