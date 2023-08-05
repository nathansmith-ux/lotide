const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns a count of 2 for Fang", () => {
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

    assert.strictEqual(countOnly(array, object)["Fang"], 2);
  });

  it("returns undefined for Karim as it is not present in the array", () => {
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

    assert.strictEqual(countOnly(array, object)["Karima"], undefined);
  });

  it("returns a count of 1 for Jason", () => {
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

    assert.strictEqual(countOnly(array, object)["Jason"], 1);
  });

});