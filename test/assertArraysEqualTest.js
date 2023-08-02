const assertArraysEqual = require('../assertArraysEqual');

// True Test Case
assertArraysEqual([5, 6, 7], [5, 6, 7]);
assertArraysEqual(["5", "6", "7"], ["5", "6", "7"]);

// False Test Case
assertArraysEqual(["5", "6", "7"], ["5", "6", "8"]);
assertArraysEqual(["5", "6", "7"], ["5", "6", 7]);
assertArraysEqual([15, 6, 7], [5, 6, 7]);