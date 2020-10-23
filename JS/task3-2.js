const countProps = function (obj) {
  // Write code under this line
  let total = 0;
  total += Object.keys(obj).length;
  //   console.log(Object.keys(obj));
  return total;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
