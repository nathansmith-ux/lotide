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
    console.log(`✅✅✅ The array has been flattened!`);
  } else {
    console.log(`⛔⛔⛔ The array was not flattened correctly, try again`);
  }
};

// Function takes a nested array and returns a single-level array
const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    // Checking if the array element is not an array. If it is not then we will push that element to our declared array above.
    if (!Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    } else {
      // If the array element is an array then we will merge the two arrays to make them a single-level array
      flattenedArray = flattenedArray.concat(array[i]);
    }
  }
  return flattenedArray;
};

// Exporting Function
module.exports = flatten;

// Checking If The Function Works For Only Numbers
const onlyNumbers = [1, 2, 3, 4, 5, 6];
const beforeOnlyNumbers = [1, 2, [3, 4], 5, [6]];

// Checking If The Function Works For Only Strings
const onlyStrings = ["LHL", "bootcamp", "is", "fun"];
const beforeOnlyStrings = ["LHL", "bootcamp", ["is", "fun"]];


// Checking If The Function Works For An Empty Array
const emptyArray = [1, 2, 3, 5];
const beforeEmptyArray = [1, 2, 3, [], 5];

// Checking If The Function Works With Both Numbers and strings
const stringAndNumbers = [1, 2, 3, 4, "LHL", "Lighthouse", 6, "Web"];
const beforeStringAndNumbers = [1, 2, 3, 4, ["LHL", "Lighthouse"], 6, "Web"];

assertArraysEqual(onlyNumbers, flatten(beforeOnlyNumbers));
assertArraysEqual(onlyStrings, flatten(beforeOnlyStrings));
assertArraysEqual(emptyArray, flatten(beforeEmptyArray));
assertArraysEqual(stringAndNumbers, flatten(beforeStringAndNumbers));