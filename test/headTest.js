const assertEqual = require('../assertEqual');
const head = require('../head');

// Returns Assertion Passed: 5 === 5
assertEqual(head([5,6,7]), 5);

// Returns Assertion Passed: Hello === Hello
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Returns Assertion Passed: 6 === 6
assertEqual(head([6]), 6);

// Returns Assertion Passed: undefined === undefined
assertEqual(head([]));