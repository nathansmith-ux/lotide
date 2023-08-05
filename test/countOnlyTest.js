const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns an object that counts Fang Twice and Jason Once", () => {
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
      "Agouhanna": false,
    };
    
    const result = {
      "Fang": 2,
      "Jason": 1
    };

    assert.deepEqual(countOnly(array, object), result);
  });

  it("returns an object that counts Karima and Jason each once", () => {
    const array = [
      "Karima",
      "Agouhanna",
      "Jason"
    ];

    const object = {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false,
    };

    const result = {
      "Karima": 1,
      "Jason": 1
    };
    
    assert.deepEqual(countOnly(array, object), result);
  });

});