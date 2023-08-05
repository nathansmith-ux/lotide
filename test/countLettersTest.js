const countLetters = require('../countLetters');
const assert = require('chai').assert;


describe("#countLetters", () => {
  it("returns an object that counts each letter in the sentence", () => {
    assert.deepEqual(countLetters("My name is Nathan"), name);
  });

  it("returns an object that counts each letter in the sentence", () => {
    assert.deepEqual(countLetters("i love learning javascript"), inputString);
  });
});
// Testing Using String "I Love Learning JavaScript"

// Object Declarations
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

// Object Declarations
const name = {
  m: 2,
  y: 1,
  n: 3,
  a: 3,
  e: 1,
  i: 1,
  s: 1,
  t: 1,
  h: 1,
};
