const person = {
    age: 29,
    location: "Dhaka"
}
// console.log(person);
person.name = "Mahabur";
// person.prototype.work = "Test";
// console.dir(person);


// constructor function add object property
function Info(name, age, location) {
    this.fullName = name;
    this.myAge = age;
    this.myLocation = location
}

const khalid = new Info("Khalid", 21, "Sylhet");
const mohin = new Info("mohin", 29, "Bogra")

khalid.hobby = "Reading Book";
// console.log(mohin);

Info.plan = "tour";
Info.prototype.plan = "tour";
console.log(khalid);
console.log(khalid.plan);
// console.log(Info);