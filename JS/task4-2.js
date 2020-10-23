const isUniq = (element, index, arr) => arr.indexOf(element) === index;

const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
  ("use strict");
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    // Write code under this line
    const add = cb(element, index, array);
    if (add) {
      numbers.push(element);
    }
  }
  return numbers;
}
const arr = [1, 2, 3, 4, 5, 3, 2, 1];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// // [2, 4, 2]