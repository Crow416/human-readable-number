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

//   const tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
//   let hundreds = "";
//   if (number >= 100) {
//     hundreds = units[Math.floor(number / 100)];
//     number %= 100;
//   }
//   let tensPart = "";
//   if (number >= 20 && number < 100) { // добавлено условие для чисел от 20 до 99
//     tensPart = tens[Math.floor((number - number % 10) / 10)];
//     number = number % 10;
//   } else if (number > 0 && number <= 20) {
//     tensPart = units[number];
//   } else {
//     // добавлено условие для чисел от 10 до 19
//     if (number < 20 && number >= 10) {
//       tensPart = tens[number];
//     } else {
//       // для остальных чисел (от 0 до 9)
//       tensPart = units[number];
//     }
//   }

//   return hundreds + (tensPart ? " " + tensPart : "") + (number ? units[number] : "");