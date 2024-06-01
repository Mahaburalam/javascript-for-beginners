const person = {
    firstName: "Mahabur",
    lastName: "Alam",
    permanentAddress: "Khulna",
    division: "Khulna",
    fullName: function() { // this is method. when function declare inside object this called method
        return (this.firstName + " " + person.lastName);
    }
}
// access full object
// console.log(person);

// access object method
console.log('Access Object Method:',person.fullName());

// access object property
console.log(`access object property: ${person.division}`);

// add object property
person.age = 28;
person.presentAddress = "Mirpur-12, Dhaka"
console.log(person);

// add object method
person.fullAddress = function() {
    return (this.presentAddress + ' is my present address' + " and " + this.permanentAddress + " and is my permanent address");
}

console.log(person.fullAddress());
