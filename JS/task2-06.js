function mapArray(array) {
  const numbers = new Array();
  // console.log(new Array(10))

  for (let i = 0; i < array.length; i += 1) {
    numbers.push(array[i] * 10);
  }
  return numbers;
}

console.log(mapArray([-2, 0, 2, -2, 0, 2 - 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0]));
[-20, 0, 20];

console.log(mapArray([-2.5, 0, 2.5]));
[-25, 0, 25];
