const objMaps = new Map([
    ["name", "Mahabur"],
    ["age", 23],
    [23, 7]
]);

// console.log(objMaps);

const mapKeys = objMaps.keys(); //get map keys
// console.log('map keys:', mapKeys);

const mapValues = objMaps.values() //get map values
// console.log(mapValues);

const mapEntries = objMaps.entries(); //get key:value pair - all entries
// console.log(mapEntries);

// map iterator
for(let objMap of objMaps) {
    // console.log(objMap);
}

// add new properties
objMaps.set("location", "Dhaka");
objMaps.set("Apple", 45);

// delete element
objMaps.delete("age");

console.log(objMaps);

console.log(objMaps.size);