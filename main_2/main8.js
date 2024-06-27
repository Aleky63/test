const app = document.getElementById("app");

const blok = document.createElement("blok");
blok.classList.add("blok");

let button = document.createElement("button");
button.classList.add("btn", "btnStart");
button.textContent = "Старт/Пауза";

let buttonStop = document.createElement("button");
buttonStop.classList.add("btn", "btnStop");
buttonStop.textContent = "Стоп";

blok.append(button, buttonStop);

app.append(blok);

const buttonName = {
  START: "Start",
  PAUSE: "Pause",
  STOP: "Stop",
};
let count = 0;
let countId = 0;
let click = "";

function startBtn() {
  if (click !== buttonName.START) {
    countId = setInterval(() => {
      console.log(++count);
    }, 1000);
    click = buttonName.START;
  } else {
    clearInterval(countId);
    click = buttonName.PAUSE;
  }
}

button.addEventListener("click", startBtn);

function stopBtn() {
  clearInterval(countId);
  count = 0;
  alert(count);
  console.log(count);
}

buttonStop.addEventListener("click", stopBtn);
