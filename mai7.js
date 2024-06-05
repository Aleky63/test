// function showVerticalMessage(str) {
//   if (str[0] === "s") {
//     myStr = str[0].toUpperCase() + str.slice(1);
//   } else {
//     myStr = str.slice(0, 7);
//   }
//   for (let letter of myStr.slice(0, 7)) {
//     console.log(letter);
//   }
// }
// showVerticalMessage("stradasye");

function showVerticalMessage(str) {
  myStr =
    str[0] === "s" ? str[0].toUpperCase() + str.slice(1, 7) : str.slice(0, 7);

  for (let letter of myStr) {
    console.log(letter);
  }
}
showVerticalMessage("stradasye");
