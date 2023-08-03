const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Return Empty
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// Array is an odd number total => Return A Single Element
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

// Array is an even number total => Return Multiple Elements
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual([], middle([1]));
assertArraysEqual([2], middle([1, 2, 3]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));