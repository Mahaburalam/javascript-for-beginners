// find falsy value from an array and remove 
const mixedArr = ["LWS", undefined, "Mahabur", "Anas", 0, '', "Nusrat", 1, " ", true, 23, NaN, false];

const truthyValue = mixedArr.filter(function(element){
    if(element) {
        return true;
    }
    else {
        return false;
    }
})
console.log(truthyValue);

// another way
const anotherTruthyValue = mixedArr.filter(Boolean);
console.log(anotherTruthyValue);