function formatString(string, maxLength = 40) {
  const normalizedString =
    string.length <= maxLength
      ? string
      : `${string.slice(0, maxLength)}${"..."}`;

  return normalizedString;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
("Curabitur ligula sapien, tincidunt non.");

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
("Vestibulum facilisis, purus nec pulvinar...");

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
("Vestibulum facilisis, purus ne...");
