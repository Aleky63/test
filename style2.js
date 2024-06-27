const div = document.createElement("div");

div.classList.add("wrapper");
const body = document.querySelector("body");
body.appendChild(div);
console.log(body);
const header = document.createElement("h1");
header.textContent = " Как Работать с DOM в JS?";

div.insertAdjacentElement("beforebegin", header);

console.log(header);

const ul = `<ul>
        <li>111</li>
        <li>222</li>
        <li>333</li>
    </ul>`;
div.innerHTML = ul;

const img = document.createElement("img");
img.src =
  "https://img.freepik.com/free-photo/close-up-on-adorable-kitten-outdoors_23-2150782405.jpg?w=740&t=st=1719046294~exp=1719046894~hmac=baff0537a77a0d7d79d2fada59b63481dd9767ceb2fcf172a9be276153265ff5";

img.width = 240;

img.classList.add("super");
img.alt = "Super Man";
div.appendChild(img);
console.log(img);

const elemHTML = `
<div class="pDiv">
  <p>101010</p>
  <p>202020</p>
</div>
`;
const ullist = div.querySelector("ul");
ullist.insertAdjacentHTML("beforebegin", elemHTML);

const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");
pDiv.firstElementChild.remove();

const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();

  return `<div class="avtoCard">
  <h2>${brand.toUpperCase()} ${year}</h2>
  <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${
    curYear - year
  } лет.</p>
  <p> Цвет: ${color}</p>
</div>
<button type="button" class="btn">Удалить</button>

  `;
};

const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");

const carsList = [
  { brand: "Tesla", year: 2015, color: "red" },
  { brand: "Lexus", year: 2016, color: "silver" },
  { brand: "Nissan", year: 2012, color: "black" },
];
const carsHTML = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join("");

carsDiv.innerHTML = carsHTML;

div.insertAdjacentElement("beforebegin", carsDiv);

const buttons = document.querySelectorAll(".btn");

function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".autoCard").remove();
}
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
