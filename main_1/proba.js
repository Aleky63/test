// 1
const temp = 3;
if (temp < 0) {
  console.log("Опасно холодно!");
} else if (temp < 5) {
  console.log("Очень холодно");
} else if (temp < 20) {
  console.log("Прохладно");
} else {
  console.log("Тепло");
}

// 2
const sum = 3000;
if (sum > 1000) {
  console.log(sum * 0.95);
} else if (sum > 5000) {
  console.log(sum * 0.9);
} else {
  console.log(sum);
}

// 3
const age = 30;
if (age < 18) {
  console.log("подросток");
} else if (age < 65) {
  console.log("взрослый");
} else {
  console.log("пенсионер");
}

// 4
let time = 15;
const status = time >= 9 && time < 18 ? "Магазин работает" : "Магазин закрыт";
console.log(status);

// 5

const test = 77;

if (test >= 90 && test <= 100) {
  console.log(`Отлично. Оценка: ${test}`);
} else if (test >= 70 && test <= 89) {
  console.log(`Хорошо. Оценка: ${test}`);
} else if (test >= 50 && test <= 69) {
  console.log(`Удовлетворительно. Оценка: ${test}`);
} else if (test < 50 && test > 0) {
  console.log(`Неудачно. Оценка: ${test}`);
} else {
  console.log(`Ошибка. Оценка: ${NaN}`);
}
