/**
 * Function accepts a string and returns a count of each letter
 * @param {string} sentence 
 * @returns Object with each key as a letter and the value as the number of times that letter appears in the sentence
 */
const countLetters = function(sentence) {
  let numberOfLetters = {};
  let newSentence = sentence.split(" ").join("").toLowerCase();
  
  for (const letter of newSentence) {
    if (numberOfLetters[letter]) {
      numberOfLetters[letter] += 1;
    } else {
      numberOfLetters[letter] = 1;
    }
  }
  return numberOfLetters;
};

// Exporting Function
module.exports = countLetters;