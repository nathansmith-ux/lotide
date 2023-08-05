// Function compares if two primitive data types are strictly equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function accepts an object and a key's value then returns the first key that matches the provided value
const findKeyByValue = function(object, value) {
  // Assigns all keys in the object to the keys variable
  let keys = Object.keys(object); 
  // Loops through all the object keys
  for (let key of keys) { 
    // Compares object's value with value passed through, if true it will return the key
    if (object[key] === value) { 
      return key;
    }
  }
};

// Exporting Function
module.exports = findKeyByValue;

// Provided Object
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  family: "Suite Life Of Zach & Cody",
  suspence: "Succession",
  action: "Equalizer",
  horror: "Halloween",
  romantic: "Notebook"
};

// Testing To See If Function Works As Expected
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Succession"), "suspence");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Notebook"), "romantic");
