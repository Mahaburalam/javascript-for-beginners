const currentDate = new Date();
console.log(currentDate);

// get year only
const yearOnly = currentDate.getFullYear();
console.log(`Show Year only: ${yearOnly}`);

// get month only
const monthOnly = currentDate.getMonth();
console.log(`Show month only: ${monthOnly} - March`);

// get day only
const dayOnly = currentDate.getDate();
console.log(`Show day only :${dayOnly}`);