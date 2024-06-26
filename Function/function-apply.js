// find max
const findMax = Math.max(1, 2, 3, 5, 0);
console.log(`Max number :`,findMax);

// from array find max
const arrayFindMax = Math.max.apply( 0, [3, 2, 6, 9, 7, 11, 4]);
console.log('Max number from array: ',arrayFindMax);

// function Apply()
const person = {
    personInfo: function(age, city, country) {
        return ("Hi, i'm "+this.firstName + " " + this.lastName + " age is" + age + " and location is " + city + ", " + country);
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

const showInfo = person.personInfo.apply(person2, [23, "Khulna", "Bangladesh"]);
console.log(showInfo);