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
    console.log(`✅✅✅ The array has been flattened!`);
  } else {
    console.log(`⛔⛔⛔ The array was not flattened correctly, try again`);
  }
};

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    } else {
      flattenedArray = flattenedArray.concat(array[i]);
    }
  }
  return flattenedArray;
};

// Test Case 1 Only Numbers
const onlyNumbers = [1, 2, 3, 4, 5, 6];
const beforeOnlyNumbers = [1, 2, [3, 4], 5, [6]];

// Test Case 2 Only Strings
const onlyStrings = ["LHL", "bootcamp", "is", "fun"];
const beforeOnlyStrings = ["LHL", "bootcamp", ["is", "fun"]];


// Test Case 3 Empty Array
const emptyArray = [1, 2, 3, 5];
const beforeEmptyArray = [1, 2, 3, [], 5];

// Test Case 4 Numbers and strings
const stringAndNumbers = [1, 2, 3, 4, "LHL", "Lighthouse", 6, "Web"];
const beforeStringAndNumbers = [1, 2, 3, 4, ["LHL", "Lighthouse"], 6, "Web"];

assertArraysEqual(onlyNumbers, flatten(beforeOnlyNumbers));
assertArraysEqual(onlyStrings, flatten(beforeOnlyStrings));
assertArraysEqual(emptyArray, flatten(beforeEmptyArray));
assertArraysEqual(stringAndNumbers, flatten(beforeStringAndNumbers));