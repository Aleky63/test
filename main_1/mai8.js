function showVerticalMessage(str) {
  if (str[0] === "s") {
    newStr = str[0].toUpperCase() + str.slice(1);
  } else {
    newStr = str.slice(0);
  }
  for (let char of newStr.slice(0, 7)) {
    console.log(char);
  }
}
showVerticalMessage("strasafr8");
