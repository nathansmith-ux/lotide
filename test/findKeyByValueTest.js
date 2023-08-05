const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  // Empty Tests
  it("returns 'drama' when provided with value 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined as there is no value for 'That 70s show' ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });

  it("returns 'suspence' when provided with a value of 'Succession'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Succession"), "suspence");
  });

  it("returns 'romantic' when provided with a value of 'Notebook'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Notebook"), "romantic");
  });

});

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