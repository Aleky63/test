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
console.log(counterA());
console.log("-----------------");
console.log(counterB());
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
console.log(counterC());
console.log("-----------------");
console.log(counterF());

function sayHello(name) {
  let message = `Hello, ${name}!`;
  console.log(message);
}
