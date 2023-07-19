const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object); // Assigns all keys in the object to the keys variable
  for (let key of keys) { // Loops through all the object keys
    if (object[key] === value) { // Compares object's value with value passed through, if true it will return the key
      return key;
    }
  }
};

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


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Succession"), "suspence");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Notebook"), "romantic");
