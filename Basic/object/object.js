function sayHi(){
    console.log(name);
    // console.log(age);
    var name  = 'javaScript';
    // let age = 21;
}
sayHi();

const shape = {
    radius: 10,
    diameter(){
        return this.radius * 2;
    }
};

console.log(shape.diameter());

const myInformation = {
    name:'Md Mahabur Alam',
    age: 26,
    gender: MathMLElement,
    occupation: "Software Development",
    familyMember: 3,
    familyDetails:{
        name1: "Ahanaf Anas",
        age1: 1.4,
        gender1: "Male",
        occupation1: "Playing Games",

        name2:"Nusrat Jahan",
        age2:"",
        gender2:"Female",
        occupation2:"House wife"
    }
}

console.log(myInformation.familyDetails.name1);
console.log(myInformation.familyDetails.name2);
console.log(myInformation['familyDetails']);
console.log(myInformation['familyMember']);

const myObject = {
    name: "Mahabur",
    country:"Bangladesh",
    countryRejion:'Asia'
}