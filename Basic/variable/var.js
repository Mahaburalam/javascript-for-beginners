var myName = 'Md Mahabur Alam';
console.log(myName);

// global scope
var myCountry = "Bangladesh";
console.log(myCountry);
if(true)
{
    var myCountry = "Islamic Country";
    console.log(myCountry);
}
console.log(myCountry);

// var hoisting
favLanguage = 'Bangla';
var favLanguage;
console.log(favLanguage);

