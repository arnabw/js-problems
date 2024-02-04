/* Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */

function longestWord(str) {
  let count = 0,
    word = "",
    longestWord = "";

  for (let letter of str) {
    if (letter === " ") {
      if (count > longestWord.length) {
        longestWord = word;
      }
      word = "";
      count = 0;
    } else {
      word += letter;
      count++;
    }
  }
  if (longestWord.length < word.length) {
    longestWord = word;
  }
  return `The longest word is "${longestWord}"`;
}

console.log(longestWord("I am learning Programming to become a programmer"));
