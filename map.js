// Function accepts an array and a callback Function
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    // Performs the callback function on each element of the array then pushes it into the results array
    results.push(callback(item));
  }
  return results;
};

// Exporting Function
module.exports = map;

// Function accepts two arrays and determines if they are equal
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

// Function accepts two arrays and returns a message based on equality
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The map function is working!`);
  } else {
    console.log(`⛔⛔⛔ The map function is not working!`);
  }
};

// Test Case For Strings -> Getting the first letter of each array element
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

// Test Case For Numbers -> Multiplying Numbers In An Array
const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, number => number * 3);
console.log(results2);

// Test Case For Numbers & Strings -> Telling me if the element is a string or number
const numAndStr = ["hello", 1, 2, 3, "here"];
const results3 = map(numAndStr, value => typeof value === 'string' ? "string" : "number");
console.log(results3);

// Assert Equal Tests
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [3, 6, 9, 12, 15]);
assertArraysEqual(results3, ['string', 'number', 'number', 'number', 'string']);