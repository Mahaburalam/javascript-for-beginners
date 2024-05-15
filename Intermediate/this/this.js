// this keyword use in object
const person = {
    firstName:'Mahabur',
    lastName: "Alam",
    id: 23,
    fullName: function(){
        // return (person.firstName + " " + person.lastName);
        return (this.firstName + " " + this.lastName);
    }
}
console.log(`Person full name is:`,person.fullName());
// console.log(person.id);

const myInfo = {
    firstName:'Mahabur',
    lastName: "Alam",
    id: 23,
    fullInfo : function(){
        return this;
    }
}

// console.log(myInfo.fullInfo());

