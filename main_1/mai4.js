let calc = (operation, a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Введите число";
  }
  switch (operation) {
    case "add":
      return a + b;
      break;
    case "multi":
      return a * b;
      break;
    case "subtract":
      return a - b;
      break;
    case "NaN":
      return "Абракадабра";
      break;
    default:
  }
};
console.log(calc("add", 10, 5));
console.log(calc("multi", 10, 5));
console.log(calc("subtract", 10, 5));
console.log(calc(10, 5));
console.log(calc("subtract", " fff", 5));
console.log(calc("NaN", 10, 5));
console.log(calc(5, 10, 10));
