const nodes = Array.from(document.body.childNodes);
console.log(nodes);
nodes.forEach((node) => {
  console.log(node);
});
// Получаем доступ к body
const body = document.body;

// Получаем первый дочерний элемент - firstElementChild
const firstChildElement = body.firstElementChild;

// Получаем последний дочерний элемент - lastElementChild
const lastChildElement = body.lastElementChild;

// Можно получить текст элемента из свойства textContent
console.log(firstChildElement.textContent); // Первый абзац
console.log(lastChildElement.textContent);

const myElement = document.getElementById("three");
console.log(myElement.textContent); // Второй абзац

// const elements = document.querySelectorAll("ul > li:last-child");
// for (const element of elements) {
//   console.log(element.innerHTML);
// }
const elements = document.querySelectorAll(" li");
for (const element of elements) {
  console.log(element.innerHTML);
}

const elem = document.querySelector("ul > li:last-child");

console.log(elem.innerHTML);
