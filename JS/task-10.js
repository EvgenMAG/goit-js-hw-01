function checkForSpam(str) {
  const smallString = str.toLowerCase();
  console.log(smallString);

  return smallString.includes("sale") || smallString.includes("spam")
    ? true
    : false;

  // word HOW TO CREATE A LIST OF restricted words
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
