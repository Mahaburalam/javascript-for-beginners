// function parameter
function name(myName, herName) {
    return [myName, herName];
}
console.log(name("Mahabur Alam", "Nusrat Jahan", "Ahnaf Anas")); // this is arguments 

// functions default parameter
const sum = (x, y = 1) => {
    // sum = (x + y);
    return (x + y);
}
console.log(sum(7));

const multiply = (x, y) => {
    // sum = (x + y);
    return (x * y);
}
console.log(multiply(5));