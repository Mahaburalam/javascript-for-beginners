const number = 5;
try{
    if(number == "") throw "This is not a number";
    if(number => 5) throw "The number is less than assign value";
    if(number < 12) throw "The number is getter than assign value";
}
catch(err){
    console.log(err);
}