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

// In Second Thought
/* function longestWord(str) {
  const array = str.split(" ");
  let value = [];
  for (let i = 0; i < array.length; i++) {
    let x = array[i].length;
    value.push(x);
  }
  let x = Math.max(...value);
  x = value.indexOf(x);
  return `The longest word is "${array[x]}"`;
} */

console.log(longestWord("I am learning Programming to become a programmer"));
