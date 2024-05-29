const info = {
    name: "Digicon",
    Department: 23,
    employee: 1023,
    employeeSatisfaction: "No"
}

for( let orgInfo in info) {

    // console.log(orgInfo); // show object key
    // console.log(info[orgInfo]); // show object value
}

// add new properties in object
info.location = "Dhaka, Bangladesh";
// console.log(info);

// delete property from object
delete info.age;
// delete info['age'];
// console.log(info);

// object in array
const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN",
    location: [
        {presentAddress: "Mirpur,Dhaka"},
        {permanentAddress: "Chuknagor,Khulna"}
    ]
};
// console.log(person.location[0].presentAddress);
for(let personLocation in person.location[0]) {
    // console.log(person[personLocation]);
    // console.log(person.location[0][personLocation]);
}

console.log(person.protype)
