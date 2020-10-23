function findLongestWord(string) {
  const words = string.split(" ");
  // console.log(words)
  let biggestWord = "";

  for (const word of words) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
("jumped");

console.log(findLongestWord("Google do a roll"));
("Google");

console.log(findLongestWord("May the force be with you"));
("force");
