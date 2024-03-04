console.log(new Date());
alert(new Date());

const d1 = new Date('2020-01-01')
const d2 = new Date('2020-01-01T00:00')
console.log(d1.getFullYear(), d2.getFullYear());

// find ; when condition match then return 1st value
const numbers = [4, 9, 54, 16, 25, 29, 34];

function findValue(value, index, array){
    return value > 18;
}
const findArray = numbers.find(findValue);
console.log(`Find Array return single value: ${findArray}`);
