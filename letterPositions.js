/**
 * Function returns the index values of each letter in a string
 * @param {string} sentence
 * @returns object
 */
const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.split(" ").join("").toLowerCase();
  
  for (let i = 0; i < newSentence.length; i++) {
    let letter = newSentence[i];
   
    if (!results[letter]) {
      results[letter] = [];
      results[letter].push(i);
    } else {
      results[letter].push(i);
    }
  }

  return results;
};

// Exporting Function
module.exports = letterPositions;