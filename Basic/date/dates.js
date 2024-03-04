// current date
const currentDate = new Date();
console.log(`Show current date time :${currentDate}`);

// show only date and time

function dateTime(){
   return (document.getElementById("date-time").innerHTML = currentDate.toDateString());
}
// const dateTimeNow = document.getElementById("date-time").innerHTML = currentDate.toDateString();
// console.log(dateTimeNow);

// 
const currentDateOnly = new Date(2024, 2, 3);
console.log(currentDateOnly);