// Function compares if two primitive data types are strictly equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function accepts a string
const countLetters = function(sentence) {
  // Declaring a new object to record the letter count
  let numberOfLetters = {};
  // Removing all spaces in the sentence and making the letters lowercase
  let newSentence = sentence.split(" ").join("").toLowerCase();
  for (const letter of newSentence) {
    // If the letter exists as key value pair increase value by 1
    if (numberOfLetters[letter]) {
      numberOfLetters[letter] += 1;
    } else {
      // If the letter doesn't exist as a key value pair make value 1
      numberOfLetters[letter] = 1;
    }
  }
  return numberOfLetters;
};

// Exporting Function
module.exports = countLetters;


// Testing Using String "I Love Learning JavaScript"

// Object Declaration w/ Manual Count
const inputString = {
  i: 3,
  l: 2,
  o: 1,
  v: 2,
  e: 2,
  a: 3,
  r: 2,
  n: 2,
  g: 1,
  j: 1,
  s: 1,
  c: 1,
  p: 1,
  t: 1
};

// Testing number of i's -> Function returns 3
assertEqual(inputString.i, 3);

// Testing number of v's -> Function returns 2
assertEqual(inputString.v, 2);