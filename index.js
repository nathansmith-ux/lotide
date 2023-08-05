// Importing all the functions in the Lotide Library
const assertEqual = require('./assertEqual');
const head = require('./head');
const tail = require('./tail');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const flatten = require('./flatten');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');

// Exporting all the functions in the Lotide Library as an object
module.exports = {
  assertEqual,
  head,
  tail,
  eqArrays,
  assertArraysEqual,
  without,
  flatten,
  middle,
  countOnly,
  countLetters,
  letterPositions,
  findKeyByValue,
  eqObjects,
  assertObjectsEqual,
  map,
  takeUntil,
  findKey,
};