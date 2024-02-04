//Write a function to count the number of vowels in a string.

function countVowel(str) {
  str = str.toLowerCase();
  let a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0,
    count = 0;

  for (let letter of str) {
    switch (letter) {
      case "a":
        a++;
        count++;
        break;
      case "e":
        e++;
        count++;
        break;
      case "i":
        i++;
        count++;
        break;
      case "o":
        o++;
        count++;
        break;
      case "u":
        u++;
        count++;
    }
  }
  return `In this string, ${count} vowels founded. Here's the breakdown: A: ${a} times, E: ${e} times, I: ${i} times, O: ${o} times, and U: ${u} times founded.`;
}

const string =
  "JavaScript, a cornerstone of web development, empowers dynamic and interactive user experiences. Its versatility spans from client-side scripting to server-side programming, making it a key player in crafting modern, responsive websites and applications. With an ever-growing ecosystem and continual updates, JavaScript remains a fundamental language for developers navigating the evolving digital landscape.";

console.log(countVowel(string));
