module.exports = function toReadable(number) {
  const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (number === 0) return "zero";
  let hundreds = "";
  if (number >= 100) {
    hundreds = `${units[Math.floor(number / 100)]} hundred`;
    number %= 100;
  }
  let tensPart = "";
  if (number >= 20 && number < 100) {
    tensPart = tens[Math.floor((number - number % 10) / 10)];
    number = number % 10;
  }

  let result = (hundreds ? hundreds : "") + (tensPart ? ` ${tensPart}` : "") + (number ? ` ${units[number]}` : "");
  return result.trim();
}