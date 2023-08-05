const assertObjectsEqual = require('../assertObjectsEqual');

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