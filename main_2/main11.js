// task-1

const btn = document.getElementById("change-bg");
// const btn = document.querySelector("button");
const body = document.querySelector("body");

function changeColorBody() {
  const color = btn.getAttribute("data-color");
  body.setAttribute("style", "background-color: " + color);
}
btn.addEventListener("click", changeColorBody);

// task-2

let elem = document.querySelector("body");
let style = getComputedStyle(elem);
console.log(style.backgroundColor);

// task-bonus

const colors = [
  "#e82315",
  "#e89415",
  "#e8a7ca",
  "#32a832",
  "#3250a8",
  "#a86032",
  "#e90b30",
];

setInterval(() => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  body.style.backgroundColor = randomColor;
}, 2000);
