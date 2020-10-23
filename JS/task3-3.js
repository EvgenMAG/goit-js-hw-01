const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let bestEmployee = "";
  let value = 0;

  const entries = Object.entries(employees);
  for (let entry of entries) {
    // const key = [0];
    // const valueEntry = [1];
    // console.log(entry);
    // if ((entry = {})) {
    //   continue;
    // } else
    if (entry[1] > value) {
      value = entry[1];
      bestEmployee = entry[0];
    }
  }

  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));

const debilos = {};
console.log(findBestEmployee(debilos));

function numberToPower(number, power) {
  // Code here
  let total = number;

  for (let i = 1; i < power; i += 1) {
    total *= number;
  }
  if (power === 0) {
    total = 1;
    console.log(total);
  }
  return total;
}

console.log(numberToPower(10, 3));

function numberToPower(number, power) {
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1);
}

console.log(numberToPower(10, 1));

function numberToPower(number, power) {
  if (power === 0) return 1;
  let total = number;
  total **= power;
  return total;
}

console.log(numberToPower(10, 2));


