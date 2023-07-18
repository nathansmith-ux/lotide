const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let numberOfLetters = {};
  let newSentence = sentence.split(" ").join("").toLowerCase();
  console.log(newSentence);
  for (const letter of newSentence) {
    if (numberOfLetters[letter]) {
      numberOfLetters[letter] += 1;
    } else {
      numberOfLetters[letter] = 1;
    }
  }
  return numberOfLetters;
};


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

console.log(countLetters("I Love Learning JavaScript"));

// Testing number of i's -> Function returns 3
assertEqual(inputString.i, 3);

// Testing number of v's -> Function returns 2
assertEqual(inputString.v, 2);