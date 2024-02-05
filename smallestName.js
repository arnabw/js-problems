//Find the friend with the smallest name.
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

// First Thought
/* let smallestName = heights2[0];
for (let elem of heights2) {
  if (elem.length < smallestName.length) {
    smallestName = elem;
  }
}
console.log(smallestName); */

//Second Thought
let array = [];

for (let elem of heights2) {
  array.push(elem.length);
}
let min = Math.min(...array);
min = array.indexOf(min);

console.log(heights2[min]);
