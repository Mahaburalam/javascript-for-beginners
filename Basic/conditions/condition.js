var year = 2000;
if(true)
{
    console.log(year);
    // let year = 2021;
}

// find leap year
const leapYear = 2020;
if((leapYear % 400 == 0) ||(leapYear % 4 === 0 || leapYear % 100 !== 0))
{
    console.log(`The year ${leapYear} is a leap year`);
}
else
{
    console.log(`The year ${leapYear} is not a leap year`);
}

// check age
const age = 30;
if(age >= 21)
{
    console.log("Now, you can got marriage");
}
else if(age <= 18)
{
    console.log("You are not enough mature");
}
else if(age >= 30)
{
    console.log('You are enough mature');
}
else
{
    console.log("You are too child");
}