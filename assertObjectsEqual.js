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

// Function accepts two objects
const eqObjects = function(object1, object2) {
  // Assigns variables to an array of the keys in objects 1 and 2
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // If the number of keys are not equal in both objects return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Loop through all the keys in the keys1 array
  for (const key of keys1) {
    // Assigns variables to all the key's values in objects 1 and 2
    const value1 = object1[key];
    const value2 = object2[key];

    // If the values in both object 1 and 2 are arrays use the eqArrays function
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (eqArrays(value1, value2)) {
        continue;
      }
      return false;
    }

    // If the values in both objects are not equal return false
    if (value1 !== value2) {
      return false;
    }
  }

  return true;
};

// Compares if two objects are equal using the util library
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test Case 1: Return Passed
const object1 = {
  name: "Nathan",
  age: 24
};

const object2 = {
  name: "Nathan",
  age: 24
};


// Test Case 2: Return Failed
const movies1 = {
  action: "Equalizer",
  comedy: "Step Brothers",
  suspence: "The Call"
};

const movies2 = {
  comedy: "Equalizer",
  action: "Step Brothers",
  suspence: "Halloween"
};

// Test Case 3: Arrays Failed
const games1 = {
  action: ['Snake', 'call of duty'],
  puzzle: ['Zelda', 'overcooked']
};

const games2 = {
  action: ['call of duty'],
  puzzle: ['overcooked']
};

// Test Case 3: Arrays Passed
const fun1 = {
  action: ['climbing', 'weightlifting'],
  comedy: ['comedy club', 'videogames']
};

const fun2 = {
  action: ['climbing', 'weightlifting'],
  comedy: ['comedy club', 'videogames']
};

assertObjectsEqual(object1, object2);
assertObjectsEqual(movies1, movies2);
assertObjectsEqual(games1, games2);
assertObjectsEqual(fun1, fun2);