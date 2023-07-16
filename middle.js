// Test Assertion Functions
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The array is returning the middle correctly`);
  } else {
    console.log(`⛔⛔⛔ The array is not returning the middle correctly`);
  }
};

// Actual Function
const middle = function(array) {
  let middleElement = [];
  if (array.length === 1 || array.length === 2) {
    array = middleElement;
  } else if (array.length % 2 === 0) {
    const startIndex = Math.floor((array.length / 2) - 1);
    const endIndex = Math.floor((array.length + 2) / 2);
    middleElement = array.slice(startIndex, endIndex);
  } else {
    const oddIndex = Math.floor(array.length - 1) / 2;
    middleElement.push(array[oddIndex]);
  }
  return middleElement;
};

// Test Code
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