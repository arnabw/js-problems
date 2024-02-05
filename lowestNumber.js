//Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(array) {
  /*  let min = array[0];
  for (let elem of array) {
    if (elem < min) {
      min = elem;
    }
  } */

  let min = Math.min(...array);

  return min;
}

console.log(lowestNumber(heights2));
