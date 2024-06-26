const person = {
    fullName: function(city, country) {
        return( this.firstName + " " + this.lastName +" " + city + " " + country);
    }
}

const person1 = {
    firstName: "Mahabur",
    lastName: "Alam"
}

const person2 = {
    firstName: "Ahnaf",
    lastName: "Anas"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2, "Khulna", "Bangladesh")); // with passing arguments