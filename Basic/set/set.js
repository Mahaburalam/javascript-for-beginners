const declearSet = new Set([2, 4, 5, 4, 8, 9, 0, 1, 0]);
console.log(declearSet);

// add element
declearSet.add("rahman", 99, 102);
console.log(`After add new element: ${declearSet}`);

// delete element
declearSet.delete(5);
console.log(...declearSet);