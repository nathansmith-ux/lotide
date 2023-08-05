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
    console.log(`✅✅✅ The function is correct ${array1} === ${array2}`);
  } else {
    console.log(`⛔⛔⛔ The function is incorrect ${array1} !== ${array2}`);
  }
};

// Function accepts a single array (sentence)
const letterPositions = function(sentence) {
  const results = {};
  
  // Makes the sentence a single lowercase string
  let newSentence = sentence.split(" ").join("").toLowerCase(); 
  for (let i = 0; i < newSentence.length; i++) {
    let letter = newSentence[i];
    if (!results[letter]) {
      // Creates a new array when it first encounters each letter
      results[letter] = []; 
      // Adds letter index value to new array found within the letter key
      results[letter].push(i); 
    } else {
      // When it encounters the same letter a second time it pushes the value to the array value
      results[letter].push(i); 
    }
  }
  return results;
};

// Exporting Function
module.exports = letterPositions;

// Testing Start Of String
assertArraysEqual(letterPositions("Lighthouse in the house").l, [0]);

// Testing The Middle
assertArraysEqual(letterPositions("Lighthouse in the house").i, [1, 10]);

// Testing The End Of The String
assertArraysEqual(letterPositions("Lighthouse in the house").e, [9, 14, 19]);