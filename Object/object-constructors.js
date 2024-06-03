// In constructor function 
function Person(fName, lName, age, location) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.location = location;
    this.fullName = function() {
        return (this.firstName + " " + this.lastName);
    }
}

// console.log(Person("Mahabur", "Alam", 23, "Dhaka"));
const user1 = new Person("Mahabur", "Alam", 23, "Dhaka");
const user2 = new Person("Mahabur", "Alam");
// console.log(user1, user2);
console.log(user1.fullName());