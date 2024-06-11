console.log("//forEach");
const numbers = [1, 11, -2, 3, -10, 4];

numbers.forEach((num) => {
  console.log(`Number is ${num}`);
});

console.log("//Поиск");

const lines = ["cat", "dog", "elephant", "tiger", "lion"];
const firstWordSeven = lines.find((line) => line.length > 7);
console.log(firstWordSeven);

console.log("//filter");

const numbersNegative = numbers.filter((num) => num < 0);
console.log(numbersNegative);

console.log("//map");

const numbersAbsolute = numbers.map((num) => Math.abs(num));
console.log(numbersAbsolute);

console.log("//sort");

const numbersDecreasing = numbers.sort((num1, num2) => num2 - num1);
console.log(numbersDecreasing);
