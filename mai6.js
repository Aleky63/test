function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("вася"));

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
  if (str.length <= str.maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "...";
  }
}

console.log(
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
  truncate("\nВсем привет!", 20),
  truncate("\nВсем привет вававав  пртипиа ппавававв!", 20)
);

function extractCurrencyValue(str) {
  return +str.slice(1);
}
extractCurrencyValue("$120");
