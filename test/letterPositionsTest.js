const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns index of 0 for string 'Lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("Lighthouse in the house").l, [0]);
  });

  it("returns [1, 10] for string 'Lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("Lighthouse in the house").i, [1, 10]);
  });

  it("returns [9, 14, 19] for string 'Lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("Lighthouse in the house").e, [9, 14, 19]);
  });
});