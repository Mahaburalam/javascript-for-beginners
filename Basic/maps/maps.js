const mapValues = new Map([
    ["name", "Mahbaur"],
    ['id', 205],
    ["City", "Dhaka"]
]);
console.log("Main Values:", mapValues);

// add new values
mapValues.set("Country", "Bangladesh");
console.log('After add one values', mapValues);

// view values
mapValues.get();
console.log(`View all values:`, mapValues);

// show size
console.log(`Show number of values:`, mapValues.size);

// delete element
console.log(`Delete element: `, mapValues.delete("id"));
console.log(mapValues);