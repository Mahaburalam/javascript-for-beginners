let counter = 0;
function count() {
    counter++;
}
count();
count();
counter = 5;
count();

console.log(counter);
counter = 9;
console.log(counter);