function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counterA = createCounter();
let counterB = createCounter();
let counterC = createCounter();
let counterF = createCounter();

console.log(counterA());
console.log(counterA());
console.log("-----------------");
console.log(counterB());
console.log(counterB());
console.log(counterB());
console.log(counterB());
console.log("-----------------");
console.log(counterC());
console.log(counterC());
console.log(counterC());
console.log(counterC());
console.log(counterC());
console.log("-----------------");
console.log(counterF());

function createAddress(type) {
  const address = type.toUpperCase();
  return function (name) {
    return `${address} ${name}`;
  };
}
const addressGrazhdanin = createAddress("Гражданин");
const addressGrazhdanka = createAddress("Гражданка");

console.log(addressGrazhdanin("Vasy"));
console.log(addressGrazhdanka("Vasyyyyyyyyy"));

function createPlayer(name) {
  let score = 0;
  return function scoreCount() {
    score++;
    return `${name} - ${score} баллов! `;
  };
}
const playerOne = createPlayer("Vasy");
const playerTwo = createPlayer("Vasyiiiiiiipo");

playerOne();
playerOne();
playerOne();
playerOne();
playerOne();
playerOne();
playerTwo();
playerTwo();
playerTwo();
playerTwo();
playerTwo();

console.log(playerOne());
console.log(playerTwo());
