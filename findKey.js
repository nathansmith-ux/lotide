// Function compares if two primitive data types are strictly equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function accepts an object and a callback function
const findKey = function(object, callback) {
  // Looping through all keys in the object
  for (const key in object) {
    // If the callback function matches the object's value returns the key
    if (callback(object[key])) {
      return key;
    }
  }
};

// Exporting Function
module.exports = findKey;

// Finding keys that match 2 stars
const stars = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

// Finding keys that that have a review of 3
const fastFood = findKey({
  "McDonalds": {review: 5},
  "Wendys": {review: 3},
  "Burger_King": {review: 4},
  "OddBurger": {review: 5},
  "Smokes": {review: 2}
}, x => x.review === 3);

// Finding keys that match 6 sets
const workOut = findKey({
  "barbell_row": {sets: 3},
  "bench_press": {sets: 4},
  "dips": {sets: 6},
  "squat": {sets: 5}
}, x => x.sets === 6);

assertEqual(stars, "noma");
assertEqual(fastFood, "Wendys");
assertEqual(workOut, "dips");