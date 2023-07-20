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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (eqArrays(value1, value2)) {
        continue;
      }
      return false;
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
};

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