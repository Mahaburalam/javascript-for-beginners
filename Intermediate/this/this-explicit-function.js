// explicit this function 'call'
const person1 = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
// console.log(person1.fullName()); return undefine

const person2 = {
    firstName: "Ahanaf",
    lastName: "Anas",
}
// console.log(person2);
console.log(person1.fullName.call(person2));

// explicit this function 'bind'

const person = {
    firstName: "test",
    lastName:"test-1",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "tuhin",
    lastName: "Arif",
}
// console.log(person.fullName());
// console.log(person.fullName.call(member));
console.log(person.fullName.bind(member)());
console.log(person.fullName.bind(member));