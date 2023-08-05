# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/). 

## Usage

**Install it:**

`npm install @nathansmith-ux/lotide`

**Require it:**

`const _ = require('@nathansmith-ux/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

### head function
```javascript 
_.head([1, 2, 3, 4]);
// Returns 
1 
```
* The head function returns the first element of an array. It will not return the first element in an array. 
### tail Function
```javascript 
_.tail([1, 2, 3, 4])
// Returns 
[2, 3, 4];
```
* The tail funtion will remove the first element of the array and return the remaining elements of the array. It will return a new array instead of modifying the existing array
### without Function
```javascript 
_.without(["hello", "world", "lighthouse"], ["lighthouse"]);
// Returns 
["hello", "world"];
```
* The without function will accept two arrays. One array is the "source array" and the other is the "itemsToRemove" array.
* It will return a new array containing source array elements not found in the itemsToRemove array.
### flatten Function
```javascript 
_.flatten([1, 2, [3, 4], 5, [6]]);
// Returns 
[1, 2, 3, 4, 5, 6];
```
* The flatten function will accept a nested array and return a single level array. 
* Note: This function can only handle 1 level of nesting, it has not been built using recursion
### middle Function
```javascript 
// Odd Numbered Arrays
_.middle([1, 2, 3, 4, 5]);
// Returns 
[3]

// Even Numbered Arrays
_.middle([1, 2, 3, 4, 5, 6]);
// Returns 
[3, 4]

// Array with 1 or 2 elements
_.middle([1]);
_.middle([1, 2]);
// Returns 
[]
```
* The middle function takes a single array and returns a new array with the middle elements. 
* If the array contains an odd number of elements it will return a single middle element
* If the array contains an even number of elements it will return two elements
* If the array contains only 1 or 2 elements then it will return an empty array.
### countOnly Function
```javascript 
const array = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const object = {
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false 
};

_.countOnly(array, object);

// Returns 
{
  Fang: 2,
  Jason: 1 
};

```
* The countOnly function will accept an array of items and an object with boolean values. It will return an object with the items as keys and the number of times they appear within the array as values. 
* Note: The array can only contain the string data type.
### countLetters Function
```javascript 
_.countLetters("I Love Learning JavaScript");

// Returns
{
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
```
* The countLetters function will accept a string and return the number of times each letter appears in the string. 
* It will return an object with the key as the letter and the count as the value.
* Note: This function can handle uppercase and lowercase letters but will always return lowercase letters. 
### letterPositions Function
```javascript 
_.letterPositions(["Lighthouse In The House"]);

// Returns 
{
  l: [ 0 ],
  i: [ 1, 10 ],
  g: [ 2 ],
  h: [ 3, 5, 13, 15 ],
  t: [ 4, 12 ],
  o: [ 6, 16 ],
  u: [ 7, 17 ],
  s: [ 8, 18 ],
  e: [ 9, 14, 19 ],
  n: [ 11 ]
};
```
* The letterPositions function will accept a string and return the index position of each letter within the string.
* It will return an object with the key as the letter and the value as an array with the index positions.
* Note: This function can handle uppercase and lowercase letters but will always return lowercase letters.
### findKeyByValue Function
```javascript 
const object = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  family: "Suite Life Of Zach & Cody",
  suspence: "Succession",
  action: "Equalizer",
  horror: "Halloween",
  romantic: "Notebook"
};

const value = "Brooklyn Nine-Nine";

_.findKeyByValue(object, value);

// Returns 
"comedy"
```
* The findKeyByValue function will accept an object and a value. It will return the first key that matches the provided value. 
* If no key matches the provided value it will return undefined.
* Note: This function can accept both strings and numbers as values.
### map Function
```javascript 
const array = [1, 2, 3, 4, 5];
const callBack = function(element) {
  element * 5; 
}

_.map(array, callBack);

// Returns
[ 3, 6, 9, 12, 15 ]
```
* The map function is similar to the one found in [mdn documenation about array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
* This function will accept an array and a callback function. It will return a new array with elements that match the conditions outlined in the callback function
* Note: This function can accept an array of strings or numbers. The callback function can also be written inline as an arrow function.
### takeUntil Function
```javascript 
const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const callBack = function(element) {
  element < 0;
};

_.takeUntil(array, callBack);

// Returns
[ 1, 2, 5, 7, 2 ]
```
* The takeUntil function accepts an array and a callback function. It will check each element of the provided array against the callback function. If the element meets the conditions then it will be pushed to a new array. However, if the element doesn't meet the conditions it will stop and return the array.
* Note: The callback function can be written inline as an arrow function.
### findKey Function
```javascript 
const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const callBack = function(key) {
  key.stars === 2
};

_.findKey(object, callBack);

// Returns
"noma"
```
* The findKey function accepts an object and a callback function. It will return the first key that meets the criteria of the callback function. If no key matches the criteria then it will return undefined.
* Note: The callback function can be written inline as an arrow function.