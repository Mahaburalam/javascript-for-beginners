const myInfo = {
    name:"Md Mahbaur Alam",
    employeeID:11344,
    department:"IT"
}

for(let x in myInfo)
{
    console.log(`key - '${x}' and value - '${myInfo[x]}'`);
}

const myArray = [2, 4, 1, 4, 6];
for(let x in myArray)
{
    console.log(x);
}